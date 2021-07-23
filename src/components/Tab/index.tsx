import React, { FC, ReactChild } from 'react';
import Icon from '@material-ui/core/Icon';

export interface TabProps {
  children?: ReactChild;
  style?: any;
  iconName?: string;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  id?: string;
  onClick?: Function;
}

export const Tab: FC<TabProps> = ({
  id,
  children,
  iconName,
  style,
  className,
  onClick,
  disabled,
  active,
}) => {
  let sizeClass = 'text-base';
  let tabColor = 'text-purple font-medium';
  let tabBg = 'bg-transparent hover:purpleLight focus:bg-purpleLight-75';

  let classes = `${
    className ?? ``
  }  ${sizeClass}  inline-block rounded-full px-4 py-2`;
  if (active) {
    tabBg = 'bg-purpleLight-50 hover:purpleLight focus:bg-purpleLight-75';
  }

  if (disabled) {
    tabColor = 'text-gray-400';
    tabBg = '';
  }

  classes += ` ${tabColor} ${tabBg} `;

  return (
    <button
      className={classes}
      id={id}
      onClick={(ev) => {
        if (onClick && !disabled) onClick(ev);
      }}
      style={style ?? {}}
    >
      <span className="flex items-center space-x-1">
        {iconName && <Icon fontSize="small">{iconName}</Icon>}
        <span>{children}</span>
      </span>
    </button>
  );
};
