$(document).ready(function($) {

    $(window).resize(function(){
       $('.height-follower').height($(window).height());
    })
    $(window).resize();

	$('.accelerate-btn').on('click', function(){
        $('.car1-container, .background, .car2-container').addClass('accelerate-car');
        $('.accelerate-btn img').addClass('flip');
        $('.carsmoke').show();
        $('.speedometer-indicator').addClass('speedup-engine');
        setTimeout(function(){
            $('.car1-container, .car2-container').removeClass('accelerate-car');
            $('.accelerate-btn img').removeClass('flip');
            $('.speedometer-indicator').removeClass('speedup-engine');
            $('.speedometer-indicator').addClass('maintain-engine');
        }, 5000);
            /*setTimeout(function(){
                $('.car1, .tire, .tireback').removeClass('accelerate-car deccelerate-car');
            }, 10000);*/
    });
    $('.start-btn').on('click', function(){
        $('.prestart-overlay').hide();
        $('.game-precounter').show();
        setTimeout(function(){
            $('.background, .mini-map-container .car1-mini, .beach-sun, .beach-tower').addClass('start-game');
            $('.speedometer-indicator').addClass('start-engine');
            $('.tire, .tireback, .enemy-tire, .enemy-tireback').show();
            $('.accelerate-overlay').hide();
        }, 2000);
        $('.game-precounter span').addClass('start-game');
        setTimeout(function(){
            $('.game-precounter span').hide();
            $('.game-precounter-go').show();
            $('.game-precounter-go span').addClass('start-game');
            setTimeout(function(){
                $('.game-precounter-go').hide();
            }, 2000);
        }, 2000);
        setTimeout(function(){
            $('.car1-container, .car2-container, .finish-line-container, .mini-map-container .car1-mini').addClass('finish-game');
        }, 10000);
        setTimeout(function(){
            $('.winner-container, .winner-fallingpapers-container').show();
        }, 10500);
        setTimeout(function(){
            $('.background, .mini-map-container .car1-mini').removeClass('start-game');
            $('.car1-container, .background, .car2-container').removeClass('accelerate-car');
            $('.accelerate-overlay').show();
        }, 12500);
    });

    $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
        //
      }
      else if(e.keyCode == 39) { // right
        $('.accelerate-btn img').click();
      }
    });


});