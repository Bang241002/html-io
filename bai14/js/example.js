var list = document.getElementsByTagName('ul')[0];

var newItemlast= document.createElement('li');
var newTextlast = document.createTextNode('cream');
newItemlast.appendChild(newTextlast);
list.appendChild(newItemlast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

var i ;
for (i = 0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;

