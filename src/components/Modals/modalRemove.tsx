import React, { useContext } from "react";
import { EmployeeContext } from "../../AppContext/employeeContext";
import { EquipmentContext } from "../../AppContext/equipmentContext";
import { Dialog } from "./dialog";

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  item: EquipmentItem;
}

export const ModalRemove: React.FC<ModalProps> = ({
  id,
  isOpen,
  onClose,
  item,
}) => {
  const { getEmployeeById, retractItemFromEmployee } = useContext(
    EmployeeContext
  );
  const { retractItem, showAlert, alert } = useContext(EquipmentContext);

  const handleClick = () => {
    if (retractItemFromEmployee) retractItemFromEmployee(id, item);
    if (retractItem && showAlert) {
      retractItem(item._id);
      showAlert({
        show: true,
        type: "success",
        msg: "Item successfully removed",
      });
    }
  };
  if (isOpen) {
    return (
      <div className={"modal ms-Grid"}>
        <div className={"modal__overlay ms-Grid-row"} />
        <div className="modal__box ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12">
          <div className="modal__title ms-Grid-col ms-lg12 ms-md12 ms-sm12">
            <h4>Retract item</h4>
          </div>
          <div
            className="modal__content ms-Grid-col ms-xl6 ms-lg6 ms-md8 ms-sm12 ms-xlPush3 ms-lgPush3 ms-mdPush2"
            style={{ textAlign: "left" }}
          >
            <h4>
              {item._type}
              {", "}
              {item._manufacturer}
              {", "}
              {item._serialNumber}
            </h4>
            <div className="modal__content">
              <h6 style={{ marginBottom: "0px" }}>Employee:</h6>
              <h4 style={{ marginTop: "0px" }}>
                {" "}
                {getEmployeeById && getEmployeeById(id)}
              </h4>
            </div>
            <div
              className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
              style={{ textAlign: "center", padding: "0" }}
            >
              <button className="button-close" onClick={onClose}>
                Close
              </button>
              <button className="button-remove" onClick={handleClick}>
                Retract
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return showAlert && alert ? (
      <Dialog type={alert.type} msg={alert.msg} remove={showAlert} />
    ) : null;
  }
};
