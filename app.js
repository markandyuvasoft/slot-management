import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import interviewerRouter from "./routes/interviewerRouter.js"
import intervieweeRouter from "./routes/intervieweeRouter.js"
import availableRouter from "./routes/availableRouter.js"
import bookingRouter from "./routes/bookingRouter.js"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/",interviewerRouter)
app.use("/api/v1/",intervieweeRouter)
app.use("/api/v1/",availableRouter)
app.use("/api/v1/",bookingRouter)




const PORT=process.env.PORT||3000

// connect mongo db atlas
mongoose.connect(process.env.MONGO_URL,{usenewurlparser:true,}).then(()=>{
    console.log("connected to mongodb atlas")
}).catch(error=>{
console.log("something wrong")
})


// server port
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});