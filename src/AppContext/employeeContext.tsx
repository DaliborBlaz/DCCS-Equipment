import React from "react";
import { useState } from "react";

interface IContextProps {
  setEmailList?: SetEmailList;
  employees?: Array<Employee>;
  addNewEmployee?: AddNewEmployee;
  addItemToEmployee?: AddItemToEmployee;
  getEmployeeById?: GetEmployeeById;
  retractItemFromEmployee?: RetractItemFromEmployee;
  currentUser?: Employee;
  setUser?: SetUser;
}
export const EmployeeContext = React.createContext<IContextProps>({});

export const EmployeeContextProvider: React.FC = ({ children }) => {
  const Employees: Array<Employee> = [
    {
      _id: "1",
      _name: "Amar",
      _email: "admin@admin.com",
      _password: "admin123",
      _role: "admin",
      _loggedIn: false,
      _equipment: [],
    },
    {
      _id: "2",
      _name: "Damir",
      _email: "damir@damir.com",
      _password: "damir123",
      _role: "employee",
      _loggedIn: false,
      _equipment: [],
    },
    {
      _id: "3",
      _name: "Emir",
      _email: "emir@emir.com",
      _password: "emir123",
      _role: "employee",
      _loggedIn: false,
      _equipment: [],
    },
  ];

  const [currentUser, setCurrentUser] = useState<Employee>();

  const [employees, setEmployees] = useState(Employees);
  let emailList: Array<string> = [];

  const setEmailList: SetEmailList = () => {
    emailList = [];
    employees.map((item) => {
      emailList.push(item._email);
    });
    return emailList;
  };

  const setUser: SetUser = (user) => {
    setCurrentUser(user);
  };

  const addNewEmployee: AddNewEmployee = (employee: Employee) => {
    Employees.push(employee);
    setEmployees(Employees);
  };
  const getEmployeeById: GetEmployeeById = (id: string) => {
    const pom = employees.find((item: Employee) => item._id == id);
    if (pom) {
      return pom._name;
    } else {
      return " ";
    }
  };

  const addItemToEmployee: AddItemToEmployee = (
    employeeId: string,
    item: EquipmentItem
  ) => {
    employees.map((employee: Employee) => {
      if (employee._id === employeeId) {
        employee._equipment.push(item);
      }
    });
  };
  const retractItemFromEmployee: RetractItemFromEmployee = (
    employeeId: string,
    item: EquipmentItem
  ) => {
    const pomEmp = employees.find((item: Employee) => item._id == employeeId);

    if (pomEmp) {
      const index = pomEmp._equipment.indexOf(item);
      console.log(index);
      pomEmp._equipment.splice(index, 1);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        setEmailList,
        employees,
        addNewEmployee,
        addItemToEmployee,
        getEmployeeById,
        retractItemFromEmployee,
        currentUser,
        setUser,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
