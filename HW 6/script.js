var imageTags = ["puppy1", "puppy2", "puppy3", "puppy4", "puppy5", "puppy6", "puppy7", "puppy8", "puppy9", "puppy10", "puppy11", "puppy12"];
var blankImagePath = "images/cardback.jpg";
var actualImages = new Array();
function printBlank()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
}


function createRandomImageArray()
{
    var actualImagePath = ["images/puppy1.jpg", "images/puppy2.jpg", "images/puppy3.jpg", "images/puppy4.jpg", "images/puppy5.jpg", "images/puppy6.jpg"];
    var count = [0,0,0,0,0,0];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}