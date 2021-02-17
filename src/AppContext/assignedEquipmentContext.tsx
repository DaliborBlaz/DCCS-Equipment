import React, { ReactNode } from "react";

export const AssignedEquipmentContext=React.createContext<any>({});

export const AssignedEquipmentProvider: React.FC=({children})=>{
 return <AssignedEquipmentContext.Provider value={{}}>{children}</AssignedEquipmentContext.Provider>
}