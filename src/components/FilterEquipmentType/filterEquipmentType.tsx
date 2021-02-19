import React, { useContext, useEffect, useState } from 'react';
import { EquipmentContext } from '../../AppContext/equipmentContext';
import { GetTheme } from '../../config/theme';
import { EquipmentList } from '../EquipmentList/equipmentList';

export const FilterByType:React.FC<any>=()=>{
 const {EquipmentTypes}=useContext(EquipmentContext);
 const {equipment}=useContext(EquipmentContext);


 const [type, setType]=useState<string>('');
 const [localEquipment, setLocalEquipment]=useState<EquipmentItem[]>();

 useEffect(() => {
  setLocalEquipment(equipment);
  console.log(localEquipment); 
 }, [type])

 


 return <div className="ms-Grid" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row" style={{ textAlign:"center" }}>
       <div className="ms-Grid-col ms-lg10 ms-lgPush1" style={{ boxShadow: GetTheme.effects.elevation64 }}>
         <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
           <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
         <h1>Filter</h1>
         </div>
         <div className="ms-Grid-col ms-lg10 ms-lgPush1">

         
        
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
                 </tr>
               {
                      
                      Object.keys(equipment).map((key)=>{
                        const item=equipment[key];
                        return <EquipmentList item={item} value={type} option={false}/>
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