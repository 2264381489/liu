$(function () {
var timer;
var i=0;
var sum=$('.image>li').length;
console.log(sum);
    $('.image>li').eq(0).show();
    ilunbo();
    $('.box').hover(function () {
        $('.left-arrow').show();$('.right-arrow').show();clearInterval(timer);},function () {
        $('.left-arrow').hide();$('.right-arrow').hide();
        ilunbo();
    });
    $('.left-arrow').click(function () {
        i=i-1;
        if (i<0){
            i=sum-1;
        }
        $('.image>li').eq(i).fadeIn().siblings().fadeOut();

    });
    $('.right-arrow').click(function () {
        i=i+1;
        if (i>sum-1) {
            i=0;
        }
        $('.image>li').eq(i).fadeIn().siblings().fadeOut();


    });






    function ilunbo() {
     timer=setInterval(function () {
         i=i+1;
         if (i>sum-1) {
             i=0;
         }
             $('.image>li').eq(i).fadeIn().siblings().fadeOut();
         

     },1000)
    }

})