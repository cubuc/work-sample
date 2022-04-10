import React, { useEffect, useRef } from "react";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "./Constants";

interface BoardLinesProps {
    cellSize: number;
}

const BoardLines = (props: BoardLinesProps) => {
    const { cellSize } = props;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    const offset = cellSize / 2;
    const canvasWidth = HORIZONTAL_AXIS.length * cellSize;
    const canvasHeight = VERTICAL_AXIS.length * cellSize;

    const drawHorizontalLines = () => {
        if (contextRef.current) {
            for (let i = 0; i < VERTICAL_AXIS.length; i++) {
                const y = i * cellSize;
                drawLine([0, y, canvasWidth - cellSize, y], offset);
            }
        }
    };

    const drawVerticalLines = () => {
        if (contextRef.current) {
            for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
                if (i === 0) {
                    drawLine([0, 0, 0, canvasHeight - cellSize], offset);
                } else if (i === HORIZONTAL_AXIS.length - 1) {
                    drawLine(
                        [
                            canvasWidth - cellSize,
                            0,
                            canvasWidth - cellSize,
                            canvasHeight - cellSize,
                        ],
                        offset
                    );
                } else {
                    const x = i * cellSize;
                    drawLine([x, 0, x, 4 * cellSize], offset);
                    drawLine([x, 5 * cellSize, x, 9 * cellSize], offset);
                }
            }
        }
    };

    const drawDiagonals = () => {
        if (contextRef.current) {
            drawLine([3 * cellSize, 0, 5 * cellSize, 2 * cellSize], offset);
            drawLine([5 * cellSize, 0, 3 * cellSize, 2 * cellSize], offset);

            drawLine([3 * cellSize, 7 * cellSize, 5 * cellSize, 9 * cellSize], offset);
            drawLine([5 * cellSize, 7 * cellSize, 3 * cellSize, 9 * cellSize], offset);
        }
    };

    const drawLine = (fromTo: number[], offset: number = 0) => {
        if (contextRef.current) {
            const ctx = contextRef.current;
            ctx.beginPath();
            ctx.moveTo(fromTo[0] + offset, fromTo[1] + offset);
            ctx.lineTo(fromTo[2] + offset, fromTo[3] + offset);
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    };

    useEffect(() => {
        if (canvasRef.current) {
            contextRef.current = canvasRef.current.getContext("2d");

            drawHorizontalLines();
            drawVerticalLines();
            drawDiagonals();
        }
    }, []);

    return <canvas id="canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>;
};

export default BoardLines;
