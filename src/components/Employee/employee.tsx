import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { EmployeeContext } from '../../AppContext/employeeContext';


export const Employee:React.FC<any>=(props)=>{

const {employees}=useContext(EmployeeContext);

const id= props.match.params.id;
const [currentEmployee,setCurrentEmoloyee]=useState<Employee>();

useEffect(() => {
  const newEmp=employees.find((item:Employee)=>item._id===id)
  if(newEmp){
   setCurrentEmoloyee(newEmp);
  }
 }, [])

 return <div className="ms-Grid container" dir="ltr">
      <div className="ms-Grid-row">
       <div className="ms-Grid-col ms-lg8 ms-lgPush2">
        <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
         <h1>{currentEmployee?._name}</h1>
         <h2>{currentEmployee?._email}</h2>
        </div>
        
        </div>
        </div>
         <div className="ms-Grid-row">
         <div className="ms-Grid-col ms-lg8 ms-lgPush2">
          <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
           items
          </div>
         </div>
         </div>
        </div>
}

