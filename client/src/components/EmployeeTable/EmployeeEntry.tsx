import React, { useState } from 'react'


interface props{
    handleShowForm():void
    show:boolean
  }

const EmployeeEntry:React.FC<props> = ({handleShowForm, show}) => {



  return (
    <form  className={`mt-20 flex pt-10  flex-col transition-all delay-75 duration-300 ease-in-out ${!show ? "-translate-y-64" : ""}`}>
        <div className="flex justify-between py-4">
            <input  className="shadow-md rounded-md p-2 focus:outline-none focus:border-cyan-500 focus:border" type="text" name="firstname" placeholder="Firstname" required />
            <input  className="shadow-md rounded-md p-2  focus:outline-none focus:border-cyan-500 focus:border" type="text"  name="lastname"  placeholder="Lastname" required />
            <input  className="shadow-md rounded-md p-2  focus:outline-none focus:border-cyan-500 focus:border" type="date"  name="birthday" placeholder="Date of birth" required />
            <input  className="shadow-md rounded-md p-2  focus:outline-none focus:border-cyan-500 focus:border" type="text"  name="Address"  placeholder="Address" required />
            <input  className="shadow-md rounded-md p-2  focus:outline-none focus:border-cyan-500 focus:border" type="text"  name="city" placeholder="City" required />
            <input  className="shadow-md rounded-md p-2  focus:outline-none focus:border-cyan-500 focus:border" type="text"  name="zip"  placeholder="Zip code"  />
        </div>
        <div className="w-36 flex justify-between">
            <button className="bg-cyan-600 rounded-md px-3 py-1 text-white font-medium transition-all delay-75 duration-300 ease-in-out hover:scale-110">Save</button>
            <button onClick={()=>handleShowForm()} className="border-2 border-cyan-600 rounded-md px-3 py-1 text-cyan-600 font-medium transition-all delay-75 duration-300 ease-in-out hover:scale-110">Cancel</button>
        </div>
       
    </form>
  )
}

export default EmployeeEntry;