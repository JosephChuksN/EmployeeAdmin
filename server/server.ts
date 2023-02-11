import express,{Request, Response, Application} from "express"
const app:Application = express()
import { connectDb } from "./db"

import router from "./route"
const controlRoute = router

const PORT = process.env.PORT || 5000


app.use("api/v1/employees", controlRoute)
app.use("/", (req:Request, res:Response):void=>{
    res.json({})
})


const start = async ():Promise<void> =>{
     try {
        await connectDb("mongodb+srv://josephchuksn:Ervinhack2%40@linksapicluster.8rs8mrb.mongodb.net/LINKS-API?retryWrites=true&w=majority")
        app.listen(PORT, ():void=>{
            console.log(`Server is listening at port ${PORT}`)
        })
     } catch (error) {
        console.log(error)
     }
}