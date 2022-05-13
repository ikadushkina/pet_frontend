export default class Tool {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.destroyEvent();
  }

  set fillColor (color) {
    this.ctx.fillStyle = color;
  }

  set strokeColor (color) {
    this.ctx.strokeStyle = color;
  }

  set lineWidth (width) {
    this.ctx.lineWidth = width;
  }

  clearRect () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  destroyEvent () {
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
  }
};
