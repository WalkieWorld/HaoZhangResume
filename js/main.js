/**
 * Created by hao on 6/21/15.
 */

function scrollSpyRefresh(){
    setTimeout(function(){
        $('body').scrollspy('refresh');
    },1000);
}

$(window).load(function(){
    $('#page-loader').fadeOut(500);
    scrollSpyRefresh();
});



$(function(){

    $('.jumbotron').height($(window).height());

    $('.header-box').css({'marginTop':$(window).height()*0.4});

    $(window).resize(function(){
        $('.jumbotron').height($(window).height());
        $('.header-box').css({'marginTop':$(window).height()*0.4});
        scrollSpyRefresh();
    });

    $.backstretch("img/keyboard_button_bw_enter.jpg");

    document.querySelector('.backstretch').setAttribute('data-stellar-ratio', '0.5');

    $(".backstretch").stellar();

    $(function(){
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });
    });

    function scrollAnimation(collection, offset){
        for(var i = 0; i < collection.length; i++){
            var waypoint = new Waypoint({
                element: collection.item(i),
                handler: function(direction) {
                    this.element.classList.toggle('in');
                },
                offset: offset
            });
        }
    }

    setTimeout(function () {
        'use strict'
        var scrollAnimationCollection90 = document.querySelectorAll("[data-scroll-animation='90%']");
        try{
            new Promise(function(resolve, reject){
                resolve(scrollAnimationCollection90);
            }).then(function(collection){
                    scrollAnimation(collection, '90%');
                }).catch(function(err){
                    console.log("Failed!", err);
                });
        }catch(e){
            scrollAnimation(scrollAnimationCollection90, '90%');
        }

        var scrollAnimationCollection95 = document.querySelectorAll("[data-scroll-animation='95%']");
        try{
            new Promise(function(resolve, reject){
                resolve(scrollAnimationCollection95);
            }).then(function(collection){
                    scrollAnimation(collection, '95%');
                }).catch(function(err){
                    console.log("Failed!", err);
                });;
        }catch(e){
            scrollAnimation(scrollAnimationCollection95, '95%');
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

    $('a[data-scroll-smooth]').click(function(e){
        $('html,body').scrollTo(this.hash, this.hash, {offset:{top: -95, left: 0}});
        e.preventDefault();
    });

    // Adjust the height of bg because stellar.js modify the height.
    setTimeout(function(){
        var bgHeight = $(".backstretch").outerHeight() + 20;
        $(".backstretch").outerHeight(bgHeight);
    }, 400);
});