import React from "react";
import { GRID_SIZE, Piece, TeamType } from "./Constants";

interface TileProps {
    piece?: Piece;
}

const Tile = (props: TileProps) => {
    return (
        <div
            className="tile"
            style={{
                width: GRID_SIZE,
                height: GRID_SIZE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            {props.piece && (
                <div
                    style={{
                        backgroundImage: `url(${props.piece.image})`,
                        width: GRID_SIZE / 1.1,
                        height: GRID_SIZE / 1.1,
                        backgroundSize: "cover",
                        backgroundPosition: `${
                            props.piece.team === TeamType.BLACK ? (GRID_SIZE / 1.1) * -2 : 0
                        }px`,
                    }}
                    className="xiangqi-piece"></div>
            )}
        </div>
    );
};

export default Tile;
