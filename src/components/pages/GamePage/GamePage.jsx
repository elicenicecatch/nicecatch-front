import { useEffect, useState } from 'react';
import './GamePage.scss';

const Game = () => {
    const [canvas, setCanvas] = useState();
    const [ctx, setCtx] = useState();
    const [isPainting, setIsPainting] = useState(false);
    const [range, setRange] = useState(5);
    const [color, setColor] = useState('#000000');
    const colorList = [
        '#ff3838',
        '#ffb8b8',
        '#ff9f1a',
        '#fff200',
        '#32ff7e',
        '#7efff5',
        '#18dcff',
        '#7d5fff',
        '#c56cf0',
        '#4b4b4b',
    ];

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        canvas.width = 800;
        canvas.height = 800;
        setCanvas(canvas);

        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 5;
        setCtx(ctx);
    }, [canvas]);

    const onMove = (e) => {
        const { nativeEvent: event } = e;
        if (isPainting) {
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            return;
        }

        ctx.moveTo(event.offsetX, event.offsetY);
    };

    const startPainting = () => {
        setIsPainting(true);
    };

    const cancelPainting = () => {
        setIsPainting(false);
        ctx.beginPath();
    };

    const onLineWidthChange = (e) => {
        setRange(e.target.value);
        ctx.lineWidth = e.target.value;
    };

    const onColorChange = (e) => {
        const { nativeEvent: event } = e;
        setColor(e.target.value);
        ctx.strokeStyle = event.target.value;
        ctx.fillStyle = event.target.value;
    };

    const onColorClick = (e) => {
        const { nativeEvent: event } = e;
        const colorValue = event.target.dataset.color;
        ctx.strokeStyle = colorValue;
        ctx.fillStyle = event.target.dataset.color;
        setColor(colorValue);
    };

    return (
        <>
            <canvas
                onMouseMove={(e) => onMove(e)}
                onMouseDown={startPainting}
                onMouseUp={cancelPainting}
                onMouseLeave={cancelPainting}
            ></canvas>
            <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={range}
                onChange={onLineWidthChange}
            />
            {colorList.map((v, i) => (
                <span
                    className="color_picker"
                    key={i}
                    style={{ backgroundColor: v }}
                    data-color={v}
                    onClick={onColorClick}
                ></span>
            ))}
            <input type="color" value={color} onChange={onColorChange} />
        </>
    );
};
export default Game;
