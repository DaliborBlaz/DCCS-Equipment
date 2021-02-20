import React, { useContext, useEffect, useState } from 'react';
import { Items } from '../FilterEquipmentByEmployee/item';
import userLogo from '../../resources/user.png'
import { GetTheme } from '../../config/theme';


export const Employee:React.FC<any>=(props)=>{

const [user, setUser]=useState<Employee>();
useEffect(() => {
setUser(JSON.parse(localStorage.getItem("user")!));
 
}, [])

 if(user){
 return <div className="ms-Grid wraper" dir="ltr">
      <div className="ms-Grid-row">
        
       <div className="ms-Grid-col ms-xl6 ms-lg8 ms-md10 ms-sm10 ms-xlPush3 ms-lgPush2 ms-smPush1 ms-mdPush1 container" style={{ boxShadow: GetTheme.effects.elevation64,padding:"0px" }}>
        <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12" style={{textAlign:"center", backgroundColor:"#B1B1B1"}}>
          <h1>Welcome Back</h1>
          <img src={userLogo} alt="" style={{height:"80px"}}/>
         <h4>{user._name}{" - "}{user._email}</h4>
        </div>
        
         <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md10 ms-sm10 ms-xlPush1 ms-lgPush1, ms-mdPush1 ms-smPush1">
          <h3>Assigned Equipment: </h3>
          <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" >
           <Items item={user._equipment}/>
          </div>
         </div>
         </div>
        </div>
         </div>
        
 }else{
 return null;
 }
}

