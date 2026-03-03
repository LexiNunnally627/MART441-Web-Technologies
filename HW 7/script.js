var imageTags = ["puppy1", "puppy2", "puppy3", "puppy4", "puppy5", "puppy6", "puppy7", "puppy8", "puppy9", "puppy10", "puppy11", "puppy12"];
var blankImagePath = "images/cardback.jpg";
var player = {"firstname": "", "lastname": "", "age":0, "score":0};
var actualImages = new Array();
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
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
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
    }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    }
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score ++;
        setTimeout(imagesDisappear, 1000);
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score ++;
        allFound ++;
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "page3.html";
        }
    }
}

function imagesDisappear()
{
    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function gatherInfo()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "page2.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" + "Age: " + player.age + "<br>" + "Score: " + player.score;
    if(document.getElementById("endInfo") != null)
    {
        document.getElementById("endInfo").innerHTML = str;
    }
}

