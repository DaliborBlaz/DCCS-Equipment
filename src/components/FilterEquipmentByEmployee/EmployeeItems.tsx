import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { Items } from './item';

interface EmployeeItemsProps{
 id:string
 item:Employee;

}
export const EmployeeItems:React.FC<EmployeeItemsProps>=({item, id})=>{
 if(id!==undefined && id===item._id){
  console.log(item);
   return <Items item={item._equipment}/>

 }else{
  return null
 }

 
}