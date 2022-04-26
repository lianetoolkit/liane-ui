import React, { FC, ReactChild, useState } from 'react';
import Icon from '@material-ui/core/Icon';

export interface TextInputProps {
    size?: 'comfortable' | 'compact';
    type?: 'text' | 'password' | 'textarea'
    label: string,
    name: string,
    help?: string,
    placeholder?: string,
    icon?: string,
    trailIcon?: boolean;
    labelLeading?: string,
    labelTrailing?: string,
    buttonTrailing?: ReactChild,
    className?: any;
    disabled?: boolean;
    id?: string;
    onChange?: Function;
    onFocus?: Function;
    classNameWrapper?: string;
}

export const TextInput: FC<TextInputProps> = ({
    id,
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
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const ret = (() => {
        switch (type) {
            case 'textarea': return <textarea name={name} className={`input-box input-textarea ${className ?? ``}`} placeholder={placeholder ?? ``} disabled={disabled ?? false} id={id} ></textarea>;
            case 'password': {
                return <div className='group-input'>
                    <input name={name} type={showPassword ? `text` : `password`} placeholder={placeholder ?? ``} className={`inner-input-box ${className ?? ``}`} disabled={disabled ?? false} id={id} />
                    <button className='right-addon input-addon' onClick={() => setShowPassword(!showPassword)}>{!showPassword ? `🙈` : `🙉`}</button>
                </div>
            }
            default: return <input name={name} type={type} placeholder={placeholder ?? ``} className={`inner-input-box ${className ?? ``}`} disabled={disabled ?? false} id={id} />
        }
    })();
    return (
        <div className={`text-input-block ${classNameWrapper ?? ``} ${disabled ? `text-input-disabled` : ``}`}>
            <label>
                <span className='text-input-label'>{label}</span>
                {help && <span className='input-help'>{help}</span>}
                {(icon || labelLeading || labelTrailing || buttonTrailing) ? <div className='group-input'>
                    {icon && !trailIcon && <span className='input-addon left-addon'><Icon>{icon}</Icon></span>}
                    {labelLeading && <span className='input-addon inner-label '>{labelLeading}</span>}
                    {ret}
                    {icon && trailIcon && <span className='input-addon right-addon'><Icon>{icon}</Icon></span>}
                    {labelTrailing && <span className='input-addon inner-label'>{labelTrailing}</span>}
                </div> : ret}

            </label>

        </div>

    );
};
