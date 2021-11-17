var hotel = {
    name : 'park',
    rooms : 120,
    booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elname = document.getElementById('hotelName');
elname.textContent = hotel.name;

var elpool = document.getElementById('pool');
elpool.className = hotel.pool;

var elgym = document.getElementById('gym');
elgym.className = hotel.gym