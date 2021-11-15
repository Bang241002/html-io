//method 1
var price = 5;
var quantity = 14;
var total =price * quantity;

/*metthod 2
var price , quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/* metthod 3
var price = 5, quantity = 14;
var total = price * quantity;
 */

// write the tital into the element with id of sost
var el = document.getElementById('cost');
el.textContent = '$' +total;