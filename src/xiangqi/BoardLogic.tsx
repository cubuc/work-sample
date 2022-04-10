import React, { CSSProperties } from "react";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "./Constants";
import Tile from "./Tile";

import test from "../assets/xiangqi-pieces/advisor.png";

interface BoardLogicProps {
    cellSize: number;
}

const BoardLogic = (props: BoardLogicProps) => {
    const boardStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${HORIZONTAL_AXIS.length}, ${props.cellSize}px)`,
        gridTemplateRows: `repeat(${VERTICAL_AXIS.length}, ${props.cellSize}px)`,
        width: props.cellSize * HORIZONTAL_AXIS.length,
        height: props.cellSize * VERTICAL_AXIS.length,
        position: "absolute",
    };

    const board = [];

    for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
        for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
            board.push(<Tile key={`${j},${i}`} image={test} />);
        }
    }

    return <div style={boardStyle}>{board}</div>;
};

export default BoardLogic;
