import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { EmployeeContextProvider } from '../AppContext/employeeContext';
import { EquipmentProvider } from '../AppContext/equipmentContext';
import { AddEquipmentItem } from '../components/AddEquipment/addEquipment';
import { Admin } from '../components/Admin/admin';
import { AssignRemove } from '../components/AssignRemoveEquipment/assignRemove';
import { Employee } from '../components/Employee/employee';
import { FilterByEmployee } from '../components/FilterEquipmentByEmployee/filterByEmployee';
import { FilterByType } from '../components/FilterEquipmentType/filterEquipmentType';
import { Header } from '../components/Header/header';
import Login from '../components/Login/login'
import { ModalAdd } from '../components/Modals/modalAdd';
import RegisterEmployeeForm from '../components/Register/registerEmployee'


export const CustomRouter:React.FC<any>=()=>{

 
 // return <div>hello world</div>
  return<Router>
    <EmployeeContextProvider>
    <EquipmentProvider>
    <Header/>
   <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/admin/:id" component={Admin}/>
      <Route exact path="/register" component={RegisterEmployeeForm}/>
      <Route exact path='/employee/:id' component={Employee}/>
      <Route exact path='/add' component={AddEquipmentItem}/>
      <Route exact path='/filter-type' component={FilterByType}/>
      <Route exact path='/assign-remove' component={AssignRemove}/>
      <Route exact path='/modal-add' component={ModalAdd}/>
      <Route exact path='/filter-employee' component={FilterByEmployee}/>


   </Switch>
   </EquipmentProvider>
   </EmployeeContextProvider>
  </Router>

}