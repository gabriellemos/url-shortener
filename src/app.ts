import express from 'express'
import cors from 'cors'

import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.middleware()
    this.routes()
  }

  private middleware(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
