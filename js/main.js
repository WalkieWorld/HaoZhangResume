/**
 * Created by hao on 6/21/15.
 */
$("main").stellar();

$(function(){
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
});

$.backstretch("img/ITStuff_web.jpg");

(function () {
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
})();


