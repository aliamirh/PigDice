/////////Business Logic//////////
var player1 = ""
var player2 = ""

var randomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(name, turnScore, totalScore, turn) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.roll = 0;
  this.turn = turn;
}


///////////check1//////////
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.turnScore = 0;
    alert("You suck! Pass the damn dice.");
  } else {
    this.turnScore += this.roll
  }
}

//////// hold /////////
Player.prototype.hold = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}


///////// user interface ////////
// var totalScore = ;

var turnScore  = 0;
var player1 = new Player()
var player2 = new Player()

$(function() {
  $("#rollBtn").click(function(event) {
    event.preventDefault();
    var points = parseInt(randomNumber());
    turnScore += points;
    $("#rollOut").text("Current Roll: " + points);
    $("#turnOut").text("Turn Score: " + turnScore);
    player1.rollone();

  })
})
