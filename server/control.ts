import { Response, Request } from "express";
import Employees from "./EmployeesModel"
import { StatusCodes } from "http-status-codes";

const createEmployee = async (res:Response, req:Request):Promise<void> =>{
    
    const {firstname, lastname, phone, address, city, zipcode} = req.body
    
      const employee = await Employees.create(req.body)
      res.status(StatusCodes.CREATED).json({employee})
   }
   
   const updateEmployee = async (res:Response, req:Request):Promise<void>  =>{
    const {
     body:{firstname, lastname, phone, address, city, zipcode},
     params: {id: employeeId}
    } = req
 
    if(firstname === "" ||lastname==="" || phone==="" || address==="" || city===""){
    res.status(StatusCodes.BAD_REQUEST).json({msg: 'link or sitename fields cannot be blank'})
    }
    const employee = await Employees.findByIdAndUpdate({_id:employeeId}, req.body, {new:true, runValidators:true} )
    res.status(StatusCodes.OK).json({employee})
 }

 const deleteEmployee =  async (res:Response, req:Request):Promise<void>  =>{
    const {
        params: {id: employeeId}
       } = req

       const employee = await Employees.findByIdAndRemove({_id: employeeId})
       res.status(StatusCodes.OK).json({employee})
}

const getAllEmployees =  async (res:Response, req:Request):Promise<void> =>{
    const employees = await Employees.find({}).sort("createdAt")
    res.status(StatusCodes.OK).json({employees})
}

export {createEmployee, updateEmployee, deleteEmployee, getAllEmployees}