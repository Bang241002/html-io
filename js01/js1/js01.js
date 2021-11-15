var today = new date();
var hournow = today.getHours();
var greeting;
if (hournow > 10){
    greeting = 'good evening';
}
else if (hournow >12){
    greeting = 'good afternoon';
}
else if  (hournow > 0){
    greeting = 'good morning';
}
else {
    greeting = 'welcome';
}
document.write('<h3>' +greeting+ '</h3>');