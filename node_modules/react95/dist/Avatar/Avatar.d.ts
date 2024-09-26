import React from 'react';
import { CommonStyledProps } from '../types';
declare type AvatarProps = {
    alt?: string;
    children?: React.ReactNode;
    noBorder?: boolean;
    size?: string | number;
    square?: boolean;
    src?: string;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const Avatar: React.ForwardRefExoticComponent<{
    alt?: string | undefined;
    children?: React.ReactNode;
    noBorder?: boolean | undefined;
    size?: string | number | undefined;
    square?: boolean | undefined;
    src?: string | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { Avatar, AvatarProps };
//# sourceMappingURL=Avatar.d.ts.map