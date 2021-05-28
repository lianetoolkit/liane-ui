import React, { FC, useState } from 'react';
import { Button } from './button';

interface Option {
  label: string;
  value?: string | number | undefined;
  disabled?: boolean;
}

export interface ButtonSwitchProps {
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  defaultValue: string | number | undefined;
  options?: Array<Option>;
  onChange?: Function;
}

export const ButtonSwitch: FC<ButtonSwitchProps> = ({
  size,
  defaultValue,
  style,
  className,
  options,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div style={style ?? {}} className={`liu-btn-switch ${className ?? ''} `}>
      {options &&
        options.map((option, index) => {
          let extraClass = 'button-switch ';
          let extraCSS = null;

          if (options.length > 1 && index === 0)
            extraClass += 'rounded-r-none border-r-0';
          else if (options.length > 1 && index + 1 === options.length)
            extraClass += 'rounded-l-none  border-l-0';
          else if (options.length > 2) {
            extraClass += 'rounded-none';
            extraCSS = { borderRadius: 0 };
          }
          const type = option.value == value ? 'primary' : 'secondary';
          if (option.disabled) extraClass += ' disabled ';
          return (
            <Button
              style={extraCSS}
              className={extraClass}
              type={type}
              size={size ?? 'compact'}
              key={`button-${index}`}
              disabled={option.disabled ?? false}
              onClick={(ev: any) => {
                setValue(option.value);
                if (onChange) onChange(ev, ev.target, option.value);
              }}
            >
              {option.label}
            </Button>
          );
        })}
    </div>
  );
};
