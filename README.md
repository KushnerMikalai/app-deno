# Deno App - Deno RESTful apis

<img src="https://deno.land/images/deno_logo_4.gif" alt="logo" width="300"/>

This is a simple project Deno RESTful APIs using
[Oak](https://deno.land/x/oak) and [deno_mongo](https://deno.land/x/mongo)

### Features

- Model, Controller, Service based project structure
- CORS
- Denon Integration

## Setup

### Install denon

If its your first run, please install `denon` from
[https://deno.land/x/denon](https://deno.land/x/denon) If there is error while
installing denon, refer this solution:
https://github.com/denosaurs/denon/issues/122#issuecomment-770895766

### Install Dependencies

To install dependencies, run following command in your terminal. **Note:
Terminal path must be project directory's root path**

```
deno cache --reload --unstable --lock-write --lock=lock.json ./deps.ts
```