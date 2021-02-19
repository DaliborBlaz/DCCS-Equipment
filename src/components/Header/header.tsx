import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../../resources/dccs.png'

export const Header:React.FC<any>=()=>{
 const [user, setUser]=useState<Employee|null>();
 
 const history=useHistory()


 const handleClick=()=>{
  history.push("/");
  localStorage.clear();
  setUser(null)
 }
 const imgClick=()=>{
  setUser(JSON.parse(localStorage.getItem("user")!));
  if(user){
  history.push(`/${user._role}/${user._id}`);
  }
 }
 
 return <div className="header-logo ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
       <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" >
        <div className="ms-Grid-col ms-xl6 ms-lg6 ms-md12 ms-sm12 ">
          <img src={logo} alt="" style={{height:"50px"}} onClick={imgClick}/>
        </div>
        <div className="ms-Grid-col ms-xl6 ms-lg6 ms-md12 ms-sm12 "><button onClick={handleClick}> sign Out</button></div>
        </div>
      </div>
    </div>
}