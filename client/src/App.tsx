import React, {useState, useEffect} from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeData';
import EmployeeEntry from './components/EmployeeTable/EmployeeEntry';
import{data, employeeData } from "./model"
import { dummyData } from './dummyData';
import axios from 'axios';

function App() {
  const [show, setShow] = useState<boolean>(false)
  const [employees, setEmployees] = useState<data[]| []>([])
  const [employee, setEmployee] = useState<data>(dummyData)
  const [id, setId] = useState<string>("")

  const getEmployees = async ():Promise<void>=>{

    const {data} = await axios.get("http://localhost:5000/api/v1/employees/")
    const {employees} = data
    setEmployees(employees)
    
  }

  const addEmployee = async (employeeData:employeeData):Promise<void>=>{
    await axios.post("http://localhost:5000/api/v1/employees/", employeeData)
     getEmployees()
  }

  const editEmployee = async (employeeData:employeeData):Promise<void>=>{
    await axios.patch(`http://localhost:5000/api/v1/employees/${id}`, employeeData )
    await  getEmployees()
  }



const deleteEmployee = async (id:string):Promise<void>=>{
  axios.delete(`http://localhost:5000/api/v1/employees/${id}`)
  await getEmployees()

}

const handleEmployeeData = async (employeeData:employeeData):Promise<void>=>{
    if(id){
     await editEmployee(employeeData)
    }else{
      await addEmployee(employeeData)
    }
}

const handleShowForm = ():void=>(
    setShow(!show)
)

useEffect(()=>{
 getEmployees()
}, [])



  return (
    <div className="mx-20">
      <EmployeeEntry 
      employee={employee}
      setEmployee={setEmployee}
      handleShowForm={handleShowForm} 
      handleEmployeeData={handleEmployeeData}
      show={show} 
     
      />

      <EmployeeTable  
      setEmployee={setEmployee}
      handleShowForm={handleShowForm} 
      show={show}
      employees={employees}
      handleEmployeeData={handleEmployeeData}
      deleteEmployee={deleteEmployee}
      setId={setId}
      setShow={setShow}
      />
    </div>
  );
}

export default App;
