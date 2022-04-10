import advisor from "../assets/xiangqi-pieces/advisor.png";
import cannon from "../assets/xiangqi-pieces/cannon.png";
import chariot from "../assets/xiangqi-pieces/chariot.png";
import elephant from "../assets/xiangqi-pieces/elephant.png";
import general from "../assets/xiangqi-pieces/general.png";
import horse from "../assets/xiangqi-pieces/horse.png";
import soldier from "../assets/xiangqi-pieces/soldier.png";

export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

export const GRID_SIZE = 60;

export interface Position {
    x: number;
    y: number;
}

export const samePosition = (p1: Position, p2: Position) => {
    return p1.x === p2.x && p1.y === p2.y;
};

export enum PieceType {
    ADVISOR,
    CANNON,
    CHARIOT,
    ELEPHANT,
    GENERAL,
    HORSE,
    SOLDIER,
}

export enum TeamType {
    BLACK,
    RED,
}

export interface Piece {
    image: string;
    position: Position;
    type: PieceType;
    team: TeamType;
}

export const initialBoardState: Piece[] = [
    {
        image: chariot,
        position: {
            x: 0,
            y: 9,
        },
        type: PieceType.CHARIOT,
        team: TeamType.BLACK,
    },
    {
        image: chariot,
        position: {
            x: 8,
            y: 9,
        },
        type: PieceType.CHARIOT,
        team: TeamType.BLACK,
    },
    {
        image: horse,
        position: {
            x: 1,
            y: 9,
        },
        type: PieceType.HORSE,
        team: TeamType.BLACK,
    },
    {
        image: horse,
        position: {
            x: 7,
            y: 9,
        },
        type: PieceType.HORSE,
        team: TeamType.BLACK,
    },
    {
        image: elephant,
        position: {
            x: 2,
            y: 9,
        },
        type: PieceType.ELEPHANT,
        team: TeamType.BLACK,
    },
    {
        image: elephant,
        position: {
            x: 6,
            y: 9,
        },
        type: PieceType.ELEPHANT,
        team: TeamType.BLACK,
    },
    {
        image: advisor,
        position: {
            x: 3,
            y: 9,
        },
        type: PieceType.ADVISOR,
        team: TeamType.BLACK,
    },
    {
        image: advisor,
        position: {
            x: 5,
            y: 9,
        },
        type: PieceType.ADVISOR,
        team: TeamType.BLACK,
    },
    {
        image: general,
        position: {
            x: 4,
            y: 9,
        },
        type: PieceType.GENERAL,
        team: TeamType.BLACK,
    },
    {
        image: cannon,
        position: {
            x: 1,
            y: 7,
        },
        type: PieceType.CANNON,
        team: TeamType.BLACK,
    },
    {
        image: cannon,
        position: {
            x: 7,
            y: 7,
        },
        type: PieceType.CANNON,
        team: TeamType.BLACK,
    },
    {
        image: soldier,
        position: {
            x: 0,
            y: 6,
        },
        type: PieceType.SOLDIER,
        team: TeamType.BLACK,
    },
    {
        image: soldier,
        position: {
            x: 2,
            y: 6,
        },
        type: PieceType.SOLDIER,
        team: TeamType.BLACK,
    },
    {
        image: soldier,
        position: {
            x: 4,
            y: 6,
        },
        type: PieceType.SOLDIER,
        team: TeamType.BLACK,
    },
    {
        image: soldier,
        position: {
            x: 6,
            y: 6,
        },
        type: PieceType.SOLDIER,
        team: TeamType.BLACK,
    },
    {
        image: soldier,
        position: {
            x: 8,
            y: 6,
        },
        type: PieceType.SOLDIER,
        team: TeamType.BLACK,
    },
    {
        image: chariot,
        position: {
            x: 0,
            y: 0,
        },
        type: PieceType.CHARIOT,
        team: TeamType.RED,
    },
    {
        image: chariot,
        position: {
            x: 8,
            y: 0,
        },
        type: PieceType.CHARIOT,
        team: TeamType.RED,
    },
    {
        image: horse,
        position: {
            x: 1,
            y: 0,
        },
        type: PieceType.HORSE,
        team: TeamType.RED,
    },
    {
        image: horse,
        position: {
            x: 7,
            y: 0,
        },
        type: PieceType.HORSE,
        team: TeamType.RED,
    },
    {
        image: elephant,
        position: {
            x: 2,
            y: 0,
        },
        type: PieceType.ELEPHANT,
        team: TeamType.RED,
    },
    {
        image: elephant,
        position: {
            x: 6,
            y: 0,
        },
        type: PieceType.ELEPHANT,
        team: TeamType.RED,
    },
    {
        image: advisor,
        position: {
            x: 3,
            y: 0,
        },
        type: PieceType.ADVISOR,
        team: TeamType.RED,
    },
    {
        image: advisor,
        position: {
            x: 5,
            y: 0,
        },
        type: PieceType.ADVISOR,
        team: TeamType.RED,
    },
    {
        image: general,
        position: {
            x: 4,
            y: 0,
        },
        type: PieceType.GENERAL,
        team: TeamType.RED,
    },
    {
        image: cannon,
        position: {
            x: 1,
            y: 2,
        },
        type: PieceType.CANNON,
        team: TeamType.RED,
    },
    {
        image: cannon,
        position: {
            x: 7,
            y: 2,
        },
        type: PieceType.CANNON,
        team: TeamType.RED,
    },
    {
        image: soldier,
        position: {
            x: 0,
            y: 3,
        },
        type: PieceType.SOLDIER,
        team: TeamType.RED,
    },
    {
        image: soldier,
        position: {
            x: 2,
            y: 3,
        },
        type: PieceType.SOLDIER,
        team: TeamType.RED,
    },
    {
        image: soldier,
        position: {
            x: 4,
            y: 3,
        },
        type: PieceType.SOLDIER,
        team: TeamType.RED,
    },
    {
        image: soldier,
        position: {
            x: 6,
            y: 3,
        },
        type: PieceType.SOLDIER,
        team: TeamType.RED,
    },
    {
        image: soldier,
        position: {
            x: 8,
            y: 3,
        },
        type: PieceType.SOLDIER,
        team: TeamType.RED,
    },
];
