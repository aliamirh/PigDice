/////////Business Logic//////////
var player1 = new Player();
var player2 = new Player();

var randomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
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
// var totalScore = ;



$(function() {

  var turnScore  = 0;
  var total1 = 0

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
  });
});
