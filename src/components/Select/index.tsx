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
  //value: any;
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
  setValue,
  //isMulti,
  //hint,
  //full,
  //disabled,
}) => {
  //const classSizes =
  //size === 'compact' ? 'py-1.5 px-3 text-sm' : 'py-3 px-6 text-base';
  //const classTypes = {
  //primary:
  //'bg-purple border border-purple text-white hover:bg-purple-400 active:bg-purple-700',
  //secondary:
  //'bg-white border border-purple text-purple hover:bg-purpleLight active:bg-purpleLight-75',
  //tertiary:
  //'bg-white border border-gray text-black hover:bg-gray-50 active:bg-gray-100',
  //ghost:
  //'bg-transparent  text-purple hover:bg-purpleLight active:bg-purpleLight-75',
  //destructive:
  //'bg-red border border-red text-white hover:bg-red-400 active:bg-red-700',
  //inverse:
  //'text-purple bg-white hover:bg-purpleLight active:bg-purpleLight-75',
  //}

  return (
    <div>
      <h1 className="font-medium text-black">Label</h1>
      {/*{hint ? <p>hint</p> : null}*/}
      <p className="mt-1 font-normal text-gray-500">Hint is optional</p>

      <SelectComponent options={options} isMulti={true} setValue={setValue} />

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
