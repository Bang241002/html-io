(function () {


        var hotel = {
            name: 'park',
            roomRate: 240,
            discount: 15,
            offerPrice: function () {
                var offerRate = this.roomRate * ((100 - this.discount) / 100);
                return offerRate;
            }

        };

        var hotelName, roomRate, specialRate;

        hotelName = document.getElementById('hotelName');
        roomRate = document.getElementById('roomRate');
        specialRate = document.getElementById('specialRate');
    }
)