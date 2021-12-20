// animated headline

$('.selector').animatedHeadline({
    animationType: 'clip'
});

// humburger menu 

function openMenu (){
    document.getElementById('hb').style.width="100%";
}
function closeMenu (){
    document.getElementById('hb').style.width="0%";
}

// wow animation

new WOW().init();

// mixit up

var mixer = mixitup('.work-grid');