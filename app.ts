import { Application, Context } from "./deps.ts";

const app = new Application();

// Logger
app.use(async (ctx: Context, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx: Context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// // Hello World!
app.use((ctx: Context) => {
  ctx.response.body = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>App Deno</title>
      <head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

await app.listen({ port: 8000 });
