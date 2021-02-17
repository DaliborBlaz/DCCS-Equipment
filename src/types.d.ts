type Employee={
  _id:number,
  _name:string,
  _email:string,
  _password:string,
  _role:string,
  _loggedIn:boolean,
}
 
type EquipmentItem={
  _id:string;
  _type:string;
  _manufacturer:string;
  _serialNumber:string;
  _assigned:boolean;
}
type AssignedEquipment={
  _employee:string;
  _equipment:Array<EquipmentItem>
}

const EquipmentTypes=[
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
 "Dell", 
 "Lenovo", 
 "HP", 
 "Asus", 
 "Kingston"
];
