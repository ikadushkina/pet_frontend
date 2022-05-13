import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null;
  activeTool = "";
  constructor () {
    makeAutoObservable(this);
  }

  getActiveTool () {
    return this.activeTool;
  }

  setTool (tool, active, width) {
    this.tool = tool;
    this.activeTool = active;
    this.tool.lineWidth = width || 1;
  }

  setStrokeColor (color) {
    this.tool.strokeColor = color;
  }

  setFillColor (color) {
    this.tool.fillColor = color;
    console.log("this.tool.fillColor", this.tool.fillColor);
  }

  clearCanvas () {
    this.tool.clearRect();
  }
}

export default new ToolState();
