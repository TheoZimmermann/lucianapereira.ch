var logoDrawing = anime.timeline();
var svgSize;

if (window.matchMedia("(min-width: 1024px)").matches) {
    svgSize = .4;
} else {
    svgSize = .4;
}
logoDrawing.add({
    targets: '#logo .st0',
    easing: 'easeInOutSine',
    fill: '#424242',
    duration: 1500,
    autoplay: true,
    delay: function (el, i) {
        return i * 250
    },
}).add({
    targets: '#logo',
    easing: 'easeInOutSine',
    scale: svgSize,
    translateY: -140,

}).add({
    targets: '#hero .text',
    opacity: 1,
    zIndex: 999,
    duration: 500,
    delay: function (el, i) {
        return i * 250
    },
    easing: 'easeInOutSine'
})