import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { EquipmentContext } from '../../AppContext/equipmentContext';
import { GetTheme } from '../../config/theme';
import { EquipmentList } from '../EquipmentList/equipmentList';

export const AssignRemove:React.FC<any>=()=>{
 const {EquipmentTypes}=useContext(EquipmentContext);
 const {equipment}=useContext(EquipmentContext);
const {employees}=useContext(EmployeeContext);
 const [type, setType]=useState<string>('');
 

 useEffect(() => {
 
  
 }, [type])
console.log(employees);
 return <div className="ms-Grid" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row" style={{ textAlign:"center" }}>
       <div className="ms-Grid-col ms-lg10 ms-lgPush1" style={{ boxShadow: GetTheme.effects.elevation64 }}>
         <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
           <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
         <h1>Assign / Remove Equipment</h1>
         </div>
         <div className="ms-Grid-col ms-lg10 ms-lgPush1">

          <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
           <h1>Serial Number</h1>
            <input type="text" id="serialNumber" value={type} onChange={(e)=>{setType(e.target.value)}}/>
           </div>
        
           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
           <h1>Type</h1>
             <select defaultValue={type} className="ms-Grid-col ms-lg10 ms-lgPush1" onChange={(event)=>{setType(event.target.value)}}>
             {
               EquipmentTypes.map((item:string ,index:any)=>{
                 return <option key={index} value={item}>{item}</option>
               })
             }
            </select>
           </div>
           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
            <table>
                <tr>
                  <th>Manufacturer</th>
                 <th>S/N</th>
                 <th>Employee</th>
                 <th>Action</th>
                 </tr>
                  {
                      Object.keys(equipment).map((key)=>{
                        const item=equipment[key];
                        return <EquipmentList key={item._id} item={item} value={type} option={true}/>
                      })
                    }
                    
             </table>
           </div>
          </div>
          </div>
          </div>
          </div>
          </div>

         
          
}