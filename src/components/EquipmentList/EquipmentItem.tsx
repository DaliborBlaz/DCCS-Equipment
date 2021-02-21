import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../../AppContext/employeeContext";
import { ModalAdd } from "../Modals/modalAdd";
import { ModalRemove } from "../Modals/modalRemove";

interface EquipmentItemProps {
  item: EquipmentItem;
  option: boolean;
}
export const EquipmentItem: React.FC<EquipmentItemProps> = ({
  item,
  option,
}) => {
  const { employees, getEmployeeById } = useContext(EmployeeContext);

  const [isAddModalOpen, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!isAddModalOpen);
  const [isRemModalOpen, setRemModal] = useState(false);
  const toggleRemModal = () => setRemModal(!isRemModalOpen);

  return (
    <>
      <ModalAdd
        item={item}
        employees={employees || []}
        type={item._type}
        manufacturer={item._manufacturer}
        sn={item._serialNumber}
        id={item._id}
        isOpen={isAddModalOpen}
        onClose={toggleAddModal}
      />
      <ModalRemove
        id={item._assignedTo}
        isOpen={isRemModalOpen}
        onClose={toggleRemModal}
        item={item}
      />

      <tr>
        <td>{item._manufacturer}</td>
        <td>{item._serialNumber}</td>
        <td>
          {item._assignedTo ? (
            <p>{getEmployeeById && getEmployeeById(item._assignedTo)}</p>
          ) : (
            <p>/</p>
          )}
        </td>
        {option ? (
          <td>
            {item._assigned ? (
              <button className="assign-remove" onClick={toggleRemModal}>
                Retract
              </button>
            ) : (
              <button onClick={toggleAddModal}>Assign</button>
            )}
          </td>
        ) : null}
      </tr>
    </>
  );
};
