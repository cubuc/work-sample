import React, { useEffect, useRef } from "react";
import { GRID_SIZE } from "./Constants";
import BoardLines from "./BoardLines";
import BoardLogic from "./BoardLogic";

const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const yAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Board = () => {
    const cellSize = GRID_SIZE;

    return (
        <div>
            <div style={{ position: "absolute" }}>
                <BoardLines cellSize={cellSize} />
            </div>
            <BoardLogic cellSize={cellSize} />
        </div>
    );
};

export default Board;
