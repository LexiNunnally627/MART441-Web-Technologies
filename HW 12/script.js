var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Variable for Square 1
var x = 50;
var y = 50;
var speedX = 2;
var speedY = 1;

//Variable for Square 2
var x2 = 200;
var y2 = 150;

var size = 50;

setInterval(update, 1000/60);

//Square 1 movement, Square 2 spawn, Collision
function update(){
    x += speedX;
    y += speedY;

    if (x + 50 > canvas.width || x < 0) speedX *= -1;
    if (y + 50 > canvas.height || y < 0) speedY *= -1;
    
    drawSquare1(x, y, "brown");
    drawSquare2(x2, y2, "black");

    if (hasCollided(x, y, size, x2, y2, size)){
        canvas.style.backgroundColor = "red";
    }
    else{
        canvas.style.backgroundColor="blanchedalmond";
    }
}

//WASD Movement
$(document).ready (function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event){
    //WASD Movment
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w"){
        moveUp();
    }
    if(actualLetter == "s"){
        moveDown();
    }
    if(actualLetter == "a"){
        moveLeft();
    }
    if(actualLetter == "d"){
        moveRight();
    }
}

function moveUp(){
    y2 -= 5;
}
function moveDown(){
    y2 += 5;
}
function moveLeft(){
    x2 -= 5;
}
function moveRight(){
    x2 += 5;
}

//collision
function hasCollided(){
    return (
        x < x2 + size &&
        x + size > x2 &&
        y < y2 + size &&
        y + size > y2
    )
}

//Squares Drawn
function drawSquare2(x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 50, 50);
}
function drawSquare1(x, y, color){
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 50, 50);
}


