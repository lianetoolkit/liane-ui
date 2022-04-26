import React, { FC, ReactChild, useState } from 'react';
export interface TextInputProps {
    size?: 'comfortable' | 'compact';
    type?: 'text' | 'password' | 'textarea'
    label: string,
    name: string,
    help?: string,
    placeholder?: string,
    icon?: string,
    labelLeading?: string,
    labelTrailing?: string,
    buttonTrailing?: ReactChild,
    trailIcon?: boolean;
    style?: any;
    className?: any;
    full?: boolean;
    disabled?: boolean;
    id?: string;
    onClick?: Function;
    onChange?: Function;
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
    // size,
    // style,
    name,
    className,
    // full,
    // onClick,
    classNameWrapper,
    disabled,
}) => {
    // const classSizes =
    const [showPassword, setShowPassword] = useState(false);
    const ret = (() => {
        switch (type) {
            case 'textarea': return <textarea name={name} className={`input-box input-textarea ${className ?? ``}`} placeholder={placeholder ?? ``} disabled={disabled ?? false} id={id} ></textarea>;
            case 'password': {
                return <div className='group-input'>
                    <input name={name} type={showPassword ? `text` : `password`} placeholder={placeholder ?? ``} className={`inner-input-box ${className ?? ``}`} disabled={disabled ?? false} id={id} />
                    <button className='left-addon input-addon' onClick={() => setShowPassword(!showPassword)}>{!showPassword ? `🙈` : `🙉`}</button>
                </div>

            }
            default: return <input name={name} type={type ?? 'text'} placeholder={placeholder ?? ``} className={`input-box ${className ?? ``}`} disabled={disabled ?? false} id={id} />
        }


    })();

    return (
        <div className={`text-input-block ${classNameWrapper ?? ``} ${disabled ? `text-input-disabled` : ``}`}>
            <label>
                <span className='text-input-label'>{label}</span>
                {help && <span className='input-help'>{help}</span>}
                {(icon || labelLeading || labelTrailing || buttonTrailing) ? <div className='group-input'>
                    {ret}
                </div> : ret}

            </label>

        </div>

    );
};
