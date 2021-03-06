import React from 'react';
import './index.css'


declare interface TitleProps {
    level: number;
    text: string;
    color?: string;
    backgroundColor?:string;
    borderColor?:string;
}

export const Title: React.FC<TitleProps> = (props: TitleProps) => {
    const { color, backgroundColor, borderColor, level, text, ...restProps } = props;

    const Component = `h${level}`;
    // @ts-ignore
    const content = <Component
        {...restProps}
        style={{
            color, backgroundColor, borderColor
        }}
    >
        {text}
    </Component>;

    return (
       <>
           {content}
       </>
    );
};
