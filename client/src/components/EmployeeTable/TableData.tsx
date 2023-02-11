import React from 'react'
import trash from './assets/Trash.svg'
import Pen from './assets/pen.svg'

const TableData:React.FC = () => {
  return (
    <tr className="flex justify-between w-full p-3 ">
        <td className="w-10 mr-3 text-center">1</td>
        <td className="inline-block text-left w-[20%] " >Nwosu Joseph</td>
        <td className="inline-block text-left w-[20%] ">01/01/1901</td>
        <td className="inline-block text-left w-[20%] ">1234567890</td>
        <td className="inline-block text-left w-[20%] ">London</td>
        <td className="inline-block text-left w-[20%] ">
        <span className="flex justify-start gap-10 w-full">
            <img src={Pen} alt="edit svg" className="bg-cyan-600 p-1 rounded-md transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-600/70" />
            <img src={trash} alt="trash svg" className="bg-cyan-600 p-1 rounded-md transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-600/70" />
        </span>
        </td>
    </tr>
  )
}

export default TableData