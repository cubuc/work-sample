import React from "react";
import { Piece, TeamType } from "../Constants";

import "./Tile.css";

interface TileProps {
    piece?: Piece;
}

const Tile = (props: TileProps) => {
    return (
        <div className="tile">
            {props.piece && (
                <div
                    className="xiangqi-piece"
                    style={{
                        backgroundImage: `url(${props.piece.image})`,
                        backgroundPosition: `${props.piece.team === TeamType.BLACK ? -200 : 0}%`,
                    }}></div>
            )}
        </div>
    );
};

export default Tile;
