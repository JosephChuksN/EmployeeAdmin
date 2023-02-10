import React from 'react'
import TableHead from './TableHead'
import TableData from './TableData'

const EmployeeTable:React.FC = () => {
  return (
    <table className=" mt-20 flex items-center flex-col border border-cyan-600 rounded-md">
      <thead className="w-full ">
        <TableHead />
      </thead>
      <tbody  className="w-full ">
        <TableData />
      </tbody>
    </table>
  )
}

export default EmployeeTable