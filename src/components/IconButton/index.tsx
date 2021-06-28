// import React, { FC, lazy, useState, Suspense } from 'react';
import React, { FC, useState } from 'react';
import Icon from '@material-ui/core/Icon';

export interface IconButtonProps {
  disabled?: boolean;
  isSwitch?: boolean;
  outlined?: boolean;
  shaped?: boolean;
  iconName: string;
  inverse?: boolean;
  color?: 'main' | 'primary' | 'secondary' | 'destructive';
  theme?: 'warning' | 'primary' | 'danger' | 'success';
  style?: any;
  className?: string;
  id?: string;
  onClick?: Function;
}
export const IconButton: FC<IconButtonProps> = ({
  id,
  style,
  className,
  onClick,
  iconName,
  isSwitch,
  outlined,
  inverse,
  disabled,
  shaped,
  color,
  theme,
}) => {
  const [checked, setChecked] = useState(false);
  if (!iconName) {
    return null;
  }

  let base = `${
    className ? className : ''
  } w-10 h-10 rounded-full inline-flex justify-center	items-center`;
  let extraClasses = '';
  const themeColors = {
    warning: 'text-yellow-500',
    primary: 'text-purple-500',
    danger: 'text-red-500',
    success: 'text-green-500',
  };

  if (theme && isSwitch && checked) extraClasses += ` ${themeColors[theme]}`;

  switch (color) {
    case 'primary':
      extraClasses += `${
        extraClasses === '' ? `text-linkPrimary` : ''
      } hover:bg-gray-100 focus:bg-gray-200`;
      if (shaped) extraClasses += ` ${inverse ? `bg-white` : `bg-gray-100`} `;
      break;
    case 'secondary':
      extraClasses += `${
        extraClasses === '' ? `text-gray-500` : ''
      }  hover:bg-gray-100 focus:bg-gray-200`;
      if (shaped) extraClasses += ' bg-gray-100';
      break;
    case 'destructive':
      extraClasses += `${
        extraClasses === '' ? `text-red-500` : ''
      }  hover:bg-gray-100 focus:bg-gray-200`;
      if (shaped) extraClasses += ' bg-gray-100';
      break;
    default:
      extraClasses += `${
        extraClasses === '' ? `text-purple-500` : ''
      }  hover:text-purple-400 visited:text-purple-700 hover:bg-purpleLight-25 focus:bg-purpleLight-50`;
      if (shaped)
        extraClasses += ` ${inverse ? `bg-white` : `bg-purpleLight-25`} `;
  }
  let iconNameFinal = iconName;

  if (outlined && !checked) iconNameFinal += '_outlined';
  const finalClasses = `${base} ${
    disabled ? `text-gray-300 ${shaped && `bg-gray-100`}` : extraClasses
  } `;
  return (
    <button
      disabled={disabled}
      className={finalClasses}
      id={id}
      onClick={(ev) => {
        ev.preventDefault();
        if (disabled) {
          return false;
        }
        if (isSwitch) {
          setChecked(!checked);
        }
        if (onClick) onClick(ev);
      }}
      style={style ?? {}}
    >
      <Icon>{iconNameFinal}</Icon>
    </button>
  );
};
