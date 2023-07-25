import { useEffect, useState } from 'react';
import './GamePage.scss';
import { FaPaintBrush } from 'react-icons/fa';
import { RiPaintFill } from 'react-icons/ri';

const Game = () => {
    const [canvas, setCanvas] = useState();
    const [ctx, setCtx] = useState();
    const [isPainting, setIsPainting] = useState(false);
    const [isFilling, setIsFilling] = useState(false);
    const [range, setRange] = useState(5);
    const [color, setColor] = useState('#000000');

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 600;

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
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
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
        // 채우기 모드일때에는 그려지지 않도록 방지
        if (!isFilling) {
            setIsPainting(true);
        }
    };

    const cancelPainting = () => {
        ctx.beginPath();
        setIsPainting(false);
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

    const onModeClick = (type) => {
        if (type === 'fill') {
            // 채우기 모드
            setIsFilling(true);
        } else {
            // 그리기 모드
            setIsFilling(false);
            ctx.strokeStyle = color;
        }
    };

    const onCanvasClick = () => {
        if (isFilling) {
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }
    };

    const onDestroyClick = () => {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    };

    const onEraserClick = () => {
        ctx.strokeStyle = 'white';
        setIsFilling(false);
    };

    return (
        <>
            <canvas
                onMouseMove={(e) => onMove(e)}
                onMouseDown={startPainting}
                onMouseUp={cancelPainting}
                onMouseLeave={cancelPainting}
                onClick={onCanvasClick}
            />
            <div>
                <input
                    type="range"
                    min={1}
                    max={10}
                    step={0.5}
                    value={range}
                    onChange={onLineWidthChange}
                />
                <ul className="color_picker">
                    {colorList.map((v, i) => (
                        <li
                            key={i}
                            style={{ backgroundColor: v }}
                            data-color={v}
                            onClick={onColorClick}
                        ></li>
                    ))}
                </ul>
                <input type="color" value={color} onChange={onColorChange} />
            </div>
            <button onClick={() => onModeClick('draw')}>
                <FaPaintBrush />
            </button>
            <button onClick={() => onModeClick('fill')}>
                <RiPaintFill />
            </button>
            <button onClick={onDestroyClick}>초기화</button>
            <button onClick={onEraserClick}>지우개</button>
        </>
    );
};
export default Game;
