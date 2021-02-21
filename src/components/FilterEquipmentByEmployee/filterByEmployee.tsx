import { type } from "os";
import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../../AppContext/employeeContext";
import { GetTheme } from "../../config/theme";
import { Employee } from "../Employee/employee";
import { EmployeeItems } from "./EmployeeItems";
import { Items } from "./item";

interface FilterByEmployee {
  disable?: boolean;
  user?: Employee;
}

export const FilterByEmployee: React.FC<FilterByEmployee> = ({
  disable = false,
  user,
}) => {
  const { employees, getEmployeeById } = useContext(EmployeeContext);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    
    if (user && user._id !== id) {
      setId(user._id);
    } else if (id !== "") {
      setId("");
    }
  }, [user]);

  const defaultOption: Employee = {
    _id: "",
    _name: "Select employee",
    _email: "",
    _password: "",
    _role: "",
    _loggedIn: false,
    _equipment: [],
  };

  return (
    <div className="ms-Grid wraper" dir="ltr" style={{ padding: "0px" }}>
      <div className="ms-Grid-row" style={{ textAlign: "center" }}>
        <div
          className="ms-Grid-col ms-xl6 ms-lg8 ms-md12 ms-sm12 ms-xlPush3 ms-lgPush2 container"
          style={{ boxShadow: GetTheme.effects.elevation64 }}
        >
          <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
            <div
              className="ms-Grid-col ms-lg12 ms-md12 ms-sm12"
              style={{ textAlign: "center" }}
            >
              <h1>Filter by Employee</h1>
            </div>

            <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
              <h4 style={{ margin: "0", textAlign: "left" }}>Employee</h4>
              {
                <select
                  disabled={disable}
                  value={id}
                  className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                >
                  {[defaultOption, ...(employees || [])]?.map(
                    (item: Employee, index: any) => {
                      return (
                        <option key={index} value={item._id}>
                          {item._name}
                        </option>
                      );
                    }
                  )}
                </select>
              }

              {disable && user ? (
                <Items item={user._equipment} />
              ) : (
                <div
                  className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                  style={{ textAlign: "left" }}
                >
                  {employees &&
                    Object.keys(employees).map((key) => {
                      const item = (employees as any)[key];
                      return (
                        <EmployeeItems key={item._id} item={item} id={id} />
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
