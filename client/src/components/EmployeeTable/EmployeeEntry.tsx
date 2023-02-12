import React, { useState } from 'react'
import { data } from '../../model'
import { dummyData } from '../../dummyData'


interface props{
    handleShowForm():void
    handleEmployeeData(employeeData:data, id?:number):void
    show:boolean
    employee:data
    setEmployee:React.Dispatch<React.SetStateAction<data>>,
  }

const EmployeeEntry:React.FC<props> = ({handleShowForm, show, employee, setEmployee, handleEmployeeData}) => {



const handleChange = (e:React.ChangeEvent):void=>{
  const {value, name} = e.target as HTMLInputElement
  setEmployee(prev=>{
    return {...prev, [name]:value}
  })
}

const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  e.preventDefault()
  handleEmployeeData(employee)
  setEmployee(dummyData)
}
const handleClear = ()=>{
  setEmployee(dummyData)
  handleShowForm()
}

  return (
    <form  className={`mt-20 flex pt-10  flex-col transition-all delay-75 duration-300 ease-in-out ${!show ? "-translate-y-96" : ""}`}>
        <div className="flex flex-wrap gap-5 py-4">
            <input  className="shadow-md rounded-md p-2 w-[20%] focus:outline-none focus:border-cyan-500 focus:border" type="text" value={employee.firstname} name="firstname" placeholder="Firstname" onChange={(e:React.ChangeEvent)=>handleChange(e)} required />
            <input  className="shadow-md rounded-md p-2 w-[20%]  focus:outline-none focus:border-cyan-500 focus:border" type="text" value={employee.lastname}  name="lastname"  placeholder="Lastname" onChange={(e:React.ChangeEvent)=>handleChange(e)} required />
            <input  className="shadow-md rounded-md p-2 w-[20%] focus:outline-none focus:border-cyan-500 focus:border" type="tel" value={employee.phone} name="phone" placeholder="phone" onChange={(e:React.ChangeEvent)=>handleChange(e)} required />
            <input  className="shadow-md rounded-md p-2 w-[20%]  focus:outline-none focus:border-cyan-500 focus:border" type="date" value={employee.birthday}  name="birthday" placeholder="Date of birth" onChange={(e:React.ChangeEvent)=>handleChange(e)} required />
            <input  className="shadow-md rounded-md p-2 w-[20%]  focus:outline-none focus:border-cyan-500 focus:border" type="text" value={employee.address} name="address"  placeholder="Address" onChange={(e:React.ChangeEvent)=>handleChange(e)} required />
            <input  className="shadow-md rounded-md p-2 w-[20%] focus:outline-none focus:border-cyan-500 focus:border" type="text"  value={employee.city} name="city" placeholder="City" onChange={(e:React.ChangeEvent)=>handleChange(e)} required />
            <input  className="shadow-md rounded-md p-2 w-[20%] focus:outline-none focus:border-cyan-500 focus:border" type="number" value={employee.zipCode} name="zipCode"  placeholder="Zip Code" onChange={(e:React.ChangeEvent)=>handleChange(e)}  />
        </div>
        <span className="w-36 flex justify-between">
            <button type="submit" onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleSubmit(e)} className="bg-cyan-600 rounded-md px-3 py-1 text-white font-medium transition-all delay-75 duration-300 ease-in-out hover:scale-110">Save</button>
            <button type="reset" onClick={()=>handleClear()} className="border-2 border-cyan-600 rounded-md px-3 py-1 text-cyan-600 font-medium transition-all delay-75 duration-300 ease-in-out hover:scale-110">Cancel</button>
        </span>
       
    </form>
  )
}

export default EmployeeEntry;