import React from 'react';
export declare const focusEventTypes: string[];
export declare const keyboardEventTypes: string[];
export declare const mouseEventTypes: string[];
export declare function isReactFocusEvent<T>(event: React.SyntheticEvent<T> | Event): event is React.FocusEvent<T>;
export declare function isReactKeyboardEvent<T>(event: React.SyntheticEvent<T> | Event): event is React.KeyboardEvent<T>;
export declare function isReactMouseEvent<T>(event: React.SyntheticEvent<T> | Event): event is React.MouseEvent<T>;
//# sourceMappingURL=events.d.ts.map