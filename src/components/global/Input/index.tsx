import React, {
    ChangeEventHandler,
    DOMElement,
    FocusEventHandler, FormEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactDOM
} from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

export interface InputProps {
    label?: string;
    type: 'text'|'number'|'password';
    value?: string;
    onInput?: FormEventHandler;
    onBlur?: FocusEventHandler;
    onChange?: ChangeEventHandler;
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
        <div className={cx('inputWrap', {
            'inLine': inLine
        })}>
            {label ? (
                <div className={cx('label')}>{label}</div>
            ): null}
            <input
                className={cx('input', size, {
                    'disabled': disabled
                })}
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