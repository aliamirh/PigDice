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
    alert("You fucking suck at this game!");
  } else {
    this.turnScore += this.roll
  }
}

//////// hold /////////
Player.prototype.hold = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}


//
// var totalScore = ;

var turnScore  = 0;

$(function() {
  $("#rollBtn").click(function(event) {
      event.preventDefault();

      var points = parseInt(randomNumber());
      console.log("points: "+points);

      turnScore += points;
      console.log("turnScore: " + turnScore);
      $("turnOut").text(points);

  })
})
