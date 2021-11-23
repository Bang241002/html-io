var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.getElementById('a');
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('new list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updatCount(){
    listItems = elList.getElementsByTagName('li');
    counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, 'false');
elList.addEventListener('DOMNodeInserted', updatCount, 'false');