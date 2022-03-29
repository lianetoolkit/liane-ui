import React, { FC, ReactChild } from 'react';

export interface TooltipProps {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  title: string;
  children?: ReactChild;
  style?: any;
  className?: string;
  id?: string;
}

export const Tooltip: FC<TooltipProps> = (props) => {
  const { title, placement, children, style, className, id } = props;

  return (
    <div
      className={`liu-tooltip liu-tooltip-${placement ?? 'top'} ${
        className ?? ``
      }`}
      id={id}
      style={style ?? {}}
    >
      <span className="liu-tooltip-container">
        <span className="liu-tooltip-text">{title}</span>
      </span>
      <span>{children}</span>
    </div>
  );
};
