import { ModalAdd } from './../components/Modals/modalAdd';
import { AssignRemove } from './../components/AssignRemoveEquipment/assignRemove';
import { FilterByType } from './../components/FilterEquipmentType/filterEquipmentType';
import { AddEquipmentItem } from '../components/AddEquipment/addEquipment';
import { Employee } from '../components/Employee/employee';
import { Admin } from "../components/Admin/admin";
import Login from "../components/Login/login";
import RegisterEmployeeForm from "../components/Register/registerEmployee";
import { FilterByEmployee } from '../components/FilterEquipmentByEmployee/filterByEmployee';

export default {
 unAuthorized: {
  signUp: {
   path: "/register",
   component: RegisterEmployeeForm,
  },
  logIn: {
   path: "/login",
   component: Login,
  },
  default: {
   path: "/",
   component: Login,
  },
 },
 authorized: {
  admin: {
   path: "/admin",
   component: Admin,
   visibleFor: ["admin"],
  },
  employee: {
   path: "/employee",
   component: Employee,
   visibleFor: ["employee"],
  },
  addEquipmentItem: {
   path: "/add",
   component: AddEquipmentItem,
   visibleFor: ["admin"]
  },
  filterType: {
   path: "/filter-type",
   component: FilterByType,
   visibleFor: ["admin", "employee"]
  },
  assignRemove: {
   path: "/assign-remove",
   component: AssignRemove,
   visibleFor: ["admin"]
  },
  modalAdd: {
   path: "/modal-add",
   component: ModalAdd,
   visibleFor: ["admin"]
  },
  filterByEmployee: {
   path: "/filter-employee",
   component: FilterByEmployee,
   visibleFor: ["admin", "employee"]
  }
 },
};



