import React from 'react';
import './index.css'

declare interface ButtonProps {
    label?: string;
    onClick?: any;
    children?: any;
    size?: 'sm'|'md'|'lg';
    type?: 'primary' | 'default';
    disabled?: boolean;
    color?: string;
    backgroundColor?:string;
    borderColor?:string;
    style?: object;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { label, style, children, size, type, backgroundColor, color, disabled, borderColor, ...restProps } = props;
    return (
        <button
            disabled={disabled}
            {...restProps}
            className={`button ${size} ${type} ${disabled ? 'disabled' : ''}`}
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
            type="button">
            {label || children}
        </button>
    );
};
