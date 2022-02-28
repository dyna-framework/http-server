import { Autoimport } from "@dyna/core";
import { CreateHttpServerInitializer } from "./create-http-server.initializer";

export const DynaAutoimport: Autoimport = {
  initializers: [ CreateHttpServerInitializer ],
};
