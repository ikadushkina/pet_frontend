import Tool from "./Tool";

export default class Brush extends Tool {
  constructor (canvas) {
    super(canvas);
    this.listen();
  }

  listen () {
    this.canvas.onmouseup = this.mouseUpHandle.bind(this);
    this.canvas.onmousedown = this.mouseDownHandle.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandle.bind(this);
  }

  mouseUpHandle () {
    this.mouseDown = false;
  }

  mouseDownHandle (e) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
  }

  mouseMoveHandle (e) {
    if (this.mouseDown) this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
  }

  draw (x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
