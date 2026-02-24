function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "A"){
        document.getElementById("story").innerHTML = "While running you run into a dead bear. This bear didn't appear weak. It was large, with sharp claws. What could've took it down? You don't have time to think about it as you get hit to the ground. Your vision is blurry, but all you can see is a tall and lanky figure. That is the last thing you ever see.";
        document.getElementById("choice1").innerHTML = "Start Over";
        document.getElementById("choice2").innerHTML = "Leave";
    } else if (choice == 1 && answer1 == "Start Over"){
        document.getElementById("story").innerHTML = "You get out of your car and begin to walk through the forest. As you walk the weather gets worse and worse. Rain. Thunder. You need to find cover. However, you're far away from your car. You hear a strange noise. It sounds like a large animal. Do you...A. run back to your car? Or B.run through the forest in hopes of finding shelter?";
        document.getElementById("choice1").innerHTML = "A";
        document.getElementById("choice2").innerHTML = "B";
    } else if (choice == 2 && answer2 == "Leave"){
        document.getElementById("story").innerHTML = "Better Luck Next Time.";
    } else if (choice == 2 && answer2 == "B"){
        document.getElementById("story").innerHTML = "You continue forward. The sound behind you continues getting louder. It doesn't sound like any large predetor you've heard before. Maybe it's the reason behind the disappearences. You soon run into an old house. The lights are on outside so you make your way to the door. You knock but nobody answers. Do you go inside?";
        document.getElementById("choice1").innerHTML = "Wait Outside";
        document.getElementById("choice2").innerHTML = "Go Inside";
    } else if (choice == 1 && answer1 == "Wait Outside"){
        document.getElementById("story").innerHTML = "You wait outside. At least there is some overhang on the portch. Keeps you from getting super wet from the rain. However, the sound keeps getting louder. Then you see it. It's tall and skinny. Kind of cat like in the face. However, that's all you see before it charges at you and knocks you to the ground. The mystery remains unsolved.";
        document.getElementById("choice1").innerHTML = "Start Over";
        document.getElementById("choice2").innerHTML = "Leave";
    } else if (choice == 2 && answer2 == "Go Inside"){
        document.getElementById("story").innerHTML = "The house is empty. So silent you could hear a pin drop. There is a couch and a fire place. You enter the kitchen to see if there is any food, as you haven't eatten in hours. While searching you notice a small cat waiting outside the window on your left. Do you...?";
        document.getElementById("choice1").innerHTML = "Let the cat in";
        document.getElementById("choice2").innerHTML = "Leave it outside. You've got a bad feeling about it";
    } else if (choice == 1 && answer1 == "Let the cat in"){
        document.getElementById("story").innerHTML = "This is where our story ends for now. This is a concept I've been working on for a while now. I like being able to rework the framework of the story to see where there might be any issues. It also allows me to stretch what it means to tell this story. I think I've finally gotten the introduction in a place I want it. My only question now is do I like it as a game or a film? I'll keep working on this tale to see.";
        document.getElementById("choice1").innerHTML = "Start Over";
        document.getElementById("choice2").innerHTML = "Leave";
    } else if (choice == 2 && answer2 == "Leave it outside. You've got a bad feeling about it") {
        document.getElementById("story").innerHTML = "This is where our story ends for now. This is a concept I've been working on for a while now. I like being able to rework the framework of the story to see where there might be any issues. It also allows me to stretch what it means to tell this story. I think I've finally gotten the introduction in a place I want it. My only question now is do I like it as a game or a film? I'll keep working on this tale to see.";
        document.getElementById("choice1").innerHTML = "Start Over";
        document.getElementById("choice2").innerHTML = "Leave";
    }
}