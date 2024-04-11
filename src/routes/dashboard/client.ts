import { Router, Request, Response } from "express";

const ClientRouter = Router()

ClientRouter.get('/', (req: Request, res: Response)=> {
  res.status(200).send('GET /client')
})

ClientRouter.post('/', (req: Request, res: Response)=> {
  res.status(200).send('POST /client')
})

export default ClientRouter