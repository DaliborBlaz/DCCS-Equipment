import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { Items } from '../FilterEquipmentByEmployee/item';


export const Employee:React.FC<any>=(props)=>{

const [user, setUser]=useState<Employee>();
useEffect(() => {
setUser(JSON.parse(localStorage.getItem("user")!));
 
}, [])

 if(user){
 return <div className="ms-Grid container" dir="ltr">
      <div className="ms-Grid-row">
       <div className="ms-Grid-col ms-lg8 ms-lgPush2">
        <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
         <h1>{user._name}</h1>
         <h2>{user._email}</h2>
        </div>
        
        </div>
        </div>
         <div className="ms-Grid-row">
         <div className="ms-Grid-col ms-lg8 ms-lgPush2">
          <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
           <Items item={user._equipment}/>
          </div>
         </div>
         </div>
        </div>
 }else{
 return null;
 }
}

