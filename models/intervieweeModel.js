import mongoose from "mongoose";

const intervieweeSchema = new mongoose.Schema({

    firstName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
})

const Interviewee = mongoose.model("interviewee",intervieweeSchema)

export default Interviewee