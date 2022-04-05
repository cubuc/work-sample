import React, { useEffect, useRef } from "react";

const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const yAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
const lines = [a9i9, a8i8]
*/
const Board = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    const cellSize = 60;
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
                console.log(xAxis[i]);
            }
        }
    };

    const drawDiagonals = () => {
        if (contextRef.current) {
            drawLine([3 * cellSize + offset, offset, 5 * cellSize + offset, 2 * cellSize + offset]);
            drawLine([5 * cellSize + offset, offset, 3 * cellSize + offset, 2 * cellSize + offset]);

            drawLine([
                3 * cellSize + offset,
                7 * cellSize + offset,
                5 * cellSize + offset,
                9 * cellSize + offset,
            ]);
            drawLine([
                5 * cellSize + offset,
                7 * cellSize + offset,
                3 * cellSize + offset,
                9 * cellSize + offset,
            ]);
        }
    };

    const drawLine = (fromTo: number[]) => {
        if (contextRef.current) {
            const ctx = contextRef.current;
            ctx.beginPath();
            ctx.moveTo(fromTo[0], fromTo[1]);
            ctx.lineTo(fromTo[2], fromTo[3]);
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

    return (
        <div>
            <canvas id="canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
        </div>
    );
};

export default Board;
