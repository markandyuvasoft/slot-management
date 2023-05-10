import express from "express"
import availableController from "../controller/availableController.js"


const availableRouter = express.Router()


availableRouter.post("/available", availableController.createAvailable)

availableRouter.get("/listInterviewerAvailable", availableController.getAvailable)



export default availableRouter