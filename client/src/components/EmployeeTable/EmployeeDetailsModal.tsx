import React from 'react'
import { data } from '../../model'

interface props{
    data:data
    show:boolean
    showDetailsModal:boolean
    handleModal():void
  }

const EmployeeDetailsModal:React.FC<props> = ({data, handleModal, show}) => {
  return (
    <div onClick={()=>handleModal()} className={`backdrop-blur-[2px]  transition-all ease-in-out duration-500 justify-center ${!show? "-translate-y-20" : "translate-y-20"} items-center w-full  h-[80vh] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}>
       <div onClick={(e)=> e.stopPropagation()} className="flex flex-col w-3/5 bg-gray-50 gap-5 p-5 shadow-lg rounded-md relative">
        <h1 className="font-semibold text-2xl text-cyan-600">Employee Details</h1>
        <div className="flex gap-3 items-center">
          <span className="font-medium text-lg">Name:</span>
          <span className="capitalize">{`${data.firstname} ${data.lastname}`}</span>
        </div>
        <div className="flex gap-3 items-center ">
          <span  className="font-medium text-lg">Date of Birth:</span>
          <span>{data.birthday}</span>
        </div>
        <div className="flex gap-3 items-center">
          <span  className="font-medium text-lg">Phone No.:</span>
          <span>{data.phone}</span>
        </div>
        <div className="flex gap-3 items-center">
          <span  className="font-medium text-lg">Address:</span>
          <span  className="capitalize">{data.address}</span>
        </div>
        <div className="flex gap-3 items-center">
          <span  className="font-medium text-lg">City:</span>
          <span  className="capitalize">{data.city}</span>
        </div>
        <div  className="flex gap-3 items-center">
          <span  className="font-medium text-lg">Zipcode:</span>
          <span>{data.zipCode}</span>
        </div>
        <button onClick={()=>handleModal()} className="absolute right-3 bottom-3 px-3 py-1 border-2 border-cyan-600 rounded-md font-medium cursor-pointer text-cyan-600  transition-all ease-in-out duration-500 delay-75 hover:scale-110 hover:bg-cyan-600 hover:text-white">Close</button>
       </div>
       
    </div>
   
  )
}

export default EmployeeDetailsModal