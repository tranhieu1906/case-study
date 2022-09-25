class Bar {
  x;
  y;
  width;
  height;
  canvas;
  ctx;
  speed;
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.speed = 20;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    var a = this.x;
    var speed = this.speed;
    window.addEventListener("keydown", function moveSelection(evt) {
      // clearInterval(myInterval);
      switch (evt.key) {
        case "ArrowRight":
          if (a < 400) {
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .clearRect(a, 400, 100, 10);
            document.getElementById("gameCanvas").getContext("2d").fillStyle =
              this.color;
            a += speed;
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .fillRect(a, 400, 100, 10);
          }
          break;
        case "ArrowLeft":
          if (a > 0) {
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .clearRect(a, 400, 100, 10);
            document.getElementById("gameCanvas").getContext("2d").fillStyle =
              this.color;
            a -= speed;
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .fillRect(a, 400, 100, 10);
          }
          break;
      }
    });
  }
}
