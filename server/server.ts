import express,{Request, Response, Application, Router} from "express"
const app:Application = express()
import { connectDb } from "./db"
import cors from "cors"

import router from "./route"




const controlRoute:Router = router


app.use(cors())
app.use(express.json())

app.use("/api/v1/employees", controlRoute)
app.use("/", (req:Request, res:Response):void=>{
    res.json({})
})

const port = process.env.PORT || 5000

const start = async ():Promise<void> =>{
     try {
        await connectDb("mongodb+srv://josephchuksn:Ervinhack2%40@employeeadmin.jqrhngy.mongodb.net/Employees?retryWrites=true&w=majority")
        console.log("connected")
        app.listen(port, ():void=>{
            console.log(`Server is listening at port ${port}`)
        })
     } catch (error) {
        console.log(error)
     }
}
start()