
let moveX = 20;
let speed = 20;
let bx = 250;
let by = 250;
let xv, yv;

// load canvas
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");
// vẽ background
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
//vẽ quả bóng
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function createCircle() {
  let circle = new Circle(250, 250, 15);
  context.fillStyle = "black";
  context.beginPath();
  context.arc(bx, by, circle.radius, 0, 2 * Math.PI);
  context.fill();
}

// vẽ thanh ngang
function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
function createRectangle() {
  let circle = new Rectangle(moveX, 400, 100, 10);
  context.fillStyle = "blue";
  context.fillRect(circle.x, circle.y, circle.width, circle.height);
}

// di chuyen thanh bar

function moveSelection(evt) {
  switch (evt.key) {
    case "ArrowLeft":
      keyleft();
      break;
    case "ArrowRight":
        keyright();
      break;
  }
}
function keyright() {
  if (moveX < 400){
      context.clearRect(moveX, 400, 100, 10);
      context.fillStyle = "blue";
      moveX += speed;
      context.fillRect(moveX, 400, 100, 10);
  }
}
function keyleft() {
    if (moveX > 0){
        context.clearRect(moveX, 400, 100, 10);
        context.fillStyle = "blue";
        moveX -= speed;
        context.fillRect(moveX, 400, 100, 10);
    }

}
// cho bong di chuyen

// function update() {
//     xv = Math.floor(Math.random() * 76 + 25) / 30;
//     yv = Math.floor(Math.random() * 76 + 25) / 30;
//     bx += xv;
//     by += yv;
//   }
function doReady() {
  window.addEventListener("keydown", moveSelection);
  createRectangle();
  createCircle();
}
