import React, { useEffect } from 'react';
import { useState } from 'react';
import { EquipmentItem } from '../components/EquipmentList/EquipmentItem';


export const EmployeeContext=React.createContext<any>({});


export const EmployeeContextProvider:React.FC=({children})=>{
  
  const Employees:Array<Employee>=[{
  _id:"1",
  _name:"Admin",
  _email:"admin@admin.com",
  _password:"admin123",
  _role:"admin",
  _loggedIn:false,
  _equipment:[]
},{
  _id:"2",
  _name:"Damir",
  _email:"damir@damir.com",
  _password:"damir123",
  _role:"employee",
  _loggedIn:false,
  _equipment:[]

},{
  _id:"3",
  _name:"Emir",
  _email:"emir@emir.com",
  _password:"emir123",
  _role:"employee",
  _loggedIn:false,
  _equipment:[]

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
const getEmployeeById:GetEmployeeById=(id:string)=>{
 const pom= employees.find((item:Employee)=>item._id==id)
 if(pom){
   return pom._name;
 }
 else{
   return " "
 }
}
const addItemToEmployee:AddItemToEmployee=(employeeId:string, item:EquipmentItem)=>{
  employees.map((employee:Employee)=>{
    if(employee._id===employeeId){
      employee._equipment.push(item);
    }
  })
}
const retractItemFromEmployee:RetractItemFromEmployee=(employeeId:string, item:EquipmentItem)=>{
  console.log(item);
  const pomEmp = employees.find((item:Employee)=>item._id==employeeId)
  let myindex=-1;
  console.log(pomEmp);
  if(pomEmp){
    const index=pomEmp._equipment.indexOf(item);
    console.log(index);
     pomEmp._equipment.splice(index,1);
    
    }
    console.log(employees);
}


 return <EmployeeContext.Provider value={{setEmailList,employees,addNewEmployee,addItemToEmployee,getEmployeeById, retractItemFromEmployee}}>{children}</EmployeeContext.Provider>
}