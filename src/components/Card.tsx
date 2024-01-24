import React, {FC} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string,
    height?: string,
    variant?: CardVariant,
    onClick?: (num:number) => void
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 onClick,
                                 children
                             }) => {
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid black' : 'none',
            background: variant === CardVariant.primary ? 'skyblue' : ''
        }}
        onClick={(e) => onClick(e.clientX)}>
            {children}
        </div>
    );
};

export default Card;
