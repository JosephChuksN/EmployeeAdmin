import React from 'react'

const TableHead:React.FC = () => {
  return (
   <tr className="flex justify-between w-full p-3 border-b border-gray-900">
    <th className="w-10 mr-3">No.</th>
    <th className="inline-block text-left w-[20%] ">Employee Name</th>
    <th className="inline-block text-left w-[20%] ">Birthday</th>
    <th className="inline-block text-left w-[20%] ">Phone</th>
    <th className="inline-block text-left w-[20%] ">City</th>
    <th className="inline-block text-left w-[20%] ">Action</th>
    
   </tr>
  )
}

export default TableHead