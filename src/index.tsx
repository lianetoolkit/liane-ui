import React, { FC, HTMLAttributes, ReactChild } from 'react';

import './index.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto text-2xl text-center text-pink-700 uppercase bg-blue-300 shadow-xl rounded-3xl">
      {children || `Hi there testing`}
    </div>
  );
};

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'destructive'
    | 'inverse';
  size?: 'comfortable' | 'compact';
  style: any;
  className: any;
  // full
  // styles
  //
  // disabled
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  size,
  style,
  className,
}) => {
  const classSizes =
    size === 'compact' ? 'py-1.5 px-3 text-sm' : 'py-3 px-6 text-base';
  const classTypes = {
    primary:
      'bg-purple border border-purple text-white hover:bg-purple-400 active:bg-purple-700',
    secondary:
      'bg-white border border-purple text-purple hover:bg-purpleLight active:bg-purpleLight-75',
    tertiary:
      'bg-white border border-gray text-black hover:bg-gray-50 active:bg-gray-100',
    ghost:
      'bg-transparent  text-purple hover:bg-purpleLight active:bg-purpleLight-75',
    destructive:
      'bg-red border border-red text-white hover:bg-red-400 active:bg-red-700',
    inverse:
      'text-purple bg-white hover:bg-purpleLight active:bg-purpleLight-75',
  };
  return (
    <button
      style={style ?? {}}
      className={`rounded font-medium	${classSizes} ${
        type && classTypes[type]
      } ${className ?? ''}`}
    >
      {children}
    </button>
  );
};
