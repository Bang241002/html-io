var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var hughScore2 = 95;

var comparison = (score1 + score2) > (highScore1 + hughScore2);

var el = document.getElementById('answer');

el.textContent = 'new high score: ' + comparison;
