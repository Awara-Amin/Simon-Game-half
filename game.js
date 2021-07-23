// alert("i am working :)");
var buttonColors = ["red", "blue", "green", "yellow"];
// console.log(buttonColors);
var gamePattern = [];

var userClickedPattern = [];

var level = 0;

function nextSequence(){

  $(document).click(function(){
  $("h1").text("Level 0");
  });

  var nn = level++;
  $("h1").text("Level  "+ nn);

  $(document).keypress(function(event){
        alert('You pressed a key');
        console.log(event);
  });

  var randomNumberrondom = Math.random()*4;
  var randomNumber = Math.floor(randomNumberrondom);
  // console.log(randomNumber);
  // return randomNumber
  // var randomChosenColor = buttonColors.slice(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  // nextSequence()console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
  // console.log(gamePattern);

  // console.log(btns);
  // In an event, (this) refers to the element that received the event.
playSound(randomChosenColor);


  // $("#"+randomChosenColor).css('background', randomChosenColor);
  // $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  //
  // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  // audio.play();

  $(".btn").click(function(e){
    // console.log(e.target.id);
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
});
}

function playSound(name){
  console.log("this is bra is " + name);
  // animatePress(randomChosenColor);
  // var audio = new Audio("sounds/" + name + ".mp3");
  // audio.play();
  // $("#"+name).css('background', name);
  // $("#"+name).fadeOut(100).fadeIn(100);

  let btns = document.querySelectorAll('.btn');
  // console.log(btns);
  // In an event, (this) refers to the element that received the event.
  for (i of btns) {
    i.addEventListener('click', function(e){
      var name = e.target.id;
      playBoth(name);
      animatePress(name);
    });
}
}

function playBoth(anyparameter){
switch(anyparameter){
  case "red":
  var red = new Audio("sounds/red.mp3");
  red.play();
  $("#red").css('background', anyparameter);
  $("#red").fadeOut(100).fadeIn(100);
  break;

  case "blue":
  var blue = new Audio("sounds/blue.mp3");
  blue.play();
  $("#blue").css('background', name);
  $("#blue").fadeOut(100).fadeIn(100);
  break;

  case "green":
  var green = new Audio("sounds/green.mp3");
  green.play();
  $("#green").css('background', name);
  $("#green").fadeOut(100).fadeIn(100);
  break;

  case "yellow":
  var wrong = new Audio("sounds/yellow.mp3");
  wrong.play();
  $("#yellow").css('background', name);
  $("#yellow").fadeOut(100).fadeIn(100);
  break;

  default:
  console.log(anyparameter);
}
}

nextSequence();

function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");

  setTimeout(function(){
            $("."+currentColor).removeClass("pressed");
            //....and whatever else you need to do
    }, 100);
}

function checkAnswer(currentLevel){
  console.log("mate " + currentLevel);
  if(userClickedPattern[userClickedPattern.length-1]===gamePattern[gamePattern.length-1]){
    console.log("success")
  }
  else{
    console.log("wrong")
  }
}
