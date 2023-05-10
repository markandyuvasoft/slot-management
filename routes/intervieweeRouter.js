import express from "express"
import intervieweeController from "../controller/intervieweeController.js"


const intervieweeRouter = express.Router()


intervieweeRouter.post("/registerInterviewee",intervieweeController.registerInterviewee)

intervieweeRouter.post("/loginInterviewee",intervieweeController.loginInterviewee)


export default intervieweeRouter