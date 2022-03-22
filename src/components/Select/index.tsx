import React, { FC } from 'react';
import SelectLib from 'react-select';

//import ArrowDown from './ArrowDropDown';

export interface SelectProps {
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  full?: boolean;
  disabled?: boolean;
  id?: string;
  options: any;
  hint?: string;
}

interface ArrowDownProps {
  className?: string;
}

const ArrowDown: FC<ArrowDownProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        className="mr-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10L12 15L17 10H7Z" fill="#212121" />
      </svg>
    </div>
  );
};

interface ClearIndicatorProps {
  className?: string;
}

const ClearIndicator: FC<ClearIndicatorProps> = ({ className }) => {
  return (
    <div className={className + ''}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
};

export const Select: FC<SelectProps> = ({
  //id,
  //children,
  //size,
  //style,
  className,
  options,
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

      <SelectLib
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
      />
    </div>
  );
};
