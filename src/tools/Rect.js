import Tool from "./Tool";

export default class Rect extends Tool {
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
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandle (e) {
    if (this.mouseDown) {
      const currentX = e.pageX - e.target.offsetLeft;
      const currentY = e.pageY - e.target.offsetTop;
      const width = currentX - this.startX;
      const height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw (x, y, w, h) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.rect(x, y, w, h);
      this.ctx.fill();
      this.ctx.stroke();
    };
  }
}
