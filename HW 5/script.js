//storyline
function getAnswer(){
    var currentText =
        document.getElementById("txtName").value; 
    //section 1 answer A
    if (currentText == "A") {
        document.getElementById("story").innerHTML = "While running you run into a dead bear. This bear didn't appear weak. It was large, with sharp claws. What could've took it down? You don't have time to think about it as you get hit to the ground. Your vision is blurry, but all you can see is a tall and lanky figure. That is the last thing you ever see.";
        document.getElementById("image").src = "images/gameOver.jpg";
    } 
    //section 1 answer B
    else if (currentText == "B") {
        document.getElementById("story").innerHTML = "You continue forward. The sound behind you continues getting louder. It doesn't sound like any large predetor you've heard before. Maybe it's the reason behind the disappearences. You soon run into an old house. The lights are on outside so you make your way to the door. You knock but nobody answers. Do you go inside? 'Yes' or 'No'";
    } else if (currentText == "Yes") {
        document.getElementById("story").innerHTML = "The house is empty. So silent you could hear a pin drop. There is a couch and a fire place. You enter the kitchen to see if there is any food, as you haven't eatten in hours. While searching you notice a small cat waiting outside the window on your left. Do you 'Open' the window or 'Leave It' closed";
    }  else if (currentText == "No") {
        document.getElementById("story").innerHTML = "You wait outside. At least there is some overhang on the portch. Keeps you from getting super wet from the rain. However, the sound keeps getting louder. Then you see it. It's tall and skinny. Kind of cat like in the face. However, that's all you see before it charges at you and knocks you to the ground. The mystery remains unsolved.";
        document.getElementById("image").src = "images/gameOver.jpg";
    }
    //section 2 answer Yes
    else if (currentText == "Open") {
        document.getElementById("story").innerHTML = "You open the window and let the cat inside. It's small, grey, thin, and has a white diamond shaped spot on its back. You pet it for a second then take it back to the living room. You set the cat down on the couch; however, as soon as you let go it runs away to another dark room. You don't think about it to much. You then see an old tv with a shelf of VHS tapes next to it. Should you 'Watch' a movie or 'Go To Sleep'.";
    } else if (currentText == "Leave It") {
        document.getElementById("story").innerHTML = "You ignore the cat. Something feels off about it, but you can't put your finger on it. You go back into the living room and find a couch, old tv, and a shelf full of VHS tapes. Should you 'Watch' a film or 'Go To Sleep'.";
    }
    //section 3 answer Open
    else if(currentText == "Watch") {
        document.getElementById("story").innerHTML = "The films on the shelf all seem to be named after tall tales. However, they look worn down and seem to have some dark red stains on the covers. Two stick out though. 'Red Riding Hood' and 'Tailypo'. Which do you watch?";
    } else if(currentText == "Go To Sleep") {
        document.getElementById("story").innerHTML = "You fall asleep on the couch. There is some warmth coming from the fireplace off to the side. As you doze off you see a strange figure. Tall, skinny, and cat like. It stands over you with it's claws ready to slice you in half. This is when you realize there is no escape.";
        document.getElementById("image").src = "images/gameOver.jpg";
    } else if (currentText == "Red Riding Hood") {
        document.getElementById("story").innerHTML = "This is where our story ends for now. This is a concept I've been working on for a while now. I like being able to rework the framework of the story to see where there might be any issues. It also allows me to stretch what it means to tell this story. I think I've finally gotten the introduction in a place I want it. My only question now is do I like it as a game or a film? I'll keep working on this tale to see.";
    } else if (currentText == "Tailypo") {
        document.getElementById("story").innerHTML = "This is where our story ends for now. This is a concept I've been working on for a while now. I like being able to rework the framework of the story to see where there might be any issues. It also allows me to stretch what it means to tell this story. I think I've finally gotten the introduction in a place I want it. My only question now is do I like it as a game or a film? I'll keep working on this tale to see.";
    }

}

//start over loop
function startOverLoop(){
    shouldWeContinue = false;

    do{
        document.getElementById("story").innerHTML = "You get out of your car and begin to walk through the forest. As you walk the weather gets worse and worse. Rain. Thunder. You need to find cover. However, you're far away from your car. You hear a strange noise. It sounds like a large animal. Do you...<br>'A'. run back to your car? <br>'B'.run through the forest in hopes of finding shelter?";
        document.getElementById("image").src = "images/conceptCollage.jpg";
    } while (shouldWeContinue);
}