import React from "react";
import { useState } from "react";

interface EquipmentProps {
  equipment?: EquipmentItem[];
  EquipmentTypes?: string[];
  Manufacturers?: string[];
  addEquipmentItem?: AddEquipmentItem;
  assignItem?: AssignItem;
  retractItem?: RetractItem;
  alert?: Alert;
  setAlert?: (alert: Alert) => void;
  showAlert?: (alert?: Alert) => void;
}

export const EquipmentContext = React.createContext<EquipmentProps>({});

export const EquipmentProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const showAlert = (alert?: Alert): void => {
    const { show = false, type = "", msg = "" } = alert || {};
    setAlert({ show, type, msg });
  };
  const EquipmentTypes = [
    "",
    "Laptop",
    "Docking station",
    "Monitor",
    "Keyboard",
    "Mouse",
    "Headsets",
    "RAM",
    "HDD/SDD",
    "Other",
  ];

  const Manufacturers = ["", "Dell", "Lenovo", "HP", "Asus", "Kingston"];
  const Equipment: Array<EquipmentItem> = [
    {
      _id: "1",
      _type: "Laptop",
      _manufacturer: "Dell",
      _serialNumber: "11212",
      _assigned: false,
      _assignedTo: "",
    },
    {
      _id: "2",
      _type: "HDD/SDD",
      _manufacturer: "Dell",
      _serialNumber: "1222212",
      _assigned: false,
      _assignedTo: "",
    },
    {
      _id: "3",
      _type: "Mouse",
      _manufacturer: "Dell",
      _serialNumber: "13212",
      _assigned: false,
      _assignedTo: "",
    },
    {
      _id: "5",
      _type: "Laptop",
      _manufacturer: "Dell",
      _serialNumber: "15212",
      _assigned: false,
      _assignedTo: "",
    },
    {
      _id: "4",
      _type: "Laptop",
      _manufacturer: "asus",
      _serialNumber: "14121",
      _assigned: false,
      _assignedTo: "",
    },
  ];
  const [equipment, setEquipment] = useState(Equipment);

  const addEquipmentItem: AddEquipmentItem = (item) => {
    setEquipment([...equipment, item]);
  };

  const assignItem: AssignItem = (itemId: string, employeeId: string) => {
    equipment.map((item: EquipmentItem) => {
      if (item._id === itemId) {
        item._assigned = true;
        item._assignedTo = employeeId;
      }
    });
  };
  const retractItem: RetractItem = (itemId: string) => {
    equipment.map((item: EquipmentItem) => {
      if (item._id === itemId) {
        item._assigned = false;
        item._assignedTo = "";
      }
    });
  };

  return (
    <EquipmentContext.Provider
      value={{
        equipment,
        EquipmentTypes,
        Manufacturers,
        addEquipmentItem,
        assignItem,
        retractItem,
        alert,
        setAlert,
        showAlert,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};
