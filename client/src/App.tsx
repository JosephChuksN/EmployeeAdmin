import React, {useState, useEffect} from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeData';
import EmployeeEntry from './components/EmployeeTable/EmployeeEntry';
import{ Data } from "./model"
import { dummyData } from './dummyData';
import axios from 'axios';

function App() {
  const [show, setShow] = useState<boolean>(false)
  const [employees, setEmployees] = useState<Data[]| []>([])
  const [employee, setEmployee] = useState<Data>(dummyData)

  const getEmployees = async ():Promise<void>=>{

    const {data} = await axios.get("http://localhost:5000/api/v1/employees/")
    const {employees} = data
    setEmployees(employees)
    
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
      handleShowForm={handleShowForm} 
      show={show} 
      />

      <EmployeeTable  
      handleShowForm={handleShowForm} 
      show={show}
      employees={employees}
      />
    </div>
  );
}

export default App;
