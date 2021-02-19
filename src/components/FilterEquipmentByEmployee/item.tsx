import React from 'react';

interface ItemsProps{
 item:EquipmentItem[];
}

export const Items:React.FC<ItemsProps>=({item})=>{
 if(Items.length>0){
  console.log(item);
  return <div>
   {
    item.map((single:EquipmentItem)=>{
     return <p key={single._id}>{single._type}{" / "}{single._manufacturer}{" / "}{single._serialNumber}</p>
    })
   }
 </div>

 }else{
  return null
 }
 
}