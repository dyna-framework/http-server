import { Autoimport } from "@dyna/core";
import { CreateHttpServer } from "./create-http-server.initializer";

export const DynaAutoimport: Autoimport = {
  initializers: [ CreateHttpServer ],
};
