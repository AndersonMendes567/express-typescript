import { NextFunction, Request, Response } from "express"

export const middleware = (req: Request, res: Response, next: NextFunction)=> {
  const authorize = true
  if(authorize) {
    next()
  } else {
    res.status(403).send({ message: 'Não autorizado' })
  }
}
