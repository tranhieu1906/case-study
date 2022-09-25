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
    var coordinatesX = this.x;
    var speed = this.speed;
    window.addEventListener("keydown", function moveSelection(evt) {
      // clearInterval(myInterval);
      switch (evt.key) {
        case "ArrowRight":
          if (coordinatesX < 400) {
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .clearRect(coordinatesX, 400, 100, 10);
            document.getElementById("gameCanvas").getContext("2d").fillStyle =
              this.color;
            coordinatesX += speed;
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .fillRect(coordinatesX, 400, 100, 10);
          }
          break;
        case "ArrowLeft":
          if (coordinatesX > 0) {
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .clearRect(coordinatesX, 400, 100, 10);
            document.getElementById("gameCanvas").getContext("2d").fillStyle =
              this.color;
            coordinatesX -= speed;
            document
              .getElementById("gameCanvas")
              .getContext("2d")
              .fillRect(coordinatesX, 400, 100, 10);
          }
          break;
      }
    });
  }
}
