import React, { FC, ReactChild } from 'react';
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
    placeholder,
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



    return (
        <div className={`text-input-block ${classNameWrapper ?? ``} ${disabled ? `text-input-disabled` : ``}`}>
            <label>
                <span className='text-input-label'>{label}</span>
                {help && <span className='input-help'>{help}</span>}
                <input name={name} type={type ?? 'text'} placeholder={placeholder ?? ``} className={`input-box ${className ?? ``}`} disabled={disabled ?? false} id={id} />
            </label>

        </div>

    );
};
