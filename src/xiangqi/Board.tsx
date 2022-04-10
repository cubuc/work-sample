import React, { useEffect, useRef } from "react";
import { GRID_SIZE } from "./Constants";
import BoardLines from "./BoardLines";
import BoardLogic from "./BoardLogic";

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
