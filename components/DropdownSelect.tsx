import { Select } from '@mantine/core';
import { FuelEconomyApiValue } from '../shared/interfaces';

interface Props {
  disabled?: boolean;
  label: string;
  placeholder: string;
  data: FuelEconomyApiValue[];
  value: string | null;
  onChangeFn: Function;
}

export default function DropdownSelect({ disabled, label, placeholder, data, value, onChangeFn}: Props) {
  return (
    <Select
      disabled={disabled}
      label={label}
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={(val: string) => onChangeFn(val)}
      searchable
      radius='md'
    />
  );
}
