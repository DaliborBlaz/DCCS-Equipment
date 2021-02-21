import React, { useContext } from "react";
import { FilterByEmployee } from "../FilterEquipmentByEmployee/filterByEmployee";
import { EmployeeContext } from "../../AppContext/employeeContext";

export const Employee: React.FC<any> = (props) => {
  const { currentUser } = useContext(EmployeeContext);

  if (currentUser) {
    return <FilterByEmployee disable={true} user={currentUser} />;
  } else {
    return null;
  }
};
