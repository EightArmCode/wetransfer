import express from 'express'
import { join } from 'path'

class App {
    
  public express
  constructor() {
    this.express = express()
    this.mountRoutes()
  }
  private mountRoutes(): void {
    const router = express.Router()
    // router.get('/', (req:Request, res:Response) => {
    //   res.send({ message: 'Go away, world!' })
    // })
    this.express.use('/', router)
    this.express.use(express.static('public'))
    // this.express.use('/public', express.static(join('public')))
  }
}
export default new App().express