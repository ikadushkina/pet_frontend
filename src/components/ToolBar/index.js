import React, { useId, useState } from "react";
import styles from "./ToolBar.module.scss";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import canvasState from "../../store/canvasState";
import { ReactComponent as Pencil } from "../../assets/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/delete_icon.svg";
import { ReactComponent as Eraser } from "../../assets/icons/eraser.svg";
import { ReactComponent as RectIcon } from "../../assets/icons/square-icon.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/circle-icon.svg";
import { PaletteIcon } from "../../atoms/Icons/PaletteIcon";
import cs from "classnames";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";

/*
todo:
 add width for line;
 nice to have custom color picker;
*/

export const ToolBar = () => {
  const [color, setColor] = useState("black");
  const [active, setActive] = useState();
  const colorPickerId = useId();

  const onBrushClick = () => {
    toolState.setTool(new Brush(canvasState.canvas), "brush");
    setActive(toolState.getActiveTool());
    toolState?.setStrokeColor(color);
  };

  const onEraserClick = () => {
    toolState.setTool(new Brush(canvasState.canvas), "eraser", 10);
    toolState.setStrokeColor("white");
    setActive(toolState.getActiveTool());
  };

  const onChangeColor = e => {
    toolState.setStrokeColor(e.target.value);
    setColor(e.target.value);
    if (["rectFill", "circleFill"].includes(active)) toolState.setFillColor(e.target.value);
  };

  const onTrashClick = () => {
    toolState.clearCanvas();
  };

  const onRectClick = () => {
    toolState.setTool(new Rect(canvasState.canvas), "rectFill");
    setActive(toolState.getActiveTool());
    toolState.setStrokeColor(color);
    toolState.setFillColor(color);
  };

  const onCircleClick = () => {
    toolState.setTool(new Circle(canvasState.canvas), "circleFill");
    setActive(toolState.getActiveTool());
    toolState.setStrokeColor(color);
    toolState.setFillColor(color);
  };

  const onRectFillClick = () => {
    toolState.setTool(new Rect(canvasState.canvas), "rect");
    setActive(toolState.getActiveTool());
    toolState.setStrokeColor(color);
    toolState.setFillColor("transparent");
  };

  const onCircleFillClick = () => {
    toolState.setTool(new Circle(canvasState.canvas), "circle");
    setActive(toolState.getActiveTool());
    toolState.setStrokeColor(color);
    toolState.setFillColor("transparent");
  };

  return (
    <div className={styles.tools}>
      <div onClick={onBrushClick} className={cs({ [styles.active]: active === "brush" })}> <Pencil /> </div>
      <div onClick={onEraserClick} className={cs({ [styles.active]: active === "eraser" })}> <Eraser /> </div>
      <div onClick={onTrashClick}> <TrashIcon /> </div>
      <div onClick={onRectClick} className={cs({ [styles.active]: active === "rectFill" })}> <div className={styles.rect}/> </div>
      <div onClick={onCircleClick} className={cs({ [styles.active]: active === "circleFill" })}> <div className={styles.circle}/> </div>
      <div onClick={onRectFillClick} className={cs({ [styles.active]: active === "rect" })}> <RectIcon /> </div>
      <div onClick={onCircleFillClick} className={cs({ [styles.active]: active === "circle" })}> <CircleIcon /> </div>
      <input type="color" onChange={onChangeColor} id={colorPickerId} />
      <label htmlFor={colorPickerId}> <PaletteIcon fill={color} /> </label>
    </div>
  );
};
