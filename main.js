let ball = new Ball(250, 250, 15, "black");
let bar = new Bar (0,400,100,10,"blue");
bar.draw()
bar.move()
let myInterval = setInterval(function () {
    bar.draw();
    ball.move(), 
    ball.draw(),
    bar.draw();
    ball.collision(bar)
}, 30);

