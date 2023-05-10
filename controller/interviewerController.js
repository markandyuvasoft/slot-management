import express from "express"
import Interviewer from "../models/interviewerModel.js"

const interviewerController = express.Router()

const create = async(req,res) =>{

    try {
        const {firstName, email, password} = req.body

        if(!firstName || !email || !password) {
            res.status(400).send({message : "plz fill entry"})
        }
        else {
    
            const checkDetails = await Interviewer.findOne({email})
    
            if(checkDetails) {
              return  res.status(404).send({message: "you already register"})
            }
            const createInterviewer = new Interviewer({
                firstName,email,password
            })
             await createInterviewer.save()
    
            res.status(200).send({message : "register interviewer",createInterviewer})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


const login = async(req,res) =>{

    try {
        const {email,password} = req.body

        if(!email || !password) {
            res.status(400).send({message: "plz enter details"})
        }
        else {
            const checkEmail = await Interviewer.findOne({email})
    
            if(!checkEmail) {
                return  res.status(400).send({message : "wrong entry"})
            }
            const checkPassword = await Interviewer.findOne({password})
    
            if(!checkPassword) {
                return  res.status(400).send({message : "wrong entry"})
                }
                
            let Id = checkEmail._id;
            res.status(200).send({message: "login success",Id})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

export default {
    interviewerController,
    create,
    login
}