import React from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeData';
import EmployeeEntry from './components/EmployeeTable/EmployeeEntry';

function App() {
  return (
    <div className="mx-20">
      <EmployeeEntry />
      <EmployeeTable />
    </div>
  );
}

export default App;
