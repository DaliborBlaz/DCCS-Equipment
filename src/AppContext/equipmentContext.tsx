import React, { ReactNode } from "react";
import { useState } from "react";


export const EquipmentContext=React.createContext<any>({})

export const EquipmentProvider:React.FC=({children})=>{  
const EquipmentTypes=[
    "",
  "Laptop",
  "Docking station",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Headsets",
  "RAM",
  "HDD/SDD",
  "Other",
 ];

 const Manufacturers=[
    "",
 "Dell", 
 "Lenovo", 
 "HP", 
 "Asus", 
 "Kingston"
];
const Equipment:Array<EquipmentItem>=[
    {_id:'1',
    _type:'Laptop',
    _manufacturer:'Dell',
    _serialNumber:"11212",
    _assigned:false,
    _assignedTo:''

    },
     {_id:'2',
    _type:'HDD/SDD',
    _manufacturer:'Dell',
    _serialNumber:"11212",
    _assigned:false,
    _assignedTo:''

    },
     {_id:'3',
    _type:'Mouse',
    _manufacturer:'Dell',
    _serialNumber:"11212",
    _assigned:false,
    _assignedTo:''

    }, {_id:'5',
    _type:'Laptop',
    _manufacturer:'Dell',
    _serialNumber:"11212",
    _assigned:false,
    _assignedTo:''

    }, 
    {_id:'4',
    _type:'Laptop',
    _manufacturer:'asus',
    _serialNumber:"112dd12",
    _assigned:false,
    _assignedTo:''

    }
];
const [equipment, setEquipment]=useState(Equipment);

const addEquipmentItem:AddEquipmentItem=item=>{
  setEquipment([...equipment, item]);
}

const assignItem:AssignItem=(itemId:string, employeeId:string)=>{
    equipment.map((item:EquipmentItem)=>{
        if(item._id===itemId){
            item._assigned=true;
            item._assignedTo=employeeId;

        }
        
    })
}
const retractItem:RetractItem=(itemId:string)=>{
    equipment.map((item:EquipmentItem)=>{
        if(item._id===itemId){
            item._assigned=false;
            item._assignedTo='';
        }
        
    })
}

 return <EquipmentContext.Provider value={{equipment,EquipmentTypes,Manufacturers,addEquipmentItem,assignItem,retractItem}}>
       {children} 
    </EquipmentContext.Provider>
}