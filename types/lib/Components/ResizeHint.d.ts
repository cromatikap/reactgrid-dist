import * as React from 'react';
interface HintProps {
    linePosition: number;
    left: number;
    offset: number;
}
interface VerticalHintProps {
    linePosition: number;
    top: number;
    offset: number;
}
export declare const ResizeHint: React.FC<HintProps>;
export declare const ResizeVerticalHint: React.FC<VerticalHintProps>;
export {};
