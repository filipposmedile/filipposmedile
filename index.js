//HEADER
$(window).on('scroll',function(){
    let scrollPoint = $(window).scrollTop();
    if(scrollPoint > 0){
        $('#header').css('background-color','#d3d3d380');
        $('#mobile-menu').css('background-color','#d3d3d380');
        
    } else {
        $('#header').css('background-color','transparent');
        $('#mobile-menu').css('background-color','white');
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
    if(menu.css('transform') == 'matrix(1, 0, 0, 1, 0, 230)'){

        menu.css('transform','translateY(0px)');

        line1.css({'transform':'rotate(0deg)','width':'40px','top':'17px'});
        line2.css('opacity','1');
        line3.css({'transform':'rotate(0deg)','width':'40px','top':'43px'});
        
    } else {
        line1.css({'transform':'rotate(47deg)','width':'50px','top':'25px'});
        line2.css('opacity','0');
        line3.css({'transform':'rotate(-47deg)','width':'50px','top':'25px'});
        menu.css('transform','translateY(230px)');

    }
}

$(document).on('click','.header-link-mobile',function(){

    menuToggle();

})