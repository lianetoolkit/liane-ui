import React, { FC, ReactChild, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import PhoneInput from 'react-phone-number-input';
import { E164Number, CountryCode } from 'libphonenumber-js/core';

export interface TextInputProps {
  size?: 'comfortable' | 'compact';
  type?: 'text' | 'password' | 'textarea' | 'tel' | 'date' | 'number';
  label: string;
  name: string;
  defaultValue?: string | E164Number;
  defaultCountry?: CountryCode;
  help?: string;
  placeholder?: string;
  icon?: string;
  trailIcon?: boolean;
  labelLeading?: string;
  labelTrailing?: string;
  buttonTrailing?: ReactChild;
  className?: any;
  disabled?: boolean;
  id?: string;
  onChange?: Function;
  onFocus?: Function;
  classNameWrapper?: string;
}

export const TextInput: FC<TextInputProps> = ({
  id,
  size,
  label,
  help,
  type,
  icon,
  placeholder,
  labelLeading,
  labelTrailing,
  buttonTrailing,
  name,
  className,
  trailIcon,
  classNameWrapper,
  disabled,
  defaultValue,
  defaultCountry,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(defaultValue ?? '');
  const handleChange = (val: any) => {
    onChange && onChange(val);
    setValue(val);
  };
  const ret = (() => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            name={name}
            className={`input-box input-textarea ${className ?? ``}`}
            placeholder={placeholder ?? ``}
            disabled={disabled ?? false}
            id={id}
          ></textarea>
        );
      case 'password': {
        return (
          <div className="group-input">
            <input
              name={name}
              type={showPassword ? `text` : `password`}
              placeholder={placeholder ?? ``}
              className={`inner-input-box ${className ?? ``}`}
              disabled={disabled ?? false}
              id={id}
              value={value}
              onChange={(ev) => {
                handleChange(ev.target.value);
              }}
            />
            <button
              className="right-addon input-addon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? `🙈` : `🙉`}
            </button>
          </div>
        );
      }
      case 'tel': {
        return (
          <div className="group-input">
            <PhoneInput
              country={defaultCountry ?? ''}
              placeholder="Enter phone number"
              value={value}
              onChange={(val) => {
                handleChange(val ?? '');
              }}
            />
          </div>
        );
      }
      default:
        return (
          <input
            name={name}
            defaultValue={defaultValue}
            type={type}
            placeholder={placeholder ?? ``}
            className={`inner-input-box ${className ?? ``}`}
            disabled={disabled ?? false}
            id={id}
            value={value}
            onChange={(ev) => {
              handleChange(ev.target.value);
            }}
          />
        );
    }
  })();
  return (
    <div
      className={`text-input-block ${classNameWrapper ?? ``} ${
        disabled ? `text-input-disabled` : ``
      } ${size === 'compact' ? `input-compact` : `input-comfortable`}`}
    >
      <label>
        <span className="text-input-label">{label}</span>
        {help && <span className="input-help">{help}</span>}
        {icon || labelLeading || labelTrailing || buttonTrailing ? (
          <div className="group-input">
            {icon && !trailIcon && (
              <span className="input-addon left-addon">
                <Icon>{icon}</Icon>
              </span>
            )}
            {labelLeading && (
              <span className="input-addon inner-label ">{labelLeading}</span>
            )}
            {ret}
            {icon && trailIcon && (
              <span className="input-addon right-addon">
                <Icon>{icon}</Icon>
              </span>
            )}
            {labelTrailing && (
              <span className="input-addon inner-label">{labelTrailing}</span>
            )}
          </div>
        ) : type === 'password' || type === 'textarea' || type === 'tel' ? (
          ret
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder ?? ``}
            className={`input-box ${className ?? ``}`}
            disabled={disabled ?? false}
            id={id}
            value={value}
            onChange={(ev) => {
              handleChange(ev.target.value);
            }}
          />
        )}
      </label>
    </div>
  );
};
