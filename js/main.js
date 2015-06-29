/**
 * Created by hao on 6/21/15.
 */

$(window).load(function(){
    $('#page-loader').fadeOut(500);
});

$(".backstretch").stellar();

$(function(){

    $('.jumbotron').height($(window).height());

    $('.header-box').css({'marginTop':$(window).height()*0.4});

    $(window).resize(function(){
        $('.jumbotron').height($(window).height());
        $('.header-box').css({'marginTop':$(window).height()*0.4});
    });

    $.backstretch("img/ITStuff_web.jpg");

    document.querySelector('.backstretch').setAttribute('data-stellar-ratio', '0.5');

    setTimeout(function () {
        'use strict'
        var scrollAnimationCollection = document.querySelectorAll("[data-scroll-animation='90%']");
        for(var i = 0; i < scrollAnimationCollection.length; i++){
            var waypoint = new Waypoint({
                element: scrollAnimationCollection.item(i),
                handler: function(direction) {
                    this.element.classList.add('in');
                },
                offset: '90%'
            });
        }

        if (window.scrollY === 0){
            document.querySelector('body>nav').classList.remove('scrolled');
        }
        else{
            document.querySelector('body>nav').classList.add('scrolled');
        }

        $(window).scroll(function(){
            if (window.scrollY === 0){
                document.querySelector('body>nav').classList.remove('scrolled');
            }
            else{
                document.querySelector('body>nav').classList.add('scrolled');
            }
        });
    }, 600);

    $("main").stellar();

    $(function(){
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });
    });
});