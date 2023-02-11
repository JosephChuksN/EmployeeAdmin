import { Document } from "mongoose";

export default interface Employee extends Document {
    firstname:String,
    lastname:String,
    phone:Number
    address:String
    city:String
    zipCode:Number
}