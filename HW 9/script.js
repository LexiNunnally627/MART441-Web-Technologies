var imageArray = ["images/puppy1.jpg", "images/puppy2.jpg", "images/puppy3.jpg", "images/puppy4.jpg", "images/puppy5.jpg", "images/puppy6.jpg"];
var imgIndex = 0;
var textArray = ["cute!", "adorable!", "precious!", "playful!", "silly!", "puppy!"];
var started = false;

$(document).ready(function(){
    $("button").click(function (){
        if (!started){
            startImageChanges();
            started = true;
        }
    })
})
function startImageChanges() {
    setInterval(function() {
        imgIndex = (imgIndex + 1) % imageArray.length;
        var containerWidth = 300 + Math.random() * 100;
        var containerHeight = containerWidth; 
        var randomTop = Math.random() * ($(window).height() - containerHeight);
        var randomLeft = Math.random() * ($(window).width() - containerWidth);
        $(".image-container").fadeOut(500, function() {
            $("#image").attr("src", imageArray[imgIndex]).css({
                width: containerWidth + "px"
            });
            $("#caption").text(textArray[imgIndex]);
            $("#square").css({
                width: containerWidth + "px",
                height: containerWidth + "px",
                borderColor: getRandomColor()
            });
            $(this).fadeIn(500).animate({
                top: randomTop,
                left: randomLeft
            }, 1000);
        });
    }, 3000); 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}