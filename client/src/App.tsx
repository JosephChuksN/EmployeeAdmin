import React, {useState} from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeData';
import EmployeeEntry from './components/EmployeeTable/EmployeeEntry';

function App() {
  const [show, setShow] = useState<boolean>(false)

const handleShowForm = ():void=>(
    setShow(!show)
)

  return (
    <div className="mx-20">
      <EmployeeEntry handleShowForm={handleShowForm} show={show} />
      <EmployeeTable  handleShowForm={handleShowForm} show={show}/>
    </div>
  );
}

export default App;
