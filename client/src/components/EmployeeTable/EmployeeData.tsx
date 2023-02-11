import React from 'react'
import TableHead from './TableHead'
import TableData from './TableData'

interface props{
  handleShowForm():void
  show:boolean
}

const EmployeeTable:React.FC<props> = ({handleShowForm, show}) => {
  return (
    <table className=" mt-20 flex items-center flex-col border border-cyan-600 rounded-md ">
      <thead className="w-full ">
        <TableHead />
      </thead>
      <tbody  className="w-full ">
        <TableData />
      </tbody>
      <button onClick={()=>{handleShowForm()}} className={`${show? "hidden": "block"} absolute top-64 right-20 bg-cyan-600 text-white rounded-md px-3 py-1 transition-all delay-75 duration-300 ease-in-out hover:scale-110`}>Add Employee</button>
    </table>
  )
}

export default EmployeeTable