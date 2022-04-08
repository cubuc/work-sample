export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

export const GRID_SIZE = 60;

export interface Position {
    x: number;
    y: number;
}

export const samePosition = (p1: Position, p2: Position) => {
    return p1.x === p2.x && p1.y === p2.y;
}
