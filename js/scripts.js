/////////Business Logic//////////
var player1 = new Player();
var player2 = new Player();

var randomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

var winCon  = function() {if(player1.totalScore >=100){
    alert("you fuckin wonnnnnnn!");
  } else if (player2.totalScore >=100){
    alert("you won!");
  }
}

function Player(turnScore, totalScore, roll) {
  this.turnScore = 0;
  this.totalScore = 0;
  this.roll = 0;
}


///////////check1//////////
Player.prototype.rollone = function(randomNumber) {
  if (randomNumber === 1) {
    this.turnScore = 0;
    alert("You suck! Pass the damn dice.");
  } else {
    this.turnScore += this.roll
    console.log(this.turnScore);
  }
}

//////// hold /////////
Player.prototype.hold = function (turnScore) {
  this.totalScore += this.turnScore;
  console.log(this.totalScore);
  this.turnScore = 0;
}


///////// user interface ////////




$(function() {

  var turnScore1  = 0;
  var total1 = 0
  var turnScore2  = 0;
  var total2 = 0

//////////// player 1 ///////////////


  $("#rollBtn1").click(function(event) {
    event.preventDefault();

    player1.roll = parseInt(randomNumber());
    player1.rollone(player1.roll);

    $("#rollOut1").text("Current Roll: " + parseInt(player1.roll));
    $("#turnOut1").text("Turn Score: " + parseInt(player1.turnScore));
  });



  $("#holdBtn1").click(function(event) {
    event.preventDefault();
    player1.hold(player1.turnScore);

    $("#totalScore1").text("Player one score: " + parseInt(player1.totalScore));
    winCon();
  });


///////////// Player 2 //////////////

  $("#rollBtn2").click(function(event) {
    event.preventDefault();

    player2.roll = parseInt(randomNumber());
    player2.rollone(player2.roll);

    $("#rollOut2").text("Current Roll: " + parseInt(player2.roll));
    $("#turnOut2").text("Turn Score: " + parseInt(player2.turnScore));
  });

  $("#holdBtn2").click(function(event) {
    event.preventDefault();
    player2.hold(player2.turnScore);

    $("#totalScore2").text("Player two score: " + parseInt(player2.totalScore));
    winCon();
  });
});
