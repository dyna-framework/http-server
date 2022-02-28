import { BaseInitializer } from '@dyna/core';
import { createServer, Server } from 'http';

declare module "@dyna/core" {
  export interface ExtraApplication {
    httpServer?: Server;
  }
}

export class CreateHttpServer extends BaseInitializer {

  port: number = 8044;
  host: string = 'localhost';
  server: Server = createServer(() => null);

  async register() {
    if (this.app) {
      this.app.ex.httpServer = this.server;
    }
  }

  async boot() {
    this.server.listen(this.port, this.host, () => console.log('Server is running on localhost'));
  }

}
