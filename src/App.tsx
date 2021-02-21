import React from "react";
import { initializeIcons } from "@uifabric/icons";
import {
  EmployeeContext,
  EmployeeContextProvider,
} from "./AppContext/employeeContext";
import ReactRouterSetup from "./config/router";
import { EquipmentProvider } from "./AppContext/equipmentContext";

function App() {
  initializeIcons();

  return (
    <EmployeeContextProvider>
      <EquipmentProvider>
        <ReactRouterSetup></ReactRouterSetup>
      </EquipmentProvider>
    </EmployeeContextProvider>
  );
}

export default App;
