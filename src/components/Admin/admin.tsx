import { Icon, PrimaryButton } from '@fluentui/react';
import React from 'react';
import {useHistory} from 'react-router-dom';
import { GetTheme } from '../../config/theme';
import img from '../../resources/admin.png'

export const Admin:React.FC<any>=(props)=>{
 const history=useHistory();

 const Add = () => <Icon iconName="Add" />;
 const Assign = () => <Icon iconName="AddFriend" />;
 const Filter = () => <Icon iconName="Filter" />;

 
 
 return <div className="ms-Grid wrapper" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row">
       <div className="ms-Grid-col ms-lg6 ms-lgPush3 admin-container" style={{ boxShadow: GetTheme.effects.elevation64 }}>
        <div className="ms-Grid-col ms-lg5 admin-img" ><img src={img}></img>
         
         
        </div>
         <div className="ms-Grid-col ms-lg7 admin-action-container">
         <div className="ms-Grid-col ms-lg12 admin-content" style={{textAlign:"center"}}> 
             <h1>DCCS Equipment</h1>     
             <div className="ms-Grid-col ms-lg8 ms-lgPush2 admin-button-container">
              <button className="customButton" onClick={()=>{ history.push('/add')}}><Add/>Add new item</button>
             </div>
             <div className="ms-Grid-col ms-lg8 ms-lgPush2 admin-button-container">
              <button className="customButton" onClick={()=>{ history.push('/assign-remove')}}><Assign/>Add / Remove Item</button>
             </div>
             <div className="ms-Grid-col ms-lg8 ms-lgPush2 admin-button-container">
             <button className="customButton"   onClick={()=>{ history.push('/filter-type')}}><Filter/>Items by Type</button>
             </div>
             <div className="ms-Grid-col ms-lg8 ms-lgPush2 admin-button-container">
              <button className="customButton"><Filter/>Items by Employee</button>
             </div>
         </div>
        </div>
       </div>
       </div>
     </div>
}