import express from "express"
import Available from "../models/availableSlotModel.js"


const availableController = express.Router()

const createAvailable = async(req,res) =>{

    try {
        const {days, startDate, endDate,interviewer} = req.body

        if(!days || !startDate || !endDate) {
            
            res.status(400).send({message : "plzz fill slot details"})
        }
        else {
            const createAvailable = new Available ({
                days, startDate, endDate,interviewer
            })

            await createAvailable.save()
    
            res.status(200).send({message : "available days are",createAvailable})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


const getAvailable = async(req,res) =>{

    try {
        const interviewerAvailable = await Available.find({}).populate("interviewer", {firstName: 1})

        if(interviewerAvailable.length === 0) {
            res.status(400).send({message : "interviewer not avilable"})
        }
        else {
            res.status(200).send({message: "interviewer available list", interviewerAvailable})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}




export default {
    availableController,
    createAvailable,
    getAvailable
}