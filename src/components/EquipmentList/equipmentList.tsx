import React, { useContext, useEffect, useState } from 'react';
import { EquipmentContext } from '../../AppContext/equipmentContext';
import { EquipmentItem } from './EquipmentItem';

interface EquipmentListProps {
  item: EquipmentItem;
  value: string;
  option: boolean;
}

export const EquipmentList: React.FC<EquipmentListProps> = ({ item, value, option }) => {

  if (item !== undefined && (item._type === value || item._serialNumber === value)) {
    return <EquipmentItem item={item} option={option} />
  }
  else {
    return null
  }
}