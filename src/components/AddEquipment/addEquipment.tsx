import { PrimaryButton } from '@fluentui/react';
import React, { useContext, useState } from 'react';
import { EquipmentContext } from '../../AppContext/equipmentContext';
import { GetTheme } from '../../config/theme';


export const AddEquipmentItem:React.FC<any>=()=>{
 const {EquipmentTypes}=useContext(EquipmentContext);
 const {Manufacturers}=useContext(EquipmentContext);
 const {equipment}=useContext(EquipmentContext);
 const {addEquipmentItem}=useContext(EquipmentContext);
  console.log(equipment);

 
const [error, setError]=useState(false);
const [errorMessage,setErrorMessage]=useState('');

 const [type, setType]=useState<string>('');
 const [manufact, setManufacturer]=useState<string>('');
 const [serialNumber, setSerialNumber]=useState<string>('')
 

 const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     const eqItem:EquipmentItem={
       _id:new Date().getTime().toString(),
       _type:type,
       _manufacturer:manufact,
       _serialNumber:serialNumber,
       _assigned:false,
       _assignedTo:''
       
     }

     if(type==="" || manufact==="" || serialNumber===""){
      setError(true);
      setErrorMessage("Invalid entry")
      console.log("prvi if", error)
     }
      Object.keys(equipment).map((key:any)=>{
      const lokItem=equipment[key];
      if((lokItem._serialNumber===eqItem._serialNumber) && (lokItem._type===eqItem._type) && (lokItem._manufacturer===eqItem._manufacturer)){
        setError(true);
        setErrorMessage("Item allready exists")
       }else{
          addEquipmentItem(eqItem)
       }
        
     })
     
        
    
     
     setType('');
     setManufacturer('');
     setSerialNumber('');
     // if(error===true){
     //  console.log('dodjela',error);
     //  e.stopPropagation()
     // }else{
     //  setError(false);
     
     // }
    }
    
     
 

return <div className="ms-Grid addEquipment-wraper" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row" style={{ textAlign:"center" }}>
       <div className="ms-Grid-col ms-lg10 ms-lgPush1" style={{ boxShadow: GetTheme.effects.elevation64 }}>
         <div className="ms-Grid-col ms-lg6 ms-lgPush3" >
         <h1>NEW EQUIPMENT</h1>
         {error?<h1>{errorMessage}</h1>:null};
         </div>
         <div className="ms-Grid-col ms-lg10 ms-lgPush1">
         <form className="ms-Grid-col ms-lg10 ms-lgPush1" onSubmit={(e)=>handleSubmit(e)}>
           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
           <h1>Type</h1>
             <select className="ms-Grid-col ms-lg10 ms-lgPush1" onChange={(event)=>{setType(event.target.value)}}>
             {
               EquipmentTypes.map((item:string ,index:any)=>{
                 return <option key={index} value={item}>{item}</option>
               })
             }
            </select>
           </div>

           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
           <h1>Manufacturer</h1>
            <select onChange={(e)=>{setManufacturer(e.target.value)}}>
       {
         Manufacturers.map((item: any,index: string | number | null | undefined)=>{
           return <option key={index} value={item}>{item}</option>
         })
       }
     </select>
           </div>


           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
           <h1>Serial Number</h1>
            <input type="text" id="serialNumber" value={serialNumber} onChange={(e)=>{setSerialNumber(e.target.value)}}/>
           </div>

           <div className="ms-Grid-col ms-lg10 ms-lgPush1 ">
           <PrimaryButton type='submit'>Add Item</PrimaryButton>
           </div>
          

         </form>
         </div>
        </div>
        </div>
        </div>
}