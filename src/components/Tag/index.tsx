import React, { FC, ReactChild } from 'react';
import Icon from '@material-ui/core/Icon';

export interface TagProps {
  children?: ReactChild;
  color?:
  | 'purple'
  | 'green'
  | 'red'
  | 'lightPurple'
  | 'lightGreen'
  | 'lightRed';
  style?: any;
  iconName?: string;
  className?: string;
  disabled?: boolean;
  shaped: boolean;
  id?: string;
  onClose?: Function;
  onClick?: Function;
}

export const Tag: FC<TagProps> = ({
  id,
  children,
  shaped,
  iconName,
  style,
  className,
  onClick,
  onClose,
  color,
  disabled,
}) => {
  let sizeClass = 'text-sm';
  let tagColor = 'text-grey-300';
  let tagBg = '';
  let tagBorder = '';

  let classes = `${className ?? ``
    }  ${sizeClass}  inline-block rounded-full px-3 py-2  border `;

  if (disabled) {
    tagColor = 'text-gray-400';
    tagBg = 'bg-gray-100';
  } else {
    if (shaped) {
      tagBg = 'bg-gray-100';
      tagBorder = 'border-gray-100';
    } else {
      tagBg = 'bg-white';
      tagBorder = 'border-gray-200';
    }
    if (onClick || onClose) {
      tagColor = 'text-grey-800';
      tagBg +=
        'hover:bg-gray-50 focus:bg-purple focus:border-purple focus:text-white';
    } else {
      tagColor = 'text-grey-300';
    }
  }

  switch (color) {
    case 'lightPurple':
      tagColor = 'text-grey-800';
      tagBorder = 'bg-purpleLight-25';
      tagBg =
        'bg-purpleLight-25 hover:bg-purpleLight-50 focus:bg-purpleLight-75';
      break;
    case 'lightRed':
      tagBorder = 'bg-red-50';
      tagColor = 'text-grey-800';
      tagBg = 'bg-red-50 hover:bg-red-100 focus:bg-red-200';
      break;
    case 'lightGreen':
      tagBorder = 'bg-green-50';
      tagColor = 'text-grey-800';
      tagBg = 'bg-green-50 hover:bg-green-100 focus:bg-green-200';
      break;
    case 'purple':
      tagBorder = 'bg-purple-500';
      tagColor = 'text-white';
      tagBg = 'bg-purple-500 hover:bg-purple-400 focus:bg-purple-700';
      break;
    case 'red':
      tagBorder = 'bg-red-500';
      tagColor = 'text-white';
      tagBg = 'bg-red-500 hover:bg-red-400 focus:bg-red-700';
      break;
    case 'green':
      tagBorder = 'bg-green-500';
      tagColor = 'text-white';
      tagBg = 'bg-green-500 hover:bg-green-400 focus:bg-green-700';
      break;
  }

  classes += ` ${tagColor} ${tagBg} ${tagBorder} `;

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
        {onClose && (
          <div
            className="items-center flex"
            onClick={(ev) => {
              if (disabled) return false;
              ev.preventDefault();
              ev.stopPropagation();
              onClose(ev);
              return false;
            }}
          >
            <Icon fontSize="small">close</Icon>
          </div>
        )}
      </span>
    </button>
  );
};
