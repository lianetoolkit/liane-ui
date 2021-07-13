import React, { FC, ReactChild } from 'react';
import Icon from '@material-ui/core/Icon';

export interface TagProps {
  children?: ReactChild;
  // color?: 'main' | 'primary' | 'secondary';
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
  // underlined,
  style,
  className,
  onClick,
  onClose,
  // color,
  disabled,
}) => {
  let sizeClass = 'text-sm';
  let classes = `${
    className ?? ``
  }  ${sizeClass}  inline-block rounded-full px-3 py-2  border `;
  if (disabled) {
    classes += ' bg-gray-100 text-gray-400';
  } else {
    classes += ` ${
      shaped ? `border-gray-100 bg-gray-100` : `border-gray-200 bg-white`
    } `;

    if (onClick) {
      classes +=
        ' text-darkerGray hover:bg-gray-50 focus:bg-purple focus:border-purple focus:text-white';
    } else {
      classes += ' text-darkGray ';
    }
  }

  // switch (color) {
  //   case 'primary':
  //     classes += ` text-darkerGray hover:text-darkerGray visited:text-darkerGray`;
  //     break;
  //   case 'secondary':
  //     classes += ` text-gray-500 hover:text-gray-400 visited:text-gray-700`;
  //     break;
  //   default:
  //     classes += ` text-purple-500 hover:text-purple-400 visited:text-purple-700`;
  // }

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
            }}
          >
            <Icon fontSize="small">close</Icon>
          </div>
        )}
      </span>
    </button>
  );
};
