import React from 'react';
import { CommonStyledProps } from '../types';
declare type AnchorProps = {
    children: React.ReactNode;
    underline?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonStyledProps;
declare const Anchor: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    underline?: boolean | undefined;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonStyledProps & React.RefAttributes<HTMLAnchorElement>>;
export { Anchor, AnchorProps };
//# sourceMappingURL=Anchor.d.ts.map