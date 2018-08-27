$(function () {
    $("#btn1").click(function() {
        $("#panel1").slideToggle(1000).delay.slideToggle(1000);
        $("#panel2").slideUp(1000);
        $("#panel3").slideUp(1000);
        $("#panel4").slideUp(1000);

    });
        $("#btn2").dblclick(function (){
            $("#panel2").fadeToggle(1000);

    });
        $("#btn3").mouseover(function() {
            $("#panel3"). toggle(1000);
        });
        $("#btn4").mouseover(function(){
            $("#panel4"). toggle(1000);
        })


    slideUp, slideDown, slideToggle
    show, hide, toggle
    delay
    fadeIn,fadeOut,fadeToggle
    addClass, removeClass, toggleClass
    on, click, dblclick, mouseover, hover
});
//todo jquery mouse exercise
