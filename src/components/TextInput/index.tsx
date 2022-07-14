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
  rules: Array<{
    regex: string;
    msg: string;
  }>;
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
  rules,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(defaultValue ?? '');
  const [errors, setErrors] = useState<string[]>([]);
  const [pristine, setPristine] = useState(true);
  const handleValidation = () => {
    const newErrors: React.SetStateAction<string[]> = [];
    rules.map((rule) => {
      const regex = new RegExp(rule.regex);
      if (!regex.test(value)) {
        newErrors.push(rule.msg);
      }
    });
    setErrors(newErrors);
  };
  const handleChange = (val: any) => {
    onChange && onChange(val);
    if (pristine) setPristine(false);
    setValue(val);
    if (rules) handleValidation();
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
          <>
            <div
              className={`group-input ${
                !pristine && errors.length > 0 ? `input-error` : ``
              } ${!pristine && errors.length === 0 ? `input-success` : ``}`}
            >
              <input
                name={name}
                type={showPassword ? `text` : `password`}
                placeholder={placeholder ?? ``}
                className={`inner-input-box ${className ?? ``} `}
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
            {errors.length > 0
              ? errors.map((error) => (
                  <small className="text-red">{error}</small>
                ))
              : null}
          </>
        );
      }
      case 'tel': {
        return (
          <div
            className={`group-input ${
              !pristine && errors.length > 0 ? `input-error` : ``
            } ${!pristine && errors.length === 0 ? `input-success` : ``}`}
          >
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
