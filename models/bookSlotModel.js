import mongoose from "mongoose";

const bookSlotSchema = new mongoose.Schema({

    interviewer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "interviewer"
    },
    interviewee : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "interviewee"
    },
    day: {
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

const Booking = mongoose.model("booking",bookSlotSchema)

export default Booking