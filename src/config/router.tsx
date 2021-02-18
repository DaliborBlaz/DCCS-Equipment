import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { EmployeeContextProvider } from '../AppContext/employeeContext';
import { Admin } from '../components/Admin/admin';
import { Employee } from '../components/Employee/employee';
import Login from '../components/Login/login'
import RegisterEmployeeForm from '../components/Register/registerEmployee'


export const CustomRouter:React.FC<any>=()=>{

 
 // return <div>hello world</div>
  return<Router>
    <EmployeeContextProvider>
   <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/admin/:id" component={Admin}/>
      <Route exact path="/register" component={RegisterEmployeeForm}/>
      <Route exact path='/employee/:id' component={Employee}/>
   </Switch>
   </EmployeeContextProvider>
  </Router>

}