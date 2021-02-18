import {PrimaryButton, values} from '@fluentui/react';
import React, { ReactElement, useState } from 'react'
import {GetTheme} from '../../config/theme';
import CustomTextField from "../Register/CustomTextField";
import {Formik,Form,} from 'formik';
import { EmployeeContext } from './../../AppContext/employeeContext';
import { useContext } from 'react';
import * as Yup from 'yup';
import logo from '../../resources/dccs.png';
import  "./Login.css";
import {Link, Redirect, useHistory} from 'react-router-dom';


const Login:React.FC<any>=()=>{

  const history=useHistory()
  console.log(history);
 
const {employees}=useContext(EmployeeContext);
console.log("login",employees);
const [error, setError]=useState(false);
const [errorMesage, setErrorMessage]=useState("No Employee with input Credentials") 
const validate= Yup.object({
  email:Yup.string().email("Email is invalid").required("Required"),
  password:Yup.string().min(6,"At least 6 characters").required("Required"),
 })

 const handleSubmit=(values:any)=>{
  
      console.log(values)
      console.log(employees)
           const employee = employees.find( (employee:Employee) => employee._email === values.email && employee._password === values.password);
           if(employee){
             console.log(employee)
             localStorage.setItem("user", JSON.stringify({ ...employee }));
              setError(false);
              const id=employee._id.toString();
              console.log(id);
              history.push(`/${employee._role}/${employee._id}`);
           }else{ setError(true);}



 }

 const initialValues = {  
 email:'',
 password:'',
};


 return (
   <div className="ms-Grid container" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row">
       <div id="wraper" className="ms-Grid-col ms-lg8 ms-lgPush2" style={{ boxShadow: GetTheme.effects.elevation64 }}>
        <div className="ms-Grid-col ms-lg5 div-form" >
                
         <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validate}>
          {
           formik=>(
             <div className="ms-Grid-col ms-lg8 ms-lgPush2 form">
              <div className="ms-Grid-col ms-lg12" style={{textAlign:"center"}}>
                
                  <h1>Log in</h1>
          {error && <h5 style={{color:"red"}}>{errorMesage}</h5>}
                  
               </div>
            
             <Form action="submit" id="form"  > 
              
              <CustomTextField  label="Email" name="email"  type="email"/>
              <CustomTextField  label="Password" name="password"  type="password"/>
   
                <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-xl8 ms-lgPush2" style={{textAlign:"center", margin:"20px 0px"}}>
                
                <PrimaryButton
                 type="submit"
                  className="prim-btn ms-fontSize-18"
                  text="Log In"
                  
                />
                
              </div>
            </div>

            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-xl12">
                <p className="ms-fontSize-18 ms-fontWeight-semibold" style={{textAlign:"center"}}>
                  Don't have an account?{" "}<Link to='/register'>Sign Up</Link>
                  
                </p>
              </div>
            </div>
            
             </Form>
          </div>
           )
          }
         </Formik>
        </div>
         <div className="ms-Grid-col ms-lg7 div-img">
         <div className="ms-Grid-col ms-lg6 ms-lgPush3"><img src={logo} alt=""/></div>
        </div>
       </div>
       </div>
     </div>
 
 )
}

export default Login;