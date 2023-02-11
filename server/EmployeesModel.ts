import mongoose, { model, Schema } from "mongoose";
import Employee from "./EmployeeInterface"


const userSchema:Schema = new mongoose.Schema<Employee>({

    firstname:{
        type: String,
        unique: true,
        required:  [true, 'Please enter a  firstname']
    },
    lastname:{
        type: String,
        unique: true,
        required:  [true, 'Please enter  lastname']
    },
    phone:{
        type: Number,
        required:  [true, 'Please enter a phone no.']
    },
    address:{
        type: String,
        required:[true, 'Please enter an address']
    },
    city:{
        type: String,
        required:  [true, 'Please enter  lastname']
    },
  zipCode:{
        type: Number
    },
})


export default mongoose.model<Employee>("Employees", userSchema)