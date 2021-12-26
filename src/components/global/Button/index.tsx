import React, {MouseEventHandler} from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);


export interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler;
    children?: any;
    size?: 'sm'|'md'|'lg';
    type?: 'primary' | 'default';
    disabled?: boolean;
    color?: string;
    backgroundColor?:string;
    borderColor?:string;
    style?: object;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { label, style, children, size, type, backgroundColor, color, disabled, borderColor, ...restProps } = props;
    return (
        <button
            disabled={disabled}
            {...restProps}
            className={
                cx('button', size, type, {
                    'disabled': disabled
                })
            }
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

export default Button;