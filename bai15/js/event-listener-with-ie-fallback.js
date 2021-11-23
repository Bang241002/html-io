var elUsernaem = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
    if (elUsernaem.value.length < minLength){
        elMsg.innerHTML = 'Username must be ' + minLength + 'characters or more';
    }
    else {
        elMsg.innerHTML = '';
    }
}

if (elUsernaem.addEventListener) {
    elUsernaem.addEventListener('blur', function () {
        checkUsername(5);
    }, false);
}
    else{
        elUsernaem.attachEvent('onblur', function () {
            checkUsername(5)
        });
    }


