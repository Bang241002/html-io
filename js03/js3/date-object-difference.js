var today = new date();

var year = today.getFullYear();

var est = new date('Apr 16, 1996 15:45:55');

var difference = today.getTime() - est.getTime();

difference = (difference / 31556900000);

var elmsg = document.getElementById('message');

elmsg.textContent = math.floor(difference) +'years of online travel advice';