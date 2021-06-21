import React, { FC, ReactChild } from 'react';
export interface LinkProps {
  children?: ReactChild;
  size?: 'lg' | 'md' | 'sm';
  color?: 'main' | 'primary' | 'secondary';
  style?: any;
  className?: string;
  underlined?: boolean;
  id?: string;
  href?: string;
  target?: string;
  onClick?: Function;
}

export const Link: FC<LinkProps> = ({
  id,
  children,
  underlined,
  size,
  style,
  className,
  onClick,
  color,
  target,
  href,
}) => {
  let sizeClass = 'text-base';
  switch (size) {
    case 'lg':
      sizeClass = 'text-lg';
      break;
    case 'md':
      sizeClass = 'text-base';
      break;
    case 'sm':
      sizeClass = 'text-sm';
      break;
  }
  let classes = `${className} ${underlined && 'underline'} ${sizeClass}`;
  switch (color) {
    case 'primary':
      classes += ` text-linkPrimary hover:text-linkPrimary visited:text-linkPrimary`;
      break;
    case 'secondary':
      classes += ` text-gray-500 hover:text-gray-400 visited:text-gray-700`;
      break;
    default:
      classes += ` text-purple-500 hover:text-purple-400 visited:text-purple-700`;
  }

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
