var score = 75;
var msg;

if (score >= 50){
    msg = 'Congratulations!';
    msg +=' Proceed to the text round. ';
}

var el = document.getElementById('answer');
el.textContent = msg;