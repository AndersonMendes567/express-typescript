import { Request, Response, Router } from "express";

const DemandRouter = Router()

DemandRouter.get('/', (req: Request, res: Response)=> {
  res.status(200).send('GET /demand')
})

DemandRouter.post('/', (req: Request, res: Response)=> {
  res.status(200).send('POST /demand')
})

export default DemandRouter