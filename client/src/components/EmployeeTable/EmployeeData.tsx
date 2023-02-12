import React from 'react'
import TableHead from './TableHead'
import TableData from './TableData'
import { data } from '../../model'

interface props{
  handleShowForm():void
  show:boolean
  setShow:React.Dispatch<React.SetStateAction<boolean>>
  employees:data[]
  setEmployee:React.Dispatch<React.SetStateAction<data>>,
  setId:React.Dispatch<React.SetStateAction<string>>,
  handleEmployeeData(employeeData:data, id?:number):void
  deleteEmployee(id:string):void
}

const EmployeeTable:React.FC<props> = ({handleShowForm, show, employees, handleEmployeeData, deleteEmployee, setEmployee, setId, setShow}) => {
  return (
    <table className={` mt-20 flex items-center flex-col border border-cyan-600 rounded-md  ${!show? "-translate-y-36" : ""}`}>
      <thead className="w-full ">
        <TableHead />
      </thead>
      <tbody  className="w-full ">
        {employees.map(details=>(
          <TableData 
          
          data={details}
          handleEmployeeData={handleEmployeeData}
          deleteEmployee={deleteEmployee}
          setEmployee={setEmployee}
          setId={setId}
          setShow={setShow}
          
          />
        ))}
        
      </tbody>
      <button onClick={()=>{handleShowForm()}} className={`${show? "hidden": "block"} absolute  -top-10 right-0 bg-cyan-600 text-white rounded-md px-3 py-1 transition-all delay-75 duration-300 ease-in-out hover:scale-110`}>Add Employee</button>
    </table>
  )
}

export default EmployeeTable