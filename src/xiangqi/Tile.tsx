import React from "react";
import { GRID_SIZE } from "./Constants";

interface TileProps {
    image?: string;
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
            {props.image && (
                <div
                    style={{
                        backgroundImage: `url(${props.image})`,
                        width: GRID_SIZE / 1.1,
                        height: GRID_SIZE / 1.1,
                        backgroundSize: "cover",
                        backgroundPosition: "0px",
                    }}
                    className="xiangqi-piece"></div>
            )}
        </div>
    );
};

export default Tile;
