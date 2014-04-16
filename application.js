$().ready(function() {
    var controller = $.superscrollorama();
      controller.addTween(
        '#examples-parallax', 
        (new TimelineLite()).append([
        TweenMax.fromTo($('#parallax-it-left'), 1, {
        css: {
            top: 200
        },
        immediateRender: true
    }, {
        css: {
            top: -600
        }
    }),
        TweenMax.fromTo($('#parallax-it-right'), 1, {
        css: {
            top: 500
        },
        immediateRender: true
    }, {
        css: {
            top: -1250
        }
    })
        ]), 1000 // scroll duration of tween
    );

});