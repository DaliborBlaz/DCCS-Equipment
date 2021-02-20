import {PrimaryButton} from '@fluentui/react';
import React, { useState } from 'react'
import {GetTheme} from '../../config/theme';
import CustomTextField from "./CustomTextField";
import {Formik,Form,} from 'formik';
import { EmployeeContext } from './../../AppContext/employeeContext';
import { useContext } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



const RegisterEmployeeForm:React.FC<any>=()=>{
const {setEmailList}=useContext(EmployeeContext);
const {addNewEmployee}=useContext(EmployeeContext);
const {employees}=useContext(EmployeeContext);

const [emails, setEmails]=useState<string[]>(setEmailList());
console.log("prije", emails);
console.log("prije", employees);

const handleSubmit=(values:any)=>{
  
}

 

const validate= Yup.object({
  name:Yup.string().required('Required').min(3,"At least 3 characters"),
  email:Yup.string().email("Email is invalid").required("Required").notOneOf(emails,'Email already taken'),
  password:Yup.string().min(6,"At least 6 characters").required("Required"),
  confirmPassword:Yup.string().required("Required").oneOf([Yup.ref("password"),null], "Password must match")
 })

 const initialValues = { 
 name: '' ,
 email:'',
 password:'',
 confirmPassword:''
};

 return (
   <div className="ms-Grid wraper" dir="ltr" style={{padding:"0px"}}>
      <div className="ms-Grid-row">
       <div className="ms-Grid-col ms-xl6 ms-lg8 ms-md10 ms-sm10 ms-xlPush3 ms-lgPush2 ms-smPush1 ms-mdPush1 container" style={{ boxShadow: GetTheme.effects.elevation64 }}>
        <div className="ms-Grid-col ms-xl8 ms-lg12 ms-md12 ms-sm12 ms-xlPush2 div-form">
         <Formik initialValues={initialValues} onSubmit={(values,{resetForm})=>{
          const newUser:Employee={
          _id: new Date().getDate().toString(),
          _name:values.name,
          _email:values.email,
          _password:values.password,
          _role:"employee",
          _loggedIn:false,
          _equipment:[]
          }
          addNewEmployee(newUser);
          emails.push(newUser._email);
          console.log("poslije", emails);
          console.log("poslije", employees);


          resetForm();
         }} validationSchema={validate}>
          {
           formik=>(
             <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
              <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12" style={{textAlign:"center"}}>
                <h1 >
                  Create Account
                </h1>
               </div>
            
             <Form action="submit"> 
              <CustomTextField  label="Name" name="name" type="text"/>
              <CustomTextField  label="Email" name="email"  type="email"/>
              <CustomTextField  label="Password" name="password"  type="password"/>
              <CustomTextField  label="Confirm Password" name="confirmPassword"  type="password"/>
               
            
              <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg8 ms-md12 ms-sm12 ms-lgPush2 signup-button" style={{textAlign:"center"}}>
                <PrimaryButton
                  type="submit"
                  className="prim-btn ms-fontSize-20"
                  text="Sign Up"
                />
              </div>
            </div>

            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 ms-sm12">
                <p className="ms-fontSize-18 ms-fontWeight-semibold" style={{textAlign:"center" , margin:'30px 0px'}}>
                  Already have an account?{" "}<Link to="/">Log In</Link>
                  
                </p>
              </div>
            </div>
            
             </Form>
          </div>
           )
          }
         </Formik>
        </div>
       </div>
       </div>
     </div>
 
 )
}

export default RegisterEmployeeForm;