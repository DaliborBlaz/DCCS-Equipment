import { Modal } from '@fluentui/react';
import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { EquipmentContext } from '../../AppContext/equipmentContext';
import { Employee } from '../Employee/employee';
import './Modal.component.css';

interface ModalProps{
 id:string;
 isOpen:boolean;
 onClose:()=>void;
 item:EquipmentItem;
}

export const ModalRemove:React.FC<ModalProps>=({id, isOpen, onClose, item})=>{
 const {getEmployeeById}=useContext(EmployeeContext);
 const {retractItemFromEmployee}=useContext(EmployeeContext);
 const {retractItem} =useContext(EquipmentContext)


 
 const [pickedEm, setPickedEm]=useState<string>();


 const handleClick=()=>{
  onClose();
  retractItemFromEmployee(id, item);
  retractItem(item._id);

 }
 if(isOpen){
  
  return  <div className={'modal'}>
     <div className={"modal__overlay"} />
     <div className="modal__box">
      <div className="modal__title">
      <h1>Retract item</h1>
      </div>
      <div className="modal__content">
      <h4>{item._type}{", "}{item._manufacturer}{", "}{item._serialNumber}</h4> 
      <div className="modal__content">
       {getEmployeeById(id)}
      </div>
       <button onClick={handleClick}>Retract</button>
      </div>
     </div>
     </div>
 }else{
  return <div></div>
 }
}


 
 
