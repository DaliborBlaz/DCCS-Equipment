import React, { useContext, useState } from "react";
import { EquipmentContext } from "../../AppContext/equipmentContext";
import { GetTheme } from "../../config/theme";
import { Dialog } from "../Modals/dialog";

export const AddEquipmentItem: React.FC<any> = () => {
  const {
    EquipmentTypes,
    Manufacturers,
    equipment,
    addEquipmentItem,
    showAlert,
    alert,
  } = useContext(EquipmentContext);
  const [type, setType] = useState<string>("");
  const [manufact, setManufacturer] = useState<string>("");
  const [serialNumber, setSerialNumber] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eqItem: EquipmentItem = {
      _id: new Date().getTime().toString(),
      _type: type,
      _manufacturer: manufact,
      _serialNumber: serialNumber,
      _assigned: false,
      _assignedTo: "",
    };

    if (type === "" || manufact === "" || serialNumber === "") {
      if (showAlert)
        showAlert({
          show: true,
          type: "danger",
          msg: "Unable to add - fill out required",
        });
      return;
    }
    const foundIndex = (equipment || []).findIndex(
      (lokItem: EquipmentItem) =>
        lokItem._serialNumber === eqItem._serialNumber &&
        lokItem._type === eqItem._type &&
        lokItem._manufacturer === eqItem._manufacturer
    );

    if (foundIndex > -1 && showAlert) {
      showAlert({
        show: true,
        type: "danger",
        msg: "Unable to add - item already exists",
      });
    } else {
      if (showAlert)
        showAlert({ show: true, type: "success", msg: "New item created" });
      if (addEquipmentItem) addEquipmentItem(eqItem);
    }
    setType("");
    setManufacturer("");
    setSerialNumber("");
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
          <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12 add-equipment-container">
            <h2>NEW EQUIPMENT</h2>
            <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
              <form
                className="ms-Grid-col ms-lg12 ms-md12 ms-sm12"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
                  <h4>Tip</h4>
                  <select
                    value={type}
                    className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                  >
                    {EquipmentTypes &&
                      EquipmentTypes.map((item: string, index: any) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
                  <h4>Manufacturer</h4>
                  <select
                    value={manufact}
                    className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                    onChange={(e) => {
                      setManufacturer(e.target.value);
                    }}
                  >
                    {(Manufacturers || []).map(
                      (
                        item: any,
                        index: string | number | null | undefined
                      ) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>

                <div className="ms-Grid-col ms-xl10 ms-lg10 ms-md12 ms-sm12 ms-xlPush1 ms-lgPush1 add-equipment-container-item">
                  <h4>Serial Number</h4>
                  <input
                    className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
                    type="text"
                    id="serialNumber"
                    value={serialNumber}
                    onChange={(e) => {
                      setSerialNumber(e.target.value);
                    }}
                  />
                </div>

                <div
                  className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12 add-equipment-container-button"
                  style={{ textAlign: "center" }}
                >
                  <button
                    style={{ boxShadow: GetTheme.effects.elevation64 }}
                    type="submit"
                  >
                    Add Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
