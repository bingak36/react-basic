const tl = anime.Timeline({
    default:750,
    easing:'easeOutBounse'
})

tl.add({
    targets:'.star'
    strokeDashoffset: [anime.setDashoffset, 0],
    delay:function(el, i) {
        return i*250},
        easing: "easeInOutSine"
        duration:2500;
        loop:true,
        direction:'alternate'
    }
)
tl.add({
    targets:'ice',
    opacity:1
})