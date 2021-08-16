import express from 'express'

class App {
    
  public express
  constructor() {
    this.express = express()
    this.mountRoutes()
  }
  private mountRoutes():void {
    const router = express.Router()
    this.express.use('/', router)
    this.express.use(express.static('public'))
  }
}
export default new App().express