/**
 * Created by Irina on 11.05.2016.
 */
$(document).ready(function(){
   $(".pr1").hover(function(){
        $(".hidbutton").css("display", "block");
       $(".hidbutton").css("visibility", "visible");
    }, function(){
        $(".hidbutton").css("display", "none");

    });
    $(".pr2").hover(function(){
        $(".hidbutton2").css("display", "block");
        $(".hidbutton2").css("visibility", "visible");
    }, function(){
        $(".hidbutton2").css("display", "none");

    });

    // grab the initial top offset of the navigation
    var stickyNavTop = $('.nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > 200) {
            $('.content').css('position', 'fixed');
            $('.content').css('z-index', '200');
            $('.content').css('top', '-228px');
            $('.content').css('width', '100%');
        } else {
            $('.content').css('position', '');
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });


    $('a').on('click', function(e){
        e.preventDefault();
    });
    $('.wish').hover(function () {
        clearTimeout($.data(this,'timer'));
        $('ul',this).stop(true,true).slideDown(200);
    }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
            $('ul',this).stop(true,true).slideUp(200);
        }, this), 100));
    });
    $('.dropproduct').hover(function () {
        clearTimeout($.data(this,'timer'));
        $('ul',this).stop(true,true).slideDown(200);
    }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
            $('ul',this).stop(true,true).slideUp(200);
        }, this), 100));
    });


});
