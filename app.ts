import { Application, oakCors } from "./deps.ts";
import configs from "./config/config.ts";
import router from "./routers/index.ts";

const { port, clientUrl } = configs;

const app: Application = new Application();

const corsOptions = {
  "origin": clientUrl,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
  "credentials": true,
};

app.use(oakCors(corsOptions));

router.init(app);

if (import.meta.main) {
  console.log(port, 'port')
  await app.listen({ port });
}

export { app };
