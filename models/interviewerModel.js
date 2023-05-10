import mongoose from "mongoose";

const interviewerSchema = new mongoose.Schema({

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


const Interviewer = mongoose.model("interviewer",interviewerSchema)

export default Interviewer