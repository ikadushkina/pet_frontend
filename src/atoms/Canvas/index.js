import React, { useEffect, useRef, useState } from "react";
import styles from "./Canvas.module.scss";
import { observer } from "mobx-react-lite";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import cs from "classnames";

export const Canvas = observer(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(800);
  const activeTool = toolState.getActiveTool();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
  }, []);

  useEffect(() => {
    if (canvasContainer.current) {
      setWidth(canvasContainer.current.clientWidth - 100);
      setHeight(canvasContainer.current.clientHeight - 100);
    }
  }, [canvasContainer.current]);

  return (
    <div className={styles.canvas} ref={canvasContainer}>
      <canvas
        className={cs(
          { [styles.pencil]: activeTool === "brush" },
          { [styles.eraser]: activeTool === "eraser" })
                }
        ref={canvasRef}
        width={width}
        height={height}
            />
    </div>
  );
});
