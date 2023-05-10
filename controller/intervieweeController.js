import express from "express"
import Interviewee from "../models/intervieweeModel.js"


const intervieweeController = express.Router()


const registerInterviewee = async(req,res) =>{

    try {
        const {firstName, email, password} = req.body

        if(!firstName || !email || !password) {
            res.status(400).send({message : "plz fill entry"})
        }
        else {
    
            const checkDetails = await Interviewee.findOne({email})
    
            if(checkDetails) {
              return  res.status(404).send({message: "you already register"})
            }
            const createInterviewee = new Interviewee({
                firstName,email,password
            })
             await createInterviewee.save()
    
            res.status(200).send({message : "register Interviewee",createInterviewee})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


const loginInterviewee = async(req,res) =>{

    try {
        const {email,password} = req.body

        if(!email || !password) {
            res.status(400).send({message: "plz enter details"})
        }
        else {
            const checkEmail = await Interviewee.findOne({email})
    
            if(!checkEmail) {
                return  res.status(400).send({message : "wrong entry"})
            }
            const checkPassword = await Interviewee.findOne({password})
    
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
    intervieweeController,
    registerInterviewee,
    loginInterviewee
}