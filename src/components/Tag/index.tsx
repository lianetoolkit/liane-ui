import React, { FC, ReactChild } from 'react';
export interface TagProps {
  children?: ReactChild;
  // color?: 'main' | 'primary' | 'secondary';
  style?: any;
  className?: string;
  // underlined?: boolean;
  shaped: boolean;
  id?: string;
  href?: string;
  target?: string;
  onClick?: Function;
}

export const Tag: FC<TagProps> = ({
  id,
  children,
  shaped,
  // underlined,
  style,
  className,
  onClick,
  // color,
  target,
  href,
}) => {
  let sizeClass = 'text-sm';
  let classes = `${className}  ${sizeClass} rounded-full px-3 py-2 text-darkGray border ${
    shaped ? `border-gray-100 bg-gray-100` : `border-gray-200 bg-white`
  }`;
  // switch (color) {
  //   case 'primary':
  //     classes += ` text-linkPrimary hover:text-linkPrimary visited:text-linkPrimary`;
  //     break;
  //   case 'secondary':
  //     classes += ` text-gray-500 hover:text-gray-400 visited:text-gray-700`;
  //     break;
  //   default:
  //     classes += ` text-purple-500 hover:text-purple-400 visited:text-purple-700`;
  // }

  return (
    <a
      className={classes}
      href={href}
      id={id}
      target={target}
      onClick={(ev) => {
        if (onClick) onClick(ev);
      }}
      style={style ?? {}}
    >
      {children}
    </a>
  );
};
