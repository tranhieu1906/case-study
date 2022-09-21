var moveX = 20

// load canvas
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");
// vẽ background
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
//vẽ quả bóng
context.fillStyle = "black"
context.beginPath()
context.arc(200, 200, 20, 0, 2 * Math.PI);
context.fill()
// vẽ thanh ngang
context.fillStyle = "blue"
context.fillRect(moveX , 400 , 100,10)
// di chuyen thanh bar

function moveSelection(evt){
    switch (evt.key) {
        case "ArrowLeft":
            keyless();
            break;
        case "ArrowRight":
            keyring();
            break;
    }
}
function keyring (){
    context.clearRect(moveX, 400 , 100,10)
    moveX += 10
    context.fillRect(moveX , 400 , 100,10)
}
function keyless (){
    context.clearRect(moveX, 400 , 100,10)
    moveX -= 10
    context.fillRect(moveX , 400 , 100,10)
}

console.log(moveX)


function doReady(){
    window.addEventListener("keydown", moveSelection);
}



