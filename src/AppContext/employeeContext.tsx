import React, { useEffect } from 'react';
import { useState } from 'react';


export const EmployeeContext=React.createContext<any>({});


export const EmployeeContextProvider:React.FC=({children})=>{
 const eqItem:EquipmentItem={
       _id:"null",
       _serialNumber:"",
       _manufacturer:"",
       _type:"",
       _assigned:false
     }

  const Employes:Array<Employee>=[{
  _id:1,
  _name:"Admin",
  _email:"Admin@admin.com",
  _password:"admin",
  _role:"admin",
  _loggedIn:false,
},{
 
  _id:2,
  _name:"Damir",
  _email:"damir@damir.com",
  _password:"damir",
  _role:"employee",
  _loggedIn:false,
}];

 return <EmployeeContext.Provider value={{}}>{children}</EmployeeContext.Provider>
}