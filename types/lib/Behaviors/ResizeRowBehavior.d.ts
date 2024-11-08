import React from "react";
import { Direction, PointerLocation, Range } from "../../core";
import { PointerEvent } from "../Model/domEventsTypes";
import { State } from "../Model/State";
import { Behavior } from "../Model/Behavior";
export declare class ResizeRowBehavior extends Behavior {
    private resizedRow;
    private initialLocation;
    autoScrollDirection: Direction;
    isInScrollableRange: boolean;
    handlePointerDown(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerMove(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerUp(event: PointerEvent, location: PointerLocation, state: State): State;
    renderPanePart(state: State, pane: Range): React.ReactNode;
    getLinePositionOffset(state: State): number;
}
