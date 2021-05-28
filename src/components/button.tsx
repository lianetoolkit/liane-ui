import React, { FC, ReactChild } from 'react';
export interface ButtonProps {
  children?: ReactChild;
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'destructive'
    | 'inverse';
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  full?: boolean;
  disabled?: boolean;
  onClick?: Function;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  size,
  style,
  className,
  full,
  onClick,
  disabled,
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
      onClick={(ev) => {
        if (onClick) onClick(ev);
      }}
      disabled={disabled ?? false}
      style={style ?? {}}
      className={`${full ? `w-full inline-block` : ''}	${classSizes} ${
        type && classTypes[type]
      } ${className ?? ''} ${disabled ? 'bg-gray' : ''} rounded font-medium `}
    >
      {children}
    </button>
  );
};
