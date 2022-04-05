import React, { FC } from 'react';

import { SelectComponent } from './SelectComponent';

//import ArrowDown from './ArrowDropDown';

export interface SelectProps {
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  full?: boolean;
  disabled?: boolean;
  id?: string;
  options: Array<Object>;
  value: string | Array<Object>;
  setValue: Function;
  hint?: string;
  isMulti?: boolean;
  placeholder?: string;
}

export const Select: FC<SelectProps> = ({
  //id,
  //children,
  //size,
  //style,
  //className,
  options,
  value,
  setValue,
  disabled,
  isMulti,
  hint,
  placeholder
}) => {
  //const classSizes =
  //size === 'compact' ? 'py-1.5 px-3 text-sm' : 'py-3 px-6 text-base';
  const classLabel = {
    normal: 'font-medium text-black',
    disabled: 'font-medium text-gray-400',
  };

  const classHint = {
    normal: 'mt-1 font-normal text-gray-500',
    disabled: 'mt-1 font-normal text-gray-400',
  };

  return (
    <div>
      <h1 className={classLabel[disabled ? 'disabled' : 'normal']}>Label</h1>
      {hint ? (
        <p className={classHint[disabled ? 'disabled' : 'normal']}>{hint}</p>
      ) : null}

      <SelectComponent
        options={options}
        isMulti={isMulti}
        value={value}
        setValue={setValue}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};
