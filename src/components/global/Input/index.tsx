import React from 'react';
import './index.css'

declare interface InputProps {
    label?: string;
    type: 'text'|'number'|'password';
    value?: string;
    onInput?: any;
    onBlur?: any;
    onChange?: any;
    disabled?: boolean;
    size?: 'sm'|'md'|'lg';
    color?: string;
    backgroundColor?:string;
    borderColor?:string;
    inLine?:boolean;
    style?:object;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
    const { type='text', inLine, label, style, disabled=false, size, color, backgroundColor, borderColor, ...restProps } = props;

    return (
        <div className={`inputWrap ${inLine ? 'inLine': ''}`}>
            {label ? (
                <div className='label'>{label}</div>
            ): null}
            <input
                className={`input ${size || ''} ${disabled ? 'disabled': ''}`}
                style={
                    {
                        ...style,
                        ...{
                            backgroundColor,
                            color,
                            borderColor
                        }
                    }
                }
                disabled={disabled}
                type={type}
                {...restProps}
            />
        </div>
    );
};
