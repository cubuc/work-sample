import React, { useEffect, useRef } from "react";

const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const yAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface BoardLinesProps {
    cellSize: number;
}

const BoardLines = (props: BoardLinesProps) => {
    const { cellSize } = props;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    const offset = cellSize / 2;
    const canvasWidth = xAxis.length * cellSize;
    const canvasHeight = yAxis.length * cellSize;

    const drawHorizontalLines = () => {
        if (contextRef.current) {
            for (let num of yAxis) {
                const y = num * cellSize + offset;
                drawLine([offset, y, canvasWidth - offset, y]);
            }
        }
    };

    const drawVerticalLines = () => {
        if (contextRef.current) {
            for (let i = 0; i < xAxis.length; i++) {
                if (i === 0) {
                    drawLine([offset, offset, offset, canvasHeight - offset]);
                } else if (i === xAxis.length - 1) {
                    drawLine([
                        canvasWidth - offset,
                        offset,
                        canvasWidth - offset,
                        canvasHeight - offset,
                    ]);
                } else {
                    const x = i * cellSize + offset;
                    drawLine([x, offset, x, 4 * cellSize + offset]);
                    drawLine([x, 5 * cellSize + offset, x, canvasHeight - offset]);
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
