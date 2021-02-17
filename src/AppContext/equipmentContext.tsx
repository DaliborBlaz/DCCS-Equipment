import React, { ReactNode } from "react";
import { useState } from "react";


export const EquipmentContext=React.createContext<any>({})

export const EquipmentProvider:React.FC=({children})=>{  
 return <EquipmentContext.Provider value={{}}>
       {children} 
    </EquipmentContext.Provider>
}