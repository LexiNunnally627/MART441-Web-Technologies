var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2, square3, square4, square5, square6;
var direction;
var questions;
var obstacleArray = [];
var collectArray = [];
var lives = 3;

$(document).ready(function(){
    setup();
    $(document).keydown(function(event){
        getKey(event);
    });
});

class Square{
    constructor(xCoord, yCoord, objectWidth, objectHeight, color){
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectWidth = objectWidth;
        this.objectHeight = objectHeight;
        this.color = color;
    }

    get x(){ return this.xCoord; }
    set x(value){ this.xCoord = value; }

    get y(){ return this.yCoord; }
    set y(value){ this.yCoord = value; }

    get width(){ return this.objectWidth; }
    get height(){ return this.objectHeight; }

    get squareColor(){ return this.color; }
}

function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    square1 = new Square(100, 100, 50, 50, "brown");
    square2 = new Square(200, 150, 50,50, "black");
    square3 = new Square(200, 200, 50, 50, "brown");
    square4 = new Square(50, 50, 10, 10, "blue");
    square5 = new Square(300, 300, 100, 100, "red");
    square6 = new Square(450, 450, 30, 30, "white");
    $.getJSON("data/data.json", function(data){
        for(var i = 0; i < data.squares.length; i++){
            obstacleArray.push(square2, square3, square4, square5, square6);
        };
    });
    $.getJSON("data/collect.json", function(data){
        for (var i = 0; i < data.collect.length; i++){
            collectArray.push(
                new Square(
                data.collect[i].x,
                data.collect[i].y,
                data.collect[i].width,
                data.collect[i].height,
                data.collect[i].color
        ));}
    });
    drawSquare();
}

function getKey(event){
    //WASD Movment
    var key = event.key.toLowerCase();
    if(key == "w"){
        moveUp();
    }
    if(key == "s"){
        moveDown();
    }
    if(key == "a"){
        moveLeft();
    }
    if(key == "d"){
        moveRight();
    }
    var collision = false;
    for(var i = 0; i < obstacleArray.length; i++){
        if (hasCollided(square1, obstacleArray[i])){
            collision = true;
            break;
        }
    }
    if (collision){
        if(direction == "left"){
            moveRight();
        }
        else if(direction == "right"){
            moveLeft();
        }
        else if(direction == "up"){
            moveDown();
        }
        else if(direction == "down"){
            moveUp();
        }
    }
    for (var i = 0; i < collectArray.length; i++){
    if (hasCollided(square1, collectArray[i])){
        collectArray.splice(i, 1);
        i--;
        lives++;
    }
}
    drawSquare();
}

function moveUp(){
    square1.y -= 5;
    direction = "up";
}
function moveDown(){
    square1.y += 5;
    direction = "down";
}
function moveLeft(){
    square1.x -= 5;
    direction = "left";
}
function moveRight(){
    square1.x += 5;
    direction = "right";
}

function drawSquare(){
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = square1.squareColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.squareColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    ctx.fillStyle = square3.squareColor;
    ctx.fillRect(square3.x, square3.y, square3.width, square3.height);
    ctx.fillStyle = square4.squareColor;
    ctx.fillRect(square4.x, square4.y, square4.width, square4.height);
    ctx.fillStyle = square5.squareColor;
    ctx.fillRect(square5.x, square5.y, square5.width, square5.height);
    ctx.fillStyle = square6.squareColor;
    ctx.fillRect(square6.x, square6.y, square6.width, square6.height);
    for(var i = 0; i < obstacleArray.length; i++){
        ctx.fillStyle = obstacleArray[i].squareColor;
        ctx.fillRect(obstacleArray[i].x, obstacleArray[i].y, obstacleArray[i].width, obstacleArray[i].height);
    }
    ctx.font = "25px Times New Roman";
    ctx.fillText("Lives: " + lives, 10, 50);

    for (var i = 0; i < collectArray.length; i++){
    ctx.fillStyle = collectArray[i].squareColor;
    ctx.fillRect(
        collectArray[i].x,
        collectArray[i].y,
        collectArray[i].width,
        collectArray[i].height
    );
}
}

function hasCollided(square1, obstacle){
    return !(
        ((square1.y + square1.height) < (obstacle.y)) ||
        (square1.y > (obstacle.y + obstacle.height)) ||
        ((square1.x + square1.width) < obstacle.x) ||
        (square1.x > (obstacle.x + obstacle.width))
    );
}