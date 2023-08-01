import { useEffect, useState } from 'react';
import './DrawPage.scss';
import { PiPaintBucketThin } from 'react-icons/pi';
import { PiPencilThin } from 'react-icons/pi';
import iconRevert from '../../../assets/images/icons/icon_revert.png';
import iconEraser from '../../../assets/images/icons/icon_eraser.png';

const Draw = () => {
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const [isPainting, setIsPainting] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [range, setRange] = useState(5);
  const [color, setColor] = useState('#000000');
  const [toggle, setToggle] = useState(true);

  const CANVAS_WIDTH = 686;
  const CANVAS_HEIGHT = 516;

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

    ctx?.moveTo(event.offsetX, event.offsetY);
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
    const { value, style } = e.target;
    console.log(value);
    setRange(value);
    style.background = `linear-gradient(to right, #333333 0%, #333333 ${
      value * 10
    }%, rgb(213, 212, 211) ${value * 10}%, rgb(213, 212, 211) 100%)`;
    ctx.lineWidth = value;
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

  const onToggle = () => {
    setToggle((curr) => !curr);
  };

  return (
    <div className="canvas_box">
      <canvas
        onMouseMove={(e) => onMove(e)}
        onMouseDown={startPainting}
        onMouseUp={cancelPainting}
        onMouseLeave={cancelPainting}
        onClick={onCanvasClick}
      />

      <div className={toggle ? 'cntroll_box' : 'cntroll_box none'}>
        <ul className="canvas_tool">
          <li className="division">
            <button onClick={onDestroyClick} title="초기화">
              <img src={iconRevert} />
            </button>
          </li>
          <li className="marright_10">
            <button
              className="tool_btn"
              onClick={() => onModeClick('draw')}
              title="펜"
            >
              <PiPencilThin />
            </button>
          </li>
          <li className="division">
            <div className="range_box">
              <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={range}
                onChange={onLineWidthChange}
              />
            </div>
          </li>
          <li className="division">
            <button
              className="tool_btn"
              onClick={() => onModeClick('fill')}
              title="채우기"
            >
              <PiPaintBucketThin />
            </button>
          </li>

          <li>
            <button onClick={onEraserClick} title="지우개">
              <img src={iconEraser} />
            </button>
          </li>
        </ul>
        <ul className="canvas_tool bottom">
          <li className="division">
            <input type="color" value={color} onChange={onColorChange} />
          </li>
          <li>
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
          </li>
        </ul>
      </div>
      <button
        onClick={onToggle}
        className={toggle ? 'toggle_btn' : 'toggle_btn none'}
      ></button>
    </div>
  );
};
export default Draw;
