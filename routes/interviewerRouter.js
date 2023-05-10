import express from "express"
import interviewerController from "../controller/interviewerController.js"


const interviewerRouter = express.Router()

interviewerRouter.post("/registerInterviewer",interviewerController.create)

interviewerRouter.post("/loginInterviewer",interviewerController.login)



export default interviewerRouter