/// <reference types="react" />
export declare function teardown(doc: Document): void;
declare function isFocusVisible(event: React.FocusEvent): boolean;
/**
 * Should be called if a blur event is fired on a focus-visible element
 */
declare function handleBlurVisible(): void;
export declare function useIsFocusVisible<T extends Element = HTMLElement>(): {
    isFocusVisible: typeof isFocusVisible;
    onBlurVisible: typeof handleBlurVisible;
    ref: (instance: T) => void;
};
export {};
//# sourceMappingURL=useIsFocusVisible.d.ts.map