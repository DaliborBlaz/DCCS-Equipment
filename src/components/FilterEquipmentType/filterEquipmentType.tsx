import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "../../AppContext/equipmentContext";
import { GetTheme } from "../../config/theme";
import { EquipmentList } from "../EquipmentList/equipmentList";

export const FilterByType: React.FC<any> = () => {
  const { EquipmentTypes, equipment } = useContext(EquipmentContext);

  const [type, setType] = useState<string>("");

  const getTotalNumberbyType = () => {
    const filteredArray = equipment?.filter((item) => item._type === type);

    return filteredArray || [];
  };
  const getTotalNumberByAssigned = () => {
    const totalNumberByAssigned = getTotalNumberbyType().filter(
      (item) => item._assigned === true
    );
    return totalNumberByAssigned || [];
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
              style={{
                textAlign: "center",
              }}
            >
              <h1>Filter by Type</h1>
            </div>
            <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
              <h4 style={{ margin: "0", textAlign: "left" }}>Type</h4>
              <select
                defaultValue={type}
                className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                {(EquipmentTypes || []).map((item: string, index: any) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
              <h4 style={{ margin: "0", textAlign: "left" }}>
                Total: {getTotalNumberbyType().length}
              </h4>
              <h4 style={{ margin: "0", textAlign: "left", color: "red" }}>
                Assigned: {getTotalNumberByAssigned().length}
              </h4>
              <h4 style={{ margin: "0", textAlign: "left", color: "green" }}>
                Available:{" "}
                {getTotalNumberbyType().length -
                  getTotalNumberByAssigned().length}
              </h4>
            </div>
            <div
              className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1"
              style={{ overflowX: "auto", marginBottom: "50px" }}
            >
              <table>
                <thead>
                  <tr>
                    <th>Manufacturer</th>
                    <th>S/N</th>
                    <th>Employee</th>
                  </tr>
                </thead>
                <tbody>
                  {(equipment || []).map((item) => {
                    return (
                      <EquipmentList key={item._id} item={item} value={type} option={false} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
