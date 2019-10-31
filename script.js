$(document).ready(function(){

    // FADEIN-LEFT-SLOWLY - SLOWLY FADEIN FROM LEFT 
    $.fn.fadeinLeftSlowly = function(){ 
        $('.fadein-left-slowly').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'}, 1500);
            }        
        });  
    }
    // FADEIN-LEFT-SLOWLY - SLOWLY FADEIN FROM LEFT 


    // FADEIN-LEFT-QUICKLY - QUICKLY FADEIN FROM LEFT 
    $.fn.fadeinLeftQuickly = function(){ 
        $('.fadein-left-quickly').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'}, 1000);
            }        
        }); 
    }
    // FADEIN-LEFT-QUICKLY - QUICKLY FADEIN FROM LEFT 


    // FADEIN-NEWS-TOP-IMG - FROM TOP 
    $.fn.fadeinNewsTopImg= function(){ 
        $('.fadein-news-top-img').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','left':'0px'}, 1000);
            }        
        }); 
    }
    // FADEIN-NEWS-TOP-IMG - FROM TOP


    // FADEIN 
    $.fn.fadein = function(){ 
        $('.fadein').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'}, 1800);
            }        
        }); 
    }
    // FADEIN

    // FADEIN-TOP 
    $.fn.fadeinTop = function(){ 
        $('.fadein-top').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $('.fadein-top1').animate({'opacity':'1', 'top': '0px'}, 1500);
                $('.fadein-top2').animate({'opacity':'1', 'top': '0px'}, 1900);
                $('.fadein-top3').animate({'opacity':'1', 'top': '0px'}, 2300);
            }  
        }); 
    }
    // FADEIN-TOP
    
    
    
    $.fn.fadeinLeftSlowly();
    $.fn.fadeinLeftQuickly();
    $.fn.fadeinNewsTopImg();
    $.fn.fadein();
    $.fn.fadeinTop();
    
    $(window).scroll( function(){
        $.fn.fadeinLeftSlowly();
        $.fn.fadeinLeftQuickly();
        $.fn.fadeinNewsTopImg();
        $.fn.fadein();
        $.fn.fadeinTop();
    });

});
