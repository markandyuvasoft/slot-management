import express from "express"
import Booking from "../models/bookSlotModel.js"


const bookingController = express.Router()

const bookSlot = async(req,res) =>{
    
    try {
        const { day, startDate, endDate, interviewer, interviewee } = req.body;
      
        if (!startDate || !endDate) {
          return res.status(400).json({ message: 'Please fill in start and end times.' });
        }
      
        //                                                                              lt = less then  gt = grater then
        const overlappingAppointments = await Booking.find({ interviewer, startDate: { $lt: endDate }, endDate: { $gt: startDate } });
        if (overlappingAppointments.length > 0) {
            return res.status(400).json({ message: 'The specified time slot overlaps with an existing appointment.' });
        }
        
        // const existingAppointments = await Booking.find({ day, interviewer });
        // if (existingAppointments.length > 0) {
        //   return res.status(400).json({ message: 'The specified day is already booked for this interviewer.' });
        // }
        const createBooking = new Booking({ day, startDate, endDate, interviewer, interviewee });
        await createBooking.save();
        res.status(200).json({ message: 'Booking created.', createBooking });
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



const getBooking = async (req,res) =>{

    try {
        const bookingList = await Booking.find({}).populate("interviewer", {firstName : 1}).populate("interviewee", {firstName : 1})

        if(bookingList.length === 0) {
            res.status(200).send({message : "not found any slot"})
        }
        else {
            res.status(200).send({message : "slot book list are", bookingList})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


const getSingleBooking = async(req,res) =>{

    try {
        const id = req.params.id

        const getSingleBook = await Booking.findById(id).populate("interviewer", {firstName : 1}).populate("interviewee", {firstName : 1})
    
        if(getSingleBook == null) {
            res.status(200).send({message : "not found slot"})
        }
        else {
            res.status(200).send({message : "slot book are", getSingleBook})
        }
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


const deleteBooking = async(req,res) =>{

    try {
        
    const id = req.params.id

    const deleteBook = await Booking.findByIdAndDelete(id)

    res.status(200).send({message : "booking deleted"})

    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


export default {
    bookingController,
    bookSlot,
    getBooking,
    getSingleBooking,
    deleteBooking
}