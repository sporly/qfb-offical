// DOM Ready
$(function () {

    var $el, leftPos, newWidth;
    $mainNav2 = $("#example-two");

    $("#example-one").append("<div id='magic-line'></div>");

    /* Cache it */
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".q-cueractive").width())
        .css("left", $(".q-cueractive a").position().left)
        .data("origLeft", $magicLine.position().left)
    //.data("origWidth", $magicLine.width());
        $("#example-one li").click(function(){
        /*$("#example-one li").children('a').removeClass('q-hoveirt');*/
        $(this).addClass('q-cueractive');
       /* $(this).children('a').addClass('q-hoveirt');*/
	      
    });
     
    $("#example-one li").hover(function () {
        $el = $(this).find(".q-hoveirt");
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.show();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function () {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
    
     
	
    $('#q-menuer').mouseover(function(){
		$('.q-nav2').css('display','block');
		$('.q-bar').css({'opacity':'1','left':'96px'});
	});
	$('#q-menuer').mouseout(function(){
		$('.q-nav2').css('display','none');
		$('.q-bar').css({'opacity':'0'});
	});	
    
    

});

//导航
$(".loginborder,.logininputber").click(function () {
    $(".q-logininput").removeClass('q-acitver');
    $(this).parents(".q-logininput").addClass('q-acitver');
});

//字体大小
function resize_height(){
    win_height=$(window).height();
    if(win_height >= 500){
        $(".fbl").css('width','400px');
    }else if(win_height >= 400 && win_height < 600){
        $(".fbl").css('width','300px');
    }else if(win_height >= 300 && win_height < 500){
        $(".fbl").css('width','200px');
    }else if(win_height < 200){
        $(".fbl").css('width','100px');
    }else{
        $(".fbl").css('width','auto');
    }
}
resize_height();

$(window).resize(function(){
    resize_height();
});

//字体大小
function resizep_height(){
    winfo_height=$(window).height();
    if(winfo_height >=700){
        $(".fb2").css('width','500px');
    }else if(winfo_height >= 600){
        $(".fb2").css('width','400px');
    }else if(winfo_height >= 500){
        $(".fb2").css('width','300px');
    }else if(winfo_height < 400){
        $(".fb2").css('width','200px');
    }else if(winfo_height < 300){
        $(".fb2").css('width','100px');
    }
}
resizep_height();

$(window).resize(function(){
    resizep_height();
});
//字体大小
function resizet_height(){
    winfor_height=$(window).height();
    if( winfor_height >=700){
        $(".fb3").css('width','559px');
    }else if( winfor_height >= 600){
        $(".fb3").css('width','500px');
    }else if( winfor_height >= 500){
        $(".fb3").css('width','400px');
    }else if( winfor_height >= 400){
        $(".fb3").css('width','300px');
    }else if( winfor_height >= 300){
    $(".fb3").css('width','200px');
    }


}
resizet_height();

$(window).resize(function(){
    resizet_height();
});

//字体大小
function resizefer_height(){
    winv_height=$(window).height();
    if(winv_height >= 581){
        $(".fb4").css('width','581px');
    }else if(winv_height >= 481 && winv_height < 681){
        $(".fb4").css('width','481px');
    }else if(winv_height >= 381 && winv_height < 481){
        $(".fb4").css('width','381px');
    }else if(winv_height < 281){
        $(".fb4").css('width','281px');
    }else{
        $(".fb4").css('width','auto');
    }
}
resizefer_height();

$(window).resize(function(){
    resizefer_height();
});
//字体大小
function resizefev_height(){
    winfive_height=$(window).height();
    if(winfive_height >= 753){
        $(".fb5").css('width','753px');
    }else if(winfive_height >= 653 && winfive_height < 753){
        $(".fb5").css('width','653px');
    }else if(winfive_height >= 553 && winfive_height < 653){
        $(".fb5").css('width','553px');
    }else if(winfive_height < 453){
        $(".fb5").css('width','453px');
    }else{
        $(".fb5").css('width','auto');
    }
}
resizefev_height();

$(window).resize(function(){
    resizefev_height();
});










