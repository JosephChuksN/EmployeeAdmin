import React, {useState} from 'react'
import EmployeeDetailsModal from './EmployeeDetailsModal'
import { data } from '../../model'
import trash from './assets/Trash.svg'
import Pen from './assets/pen.svg'


interface props{
  data:data
  show:boolean
  setShow:React.Dispatch<React.SetStateAction<boolean>>
  setEmployee:React.Dispatch<React.SetStateAction<data>>,
  setId:React.Dispatch<React.SetStateAction<string>>,
  handleEmployeeData(employeeData:data, id?:number):void
  deleteEmployee(id:string):void
}


const TableData:React.FC<props> = ({data, handleEmployeeData, deleteEmployee, setEmployee, setId,  setShow, show}) => {

  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false)

  const handleEmployeeEdit = ()=>{
      setId(data._id)
      setEmployee({...data})
     setShow(true)
  }

  const handleModal = ():void=>{
    setShowDetailsModal(!showDetailsModal)
  }

  return (
   <>
    <tr className="flex justify-between w-full p-3 border-b border-gray-900 cursor-pointer" key={data._id} onClick={()=>handleModal()}>
        <td className="w-10 mr-3 text-center">1</td>
        <td className="inline-block text-left w-[20%] capitalize" >{`${data.firstname} ${data.lastname}`}</td>
        <td className="inline-block text-left w-[20%] ">{data.birthday}</td>
        <td className="inline-block text-left w-[20%] ">{data.phone}</td>
        <td className="inline-block text-left w-[20%] capitalize">{data.city}</td>
        <td className="inline-block text-left w-[20%] ">
        <span className="flex justify-start gap-10 w-full" onClick={(e)=> e.stopPropagation()}>
            <img onClick={()=>handleEmployeeEdit()} src={Pen} alt="edit svg" className="bg-cyan-600 p-1 rounded-md transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-600/70" />
            <img onClick={()=>deleteEmployee(data._id)} src={trash} alt="trash svg" className="bg-cyan-600 p-1 rounded-md transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-600/70" />
        </span>
        </td>
    </tr>
    {showDetailsModal &&
    <div className="w-full h-[100%] flex justify-center">
     <EmployeeDetailsModal 
     showDetailsModal={showDetailsModal}
     data={data}
     handleModal={handleModal}
     show={show}
   
    />
    </div>
    
    
    }
   </>
  )
}

export default TableData