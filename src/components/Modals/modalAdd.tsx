import { Modal } from '@fluentui/react';
import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { EquipmentContext } from '../../AppContext/equipmentContext';
import { Employee } from '../Employee/employee';
import './Modal.component.css';

interface ModalProps{
 type:string;
 manufacturer:string;
 sn:string;
 id:string;
 isOpen:boolean;
 onClose:()=>void;
 employees:Employee[];
 item:EquipmentItem;
}

export const ModalAdd:React.FC<ModalProps>=({type,manufacturer,sn,id, isOpen, onClose,children, employees, item})=>{
 const {assignItem}=useContext(EquipmentContext);
 const {addItemToEmployee}=useContext(EmployeeContext);
 const [pickedEm, setPickedEm]=useState<string>();

 const handleClick=()=>{
  if(pickedEm){
   onClose();
   assignItem(id,pickedEm);
   addItemToEmployee(pickedEm,item);
  }
 }
 if(isOpen){
  
  return  <div className={'modal'}>
     <div className={"modal__overlay"} />
     <div className="modal__box">
      <div className="modal__title">
      <h1>Assign item</h1>
      </div>
      <div className="modal__content">
      <h4>{type}{", "}{manufacturer}{", "}{sn}</h4> 
      <div className="modal__content">
       {
        <select onChange={(e)=>setPickedEm(e.target.value)}>
    {
     employees.map((item:Employee)=>{
      return <option key={item._id} value={item._id}>{item._name}</option>
     })
    }
   </select>
       }
      </div>
       <button onClick={handleClick}>Assign</button>
      </div>
     </div>
     </div>
 }else{
  return <div></div>
 }
}


 
 
