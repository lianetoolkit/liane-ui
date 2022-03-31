import React, { FC } from 'react';
import SelectLib from 'react-select';

import { SelectComponent } from './SelectComponent';

//import ArrowDown from './ArrowDropDown';

export interface SelectProps {
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  full?: boolean;
  disabled?: boolean;
  id?: string;
  options: any;
  value: any;
  setValue: Function;
  hint?: string;
  isMulti?: boolean;
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
      {/*{hint ? <p>hint</p> : null}*/}
      {hint ? (
        <p className={classHint[disabled ? 'disabled' : 'normal']}>{hint}</p>
      ) : null}

      <SelectComponent
        options={options}
        isMulti={isMulti}
        value={value}
        setValue={setValue}
        disabled={disabled}
      />

      {/*<SelectLib
        className={
          className +
          'mt-1 text-black font-normal border-gray hover:border-black focus:border-black'
        }
        classNamePrefix="select"
        options={options}
        isClearable={true}
        //isMulti={true}
        //isDisabled={true}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => <ArrowDown />,
          //ClearIndicator: () => <ClearIndicator />,
        }}
      />*/}
    </div>
  );
};
