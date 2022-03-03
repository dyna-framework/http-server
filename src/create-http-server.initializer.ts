import { BaseInitializer } from '@dyna/core'
import { createServer, Server } from 'http'
import { env } from '@dyna/env'

/**
 * Extend application extra values
 */
declare module '@dyna/core' {
  export interface ExtraApplication {
    httpServer?: Server
  }
}

/**
 * Create HTTP Server
 */
export class CreateHttpServerInitializer extends BaseInitializer {
  port: number = env('HTTP_SERVER_PORT', '8900')
  host: string = env('HTTP_SERVER_HOST', 'localhost')
  server: Server = createServer(() => null)

  async register() {
    if (this.app) {
      this.app.ex.httpServer = this.server
    }
  }

  async boot(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.listen(this.port, this.host, () => {
        this.onListening()
        resolve()
      })
    })
  }

  onListening() {
    console.log(`Server is running on ${this.host}:${this.port}`)
  }
}
