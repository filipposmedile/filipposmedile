//HEADER
$(window).on('scroll',function(){
    let scrollPoint = $(window).scrollTop();
    if($(window).width() > 500){
    if(scrollPoint > 0){
            $('#header').css({'background-color':'white','border-bottom':'2px solid black','box-shadow':'0 0 10px gray'});
            
        } else {
            $('#header').css({'background-color':'transparent','border-bottom':'none','box-shadow':'none'});
        }
    }
    let height = $(window).outerHeight();
    $('.fade-in').each(function(i){
        if(scrollPoint >= ($(this).offset().top - (height/1.5))){

            $(this).css('opacity','1');
    
        }
    })
    
})

//LOADER
window.onload = setTimeout(function(){
    $('#loader').css('opacity','0');
    setTimeout(function(){
        $('#loader').css('display','none');
    },500);
},1000);

//REVERSE COLUMNS ON PROJECT DIV FOR MOBILE
if($(window).width() < 768){
    $('.project-right-side').addClass('order-2');
};

//MOBILE BUTTON

function menuToggle(){
    var menu = $('#mobile-menu');
    var line1 = $('#line-1');
    var line2 = $('#line-2');
    var line3 = $('#line-3');
    if(menu.css('transform') == 'matrix(1, 0, 0, 1, 0, 240)'){

        menu.css('transform','translateY(0px)');

        line1.css({'transform':'rotate(0deg)','width':'40px','top':'17px'});
        line2.css('opacity','1');
        line3.css({'transform':'rotate(0deg)','width':'40px','top':'43px'});
        
    } else {
        line1.css({'transform':'rotate(47deg)','width':'50px','top':'25px'});
        line2.css('opacity','0');
        line3.css({'transform':'rotate(-47deg)','width':'50px','top':'25px'});
        menu.css('transform','translateY(240px)');

    }
}

$(document).on('click','.header-link-mobile',function(){

    menuToggle();

})