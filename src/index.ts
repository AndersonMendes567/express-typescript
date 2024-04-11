import { NextFunction, Request, Response } from "express";
import ClientRouter from "./routes/dashboard/client";
import app from "./lib/express";
import DemandRouter from "./routes/gerencial/demmand";

const middleware = (req: Request, res: Response, next: NextFunction)=> {
  const authorize = false
  if(authorize) {
    next()
  } else {
    res.status(403).send({ message: 'Não autorizado' })
  }
}

app.use('/client', ClientRouter)
app.use('/demand', DemandRouter)

app.use(middleware)

app.get('/', (req: Request, res: Response)=> {
  console.log('passou')
  res.status(200).send('Sucesso!')
})


app.listen(3000, ()=> {
  console.log('Server running in port 3000')
})