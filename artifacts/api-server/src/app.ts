import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import type { IncomingMessage, ServerResponse } from "http";
import router from "./routes";
import { logger } from "./lib/logger";

const pinoHttp = ((pinoHttpModule as any).default ??
  (pinoHttpModule as any).pinoHttp ??
  pinoHttpModule) as any;

const app: Express = express();

app.use(
  // @ts-ignore pino-http may export a callable default or CJS factory
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
