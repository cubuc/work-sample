import React from "react";
import { GRID_SIZE } from "./Constants";

interface TileProps {
    image?: string;
}

const Tile = (props: TileProps) => {
    return (
        <div className="tile" style={{width: GRID_SIZE, height: GRID_SIZE}}>
            {props.image && (
                <div
                    style={{ backgroundImage: `url(${props.image})` }}
                    className="xiangqi-piece"></div>
            )}
        </div>
    );
};

export default Tile;
