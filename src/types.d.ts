type Employee = {
  _id: string,
  _name: string,
  _email: string,
  _password: string,
  _role: string,
  _loggedIn: boolean,
  _equipment: EquipmentItem[]
}

type EquipmentItem = {
  _id: string;
  _type: string;
  _manufacturer: string;
  _serialNumber: string;
  _assigned: boolean;
  _assignedTo: string
}


type Alert = {
  msg: string;
  show: boolean;
  type: string;
}

type AddNewEmployee = (employee: Employee) => void;

type SetEmailList = () => string[]
type AddEquipmentItem = (item: EquipmentItem) => void;

type GetSumTypes = (type: string) => number;

type AssignItem = (itemId: string, employeeId: string) => void;

type AddItemToEmployee = (employeeID: string, item: EquipmentItem) => void;

type GetEmployeeById = (id: string) => string;

type RetractItemFromEmployee = (employeeId: string, item: EquipmentItem) => void;
type RetractItem = (itemId: string) => void;

type SetUser = (user: Employee | undefined) => void;
