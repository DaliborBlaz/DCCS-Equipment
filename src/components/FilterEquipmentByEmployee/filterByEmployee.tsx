import { type } from 'os';
import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { GetTheme } from '../../config/theme';
import { Employee } from '../Employee/employee';
import { EmployeeItems } from './EmployeeItems';

export const FilterByEmployee:React.FC<any>=()=>{
 const {employees} =useContext(EmployeeContext);
 const [id, setId]=useState<string>('');


 return <div className="ms-Grid" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row" style={{ textAlign:"center" }}>
       <div className="ms-Grid-col ms-lg10 ms-lgPush1" style={{ boxShadow: GetTheme.effects.elevation64 }}>
         <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
           <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
         <h1>Filter</h1>
         </div>
         <div className="ms-Grid-col ms-lg10 ms-lgPush1">

        
           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
            <div>
           <h1>Type</h1>
             <select  className="ms-Grid-col ms-lg10 ms-lgPush1" onChange={(event)=>{setId(event.target.value)}}>
             {
               employees.map((item:Employee ,index:any)=>{
                console.log("id",id);
                 return <option key={index} value={item._id}>{item._name}</option>
               })
             }
            </select>
            </div>
            <div>
             {
               Object.keys(employees).map((key)=>{
                        const item=employees[key];
                        return <EmployeeItems item={item} id={id}/>
                      })
              }
           </div>
           </div>
           
           </div>
           </div>

           </div>
           </div>
           </div>


}