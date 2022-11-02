import { Dispatch, SetStateAction } from 'react';
import { Select } from '@mantine/core';
import { FuelEconomyApiValue } from '../shared/interfaces';

interface Props {
  label: string;
  placeholder: string;
  data: FuelEconomyApiValue[];
  value: string | null;
  updateStateFn: Dispatch<SetStateAction<string | null>>,
}

export default function DropdownSelect({ label, placeholder, data, value, updateStateFn}: Props) {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={(val: string) => updateStateFn(val)}
      searchable
    />
  );
}
