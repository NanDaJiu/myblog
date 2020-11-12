$(document).click(function(e){
    var list = ['学而时习之', '不亦说乎', '有朋自远方来', '不亦乐乎', '人不知而不愠', '不亦君子乎', '三人行 必有我师焉', '择其善者而从之', '其不善者而改之', '学而不思则罔', '思而不学则殆'];
    textUp( e, 2000, list, 200 )
})
function textUp( e, time, arr, heightUp ){
    var lists = Math.floor(Math.random() * arr.length);
    var colors = '#'+Math.floor(Math.random()*0xffffff).toString(16);
    var $i = $('<span />').text( arr[lists] );
    var xx = e.pageX || e.clientX + document.body.scroolLeft;
    var yy = e.pageY || e.clientY + document.body.scrollTop;

    $('body').append($i);
    $i.css({
        top: yy,
        left: xx,
        color: colors,
        transform: 'translate(-50%, -50%)',
        display: 'block',
        position: 'absolute',
        zIndex: 999999999999
    })
    $i.animate({
        top: yy - ( heightUp ? heightUp : 200 ),
        opacity: 0
    }, time, function(){
        $i.remove();
    })
}