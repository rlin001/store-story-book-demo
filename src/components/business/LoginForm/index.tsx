import React, {MouseEventHandler, useState} from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import {Input} from "../../global/Input";
import {Button} from "../../global/Button";
import {Title} from "../../global/Title";

const cx = classNames.bind(styles);


export interface LoginFormProps {
    title: string;
    color?: string;
    backgroundColor?:string;
    borderColor?:string;
    style?: object;
    submit: any;
    reset: any;
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {

    const { title, backgroundColor, color, borderColor, style, submit, reset } = props;
    const initFormData = {
        loginValue: '',
        pwdValue: '',
    }
    const [ formData, setFormData] = useState(initFormData);

    const handleSubmit = (e: any) =>{
        if (typeof submit === 'function'){
            submit(e, formData);
        }
    }

    const handleReset = (e: any) =>{
        if (typeof reset === 'function'){
            reset(e, formData);
        }
    }

    return (
        <form
            className={
                cx('loginForm')
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
        >
            <Title level={3} text={title} />
            <Input type={"text"} label='login:' value={formData.loginValue} onChange={(e:any)=>{
                setFormData({
                    ...formData,
                    loginValue: e.target.value
                })
            }} inLine={true} /><br/>
            <Input type={"password"} label='password:' value={formData.pwdValue} onChange={(e:any)=>{
                setFormData({
                    ...formData,
                    pwdValue: e.target.value
                })
            }} inLine={true} />
            <div>
                <Button type='primary' onClick={handleSubmit} label='submit' />
                <Button label='reset' onClick={handleReset} />
            </div>
        </form>
    );
};

export default LoginForm;