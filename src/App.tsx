import React from 'react';
import Login from './components/Login/login'
import { initializeIcons } from "@uifabric/icons";
import RegisterEmployeeForm from './components/Register/registerEmployee';
import { EmployeeContextProvider } from './AppContext/employeeContext';
import { CustomRouter } from './config/router';

function App() {
  initializeIcons();

  return (
     <CustomRouter>
   
        {/* <RegisterEmployeeForm/>
        <Login/> */}
    </CustomRouter>
    
  );
}

export default App;
