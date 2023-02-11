import { Response, Request } from "express";
import Employees from "./EmployeesModel"
import { StatusCodes } from "http-status-codes";

const createEmployee = async (req:Request, res:Response):Promise<void> =>{
    
    const {firstname, lastname, phone, address, city, zipode} = req.body
    
      const employee = await Employees.create({firstname, lastname, phone, address, city, zipode})
      
      res.status(StatusCodes.CREATED).json({employee:{
        firstname:employee.firstname, 
        lastname:employee.lastname, 
        phone:employee.phone,
        address:employee.address,
        city:employee.city,
        zipCode:employee.zipCode
    }})
   }
   
   const updateEmployee = async (req:Request, res:Response):Promise<void>  =>{
    const {
     body:{firstname, lastname, phone, address, city, zipcode},
     params: {id: employeeId}
    } = req
 
    if(firstname === "" ||lastname==="" || phone==="" || address==="" || city===""){
    res.status(StatusCodes.BAD_REQUEST).json({msg: 'fill all required field'})
    }
    const employee = await Employees.findByIdAndUpdate({_id:employeeId}, req.body, {new:true, runValidators:true} )
    res.status(StatusCodes.OK).json({employee})
 }

 const deleteEmployee =  async (req:Request, res:Response):Promise<void>  =>{
    const {
        params: {id: employeeId}
       } = req

       const employee = await Employees.findByIdAndRemove({_id: employeeId})
       res.status(StatusCodes.OK).json({employee})
}

const getAllEmployees =  async (req:Request, res:Response):Promise<void> =>{
    const employees = await Employees.find({}).sort("createdAt")
    res.status(StatusCodes.OK).json({employees})
}

export {createEmployee, updateEmployee, deleteEmployee, getAllEmployees}