import { type } from 'os';
import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { GetTheme } from '../../config/theme';
import { Employee } from '../Employee/employee';
import { EmployeeItems } from './EmployeeItems';

export const FilterByEmployee: React.FC<any> = () => {
  const { employees } = useContext(EmployeeContext);
  const [id, setId] = useState<string>('');


  return <div className="ms-Grid wraper" dir="ltr" style={{ padding: "0px" }}>
    <div className="ms-Grid-row" style={{ textAlign: "center" }}>
      <div className="ms-Grid-col ms-xl6 ms-lg8 ms-md12 ms-sm12 ms-xlPush3 ms-lgPush2 container" style={{ boxShadow: GetTheme.effects.elevation64 }}>
        <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12" >
          <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12" style={{ textAlign: "center" }} >
            <h1>Filter by Employee</h1>
          </div>



          <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item" >

            <h4 style={{ margin: '0', textAlign: "left" }}>Employee</h4>
            <select className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" onChange={(event) => { setId(event.target.value) }} >
              {
                employees.map((item: Employee, index: any) => {
                  console.log("id", id);
                  return <option key={index} value={item._id}>{item._name}</option>
                })
              }

            </select>


            <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" style={{ textAlign: "left" }}>
              {
                Object.keys(employees).map((key) => {
                  const item = employees[key];
                  return <EmployeeItems item={item} id={id} />
                })
              }
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>


}