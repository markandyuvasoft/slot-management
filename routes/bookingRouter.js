import express from "express"
import bookSlotController from "../controller/bookSlotController.js"


const bookingRouter = express.Router()


bookingRouter.post("/bookSlot",bookSlotController.bookSlot)

bookingRouter.get("/listBookingSlot",bookSlotController.getBooking)

bookingRouter.get("/slotBook/:id",bookSlotController.getSingleBooking)

bookingRouter.delete("/deleteBook/:id",bookSlotController.deleteBooking)




export default bookingRouter