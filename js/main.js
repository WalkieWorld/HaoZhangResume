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

$(".backstretch").stellar();

$(function(){

    $('.jumbotron').height($(window).height());

    $('.header-box').css({'marginTop':$(window).height()*0.4});

    $(window).resize(function(){
        $('.jumbotron').height($(window).height());
        $('.header-box').css({'marginTop':$(window).height()*0.4});
        scrollSpyRefresh();
    });

    $.backstretch("img/ITStuff_web.jpg");

    document.querySelector('.backstretch').setAttribute('data-stellar-ratio', '0.5');

    setTimeout(function () {
        'use strict'
        new Promise(function(resolve, reject){
            var scrollAnimationCollection90 = document.querySelectorAll("[data-scroll-animation='90%']");
            resolve(scrollAnimationCollection90);
        }).then(function(collection){
                for(var i = 0; i < collection.length; i++){
                    var waypoint = new Waypoint({
                        element: collection.item(i),
                        handler: function(direction) {
                            this.element.classList.add('in');
                        },
                        offset: '90%'
                    });
                }
            }).catch(function(err){
                console.log("Failed!", err);
            });
        new Promise(function(resolve, reject){
            var scrollAnimationCollection95 = document.querySelectorAll("[data-scroll-animation='95%']");
            resolve(scrollAnimationCollection95);
        }).then(function(collection){
                for(var i = 0; i < collection.length; i++){
                    var waypoint = new Waypoint({
                        element: collection.item(i),
                        handler: function(direction) {
                            this.element.classList.add('in');
                        },
                        offset: '95%'
                    });
                }
            }).catch(function(err){
                console.log("Failed!", err);
            });;

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

    $('a[data-scroll-smooth]').click(function(e){
        $('html,body').scrollTo(this.hash, this.hash, {offset:{top: -100, left: 0}});
        e.preventDefault();
    });

});