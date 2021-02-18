import React, { useEffect } from 'react';
import { useState } from 'react';


export const EmployeeContext=React.createContext<any>({});


export const EmployeeContextProvider:React.FC=({children})=>{
  
  const Employees:Array<Employee>=[{
  _id:"1",
  _name:"Admin",
  _email:"admin@admin.com",
  _password:"admin123",
  _role:"admin",
  _loggedIn:false,
},{
  _id:"2",
  _name:"Damir",
  _email:"damir@damir.com",
  _password:"damir123",
  _role:"employee",
  _loggedIn:false,
},{
  _id:"3",
  _name:"Emir",
  _email:"emir@emir.com",
  _password:"emir123",
  _role:"employee",
  _loggedIn:false,
}];

const [employees, setEmployees] = useState(Employees);
let emailList:Array<string>=[];


const setEmailList:SetEmailList=()=>{
emailList=[];
employees.map((item)=>{
  emailList.push(item._email);
})
 return emailList;
}



const addNewEmployee:AddNewEmployee=(employee:Employee)=>{
  Employees.push(employee);
  setEmployees(Employees)
  console.log(employees);
}
 return <EmployeeContext.Provider value={{setEmailList,employees,addNewEmployee}}>{children}</EmployeeContext.Provider>
}