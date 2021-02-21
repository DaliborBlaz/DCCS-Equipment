import React from "react";
import { Items } from "./item";

interface EmployeeItemsProps {
  id: string;
  item: Employee;
}
export const EmployeeItems: React.FC<EmployeeItemsProps> = ({ item, id }) => {
  if (id !== undefined && id === item._id) {
    return <Items item={item._equipment} />;
  } else {
    return null;
  }
};
