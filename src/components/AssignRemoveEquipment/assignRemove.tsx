import React, { useContext, useState } from "react";
import { EquipmentContext } from "../../AppContext/equipmentContext";
import { GetTheme } from "../../config/theme";
import { EquipmentList } from "../EquipmentList/equipmentList";
import { Dialog } from "../Modals/dialog";

export const AssignRemove: React.FC<any> = () => {
  const { EquipmentTypes, equipment, showAlert, alert } = useContext(
    EquipmentContext
  );
  const [type, setType] = useState<string>("");
  const [disable, setDisable] = useState(false);

  const moja = () => {
    setDisable(true);
  };
  const setSelectedType = (value: string) => {
    if (type !== value) {
      setType(value);
    }
  };

  return (
    <div className="ms-Grid wraper" dir="ltr" style={{ padding: "0px" }}>
      {alert && showAlert && (
        <Dialog type={alert.type} msg={alert.msg} remove={showAlert} />
      )}
      <div className="ms-Grid-row" style={{ textAlign: "center" }}>
        <div
          className="ms-Grid-col ms-xl6 ms-lg8 ms-md12 ms-sm12 ms-xlPush3 ms-lgPush2 container"
          style={{ boxShadow: GetTheme.effects.elevation64 }}
        >
          <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
            <div
              className="ms-Grid-col ms-lg12 ms-md12 ms-sm12"
              style={{ textAlign: "center" }}
            >
              <h1>Assign / Remove Equipment</h1>
            </div>

            <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
              <h4 style={{ margin: "0", textAlign: "left" }}>Serial Number</h4>
              <input
                className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                type="text"
                value={type}
                onFocus={moja}
                onChange={(e) => setSelectedType(e.target.value)}
              />
            </div>

            <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
              <h4 style={{ margin: "0", textAlign: "left" }}>Type</h4>
              <select
                disabled={type !== "" && disable}
                value={type}
                className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {(EquipmentTypes || []).map((item: string, index: any) => {
                  return (
                    <option defaultChecked key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div
              className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1"
              style={{ overflowX: "auto", marginBottom: "50px" }}
            >
              <table>
                <thead>
                  <tr style={{ fontSize: "1.2vh" }}>
                    <th>Manufacturer</th>
                    <th>S/N</th>
                    <th>Employee</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {(equipment || [])
                    .sort(
                      (a, b) => (a._assigned ? 1 : 0) - (b._assigned ? 1 : 0)
                    )
                    .map((item) => {
                      return (
                        <EquipmentList
                          key={item._id}
                          item={item}
                          value={type}
                          option={true}
                        />
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
