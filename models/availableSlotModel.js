import mongoose from "mongoose";

const availableSchema = new mongoose.Schema({

    interviewer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "interviewer"
    },
    days : {
        type : String,
        enum : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    startDate : {
        type : String
    },
    endDate : {
        type : String
    }
})

const Available = mongoose.model("available",availableSchema)


export default Available