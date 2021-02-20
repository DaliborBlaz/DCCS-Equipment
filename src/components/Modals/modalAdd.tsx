import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../AppContext/employeeContext';
import { EquipmentContext } from '../../AppContext/equipmentContext';

interface ModalProps {
    type: string;
    manufacturer: string;
    sn: string;
    id: string;
    isOpen: boolean;
    onClose: () => void;
    employees: Employee[];
    item: EquipmentItem;
}

export const ModalAdd: React.FC<ModalProps> = ({ type, manufacturer, sn, id, isOpen, onClose, children, employees, item }) => {
    const { assignItem } = useContext(EquipmentContext);
    const { addItemToEmployee } = useContext(EmployeeContext);
    const [pickedEm, setPickedEm] = useState<string>();

    const handleClick = () => {
        if (pickedEm) {
            onClose();
            assignItem(id, pickedEm);
            addItemToEmployee(pickedEm, item);
        }
    }
    if (isOpen) {

        return <div className={'modal ms-Grid'}>
            <div className={"modal__overlay ms-Grid-row"} />
            <div className="modal__box ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12">
                <div className="modal__title ms-Grid-col ms-lg12 ms-md12 ms-sm12">
                    <h4>Assign item</h4>
                </div>
                <div className="modal__content">
                    <h4>{type}{", "}{manufacturer}{", "}{sn}</h4>
                    <div className="modal__content ms-Grid-col ms-xl6 ms-lg6 ms-md8 ms-sm12 ms-xlPush3 ms-lgPush3 ms-mdPush2">
                        {
                            <select style={{ height: "30px", margin: "40px 0" }} className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" onChange={(e) => setPickedEm(e.target.value)}>
                                {
                                    employees.map((item: Employee) => {
                                        return <option key={item._id} value={item._id}>{item._name}</option>
                                    })
                                }
                            </select>
                        }
                        <button className="modal-button" onClick={handleClick}>Assign</button>
                    </div>




                </div>
            </div>
        </div>
    } else {
        return <div></div>
    }
}




