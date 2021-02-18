import React, { useContext } from 'react';
import {useField, ErrorMessage} from 'formik';
import { Label, TextField } from '@fluentui/react';

const CustomTextFiled:React.FC<any>=({label,...props})=>{
 const [field,meta]=useField(props);
 return(
  <div className="ms-Grid-row">
   <div className="ms-Grid-col ms-lg10 ms-lgPush1 div-input">
       <TextField {...field} {...props} errorMessage={meta.error} label={label}></TextField>
       
   </div>
  </div>
 )
}

export default CustomTextFiled;