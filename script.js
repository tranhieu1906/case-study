let moveX = 20;
let speed = 20;
let bx = 250;
let by = 250;
let xv, yv;
let target;
// load canvas
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");
// vẽ background
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
//vẽ quả bóng
// function Circle(x, y, radius) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
// }
function createCircle() {
  // let circle = new Circle(250, 250, 15);
}
// cho bong di chuyen

// random toc do ball
xv = Math.floor(Math.random() * 76 + 25) / 30;
yv = Math.floor(Math.random() * 76 + 25) / 30;

// const myInterval = setInterval(update, 100);
function update() {
  bx += xv;
  by += yv;
  // trai
  if (bx - speed / 2 < 0 && xv < 0) {
    xv = -xv;
  }
  //phai
  if (bx + speed / 2 > canvas.width && xv > 0) {
    xv = -xv;
  }
  // tren
  if (by - speed / 2 < 0 && yv < 0) {
    yv = -yv;
  }
  //duoi
  if (by + speed / 2 > canvas.height && yv > 0) {
    yv = -yv;
    clearInterval(myInterval);
    // alert("ban da thua")
  }
  // khi va cham ball vs bar
  if (395 <= by + speed / 2 ){
    yv = -yv;
  }
  console.log(by + speed)
  console.log(moveX)
  context.fillStyle = "black";
  context.beginPath();
  context.arc(bx, by, 15, 0, 2 * Math.PI);
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
  if (moveX < 400) {
    context.clearRect(moveX, 400, 100, 10);
    context.fillStyle = "blue";
    moveX += speed;
    context.fillRect(moveX, 400, 100, 10);
  }
}
function keyleft() {
  if (moveX > 0) {
    context.clearRect(moveX, 400, 100, 10);
    context.fillStyle = "blue";
    moveX -= speed;
    context.fillRect(moveX, 400, 100, 10);
  }
}

function doReady() {
  window.addEventListener("keydown", moveSelection);
  createRectangle();
  createCircle();
  update();
}
