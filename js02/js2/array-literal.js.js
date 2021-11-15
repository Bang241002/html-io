var title;
var message;

title = "molly's special offers";
message = '<a href="sale.html"> 25% off!</a>';

var eltitle = document.getElementById('title');

eltitle.textContent = title;

var elnote = document.getElementById('note');

elnote.innerHTML = message;