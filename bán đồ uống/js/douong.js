var danhsachdouong = [
    {
        "ma": "cafe",
        "ten": "Cafe",
        "size":[
            { "size": "s",
                "gia": "10000",
            },
            { "size": "m",
                "gia": "20000",
            },
            { "size": "xl",
                "gia": "30000",
            },
         ]
    },

    {
        "ma": "sinhtodau",
        "ten": "Sinh tố dâu",
        "size":[
            { "size": "s",
                "gia": "10000",
            },
            { "size": "m",
                "gia": "20000",
            },
            { "size": "xl",
                "gia": "30000",
            },
        ]
    },

    {
        "ma": "sinhtoxoai",
        "ten": "Sinh tố xoài",
        "size":[
            { "size": "S",
                "gia": "10000",
            },
            { "size": "m",
                "gia": "20000",
            },
            { "size": "xl",
                "gia": "30000",
            },
        ]
    },
]

$( document ).ready(function() {
    var html = ""
    for(var i=0; i< danhsachdouong.length; i++){
        html += '<p>Mã :'+danhsachdouong[i].ma + ' Tên :'+danhsachdouong[i].ten +'</p>'

    }
    $('.danhsachsp').html(html)

});

function  on_chondanhsach(e){
    var ma = $('.chon_danhsach').val();
    var size = $('.size').val();
    var gia = 0
    var so_luong = $('.so_luong').val()
    $('.tien').html(0)
    for(var i=0; i< danhsachdouong.length; i++){
        for(var j=0; j< danhsachdouong[i].size.length; j++){
            if(danhsachdouong[i].ma == ma && danhsachdouong[i].size[j].size == size){
                gia = danhsachdouong[i].size[j].gia
            }
        }
    }
    if(gia != 0 && so_luong != "0"){
        $('.tien').html(parseInt(so_luong) * parseInt(gia))
    }
}