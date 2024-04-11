import { Request, Response } from "express";
import app from "./lib/express";
import ClientRouter from "./routes/dashboard/client";
import DemandRouter from "./routes/gerencial/demmand";
import { middleware } from "./middlewares";

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