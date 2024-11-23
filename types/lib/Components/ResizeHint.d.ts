import * as React from 'react';
interface HintColumnProps {
    linePosition: number;
    left: number;
    offset: number;
}
interface HintRowProps {
    linePosition: number;
    top: number;
    offset: number;
}
export declare const ResizeColumnHint: React.FC<HintColumnProps>;
export declare const ResizeRowHint: React.FC<HintRowProps>;
export {};
