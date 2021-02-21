import React from "react";

interface ItemsProps {
  item: EquipmentItem[];
}

export const Items: React.FC<ItemsProps> = ({ item }) => {
  if (Items.length > 0) {
    return (
      <div>
        {item.map((single: EquipmentItem) => {
          return (
            <div
              key={single._id}
              className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12"
              style={{ borderBottom: "1px solid black", marginBottom: "30px" }}
            >
              <h3>{single._type}</h3>
              <h5>
                {single._manufacturer}
                {" / "}
                {single._serialNumber}
              </h5>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
