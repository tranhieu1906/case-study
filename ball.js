class Ball {
  x;
  y;
  radius;
  color;
  canvas;
  ctx;
  speed;
  coordinatesX;
  coordinatesY;
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.speed = 30;
    this.coordinatesX = Math.floor(Math.random() * 76 + 25) / this.speed;
    this.coordinatesY = Math.floor(Math.random() * 76 + 25) / this.speed;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
  move() {
    this.x += this.coordinatesX;
    this.y += this.coordinatesY;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.x - this.speed / 2 < 0 && this.coordinatesX < 0) {
      this.coordinatesX = -this.coordinatesX;
    }
    //phai
    if (this.x + this.speed / 2 > this.canvas.width && this.coordinatesX > 0) {
      this.coordinatesX = -this.coordinatesX;
    }
    // tren
    if (this.y - this.speed / 2 < 0 && this.coordinatesY < 0) {
      this.coordinatesY = -this.coordinatesY;
    }
    //duoi
    if (this.y + this.speed / 2 > this.canvas.height && this.coordinatesY > 0) {
      this.coordinatesY = -this.coordinatesY;
      clearInterval(myInterval);
      // alert("ban da thua");
    }
  }
  collision(bar) {
    if (
      bar.y <= this.y + this.radius &&
      bar.x <= this.x &&  //0
      this.x <= bar.x + bar.width
    ) {
      this.coordinatesY = -this.coordinatesY;
    }
  }
}
