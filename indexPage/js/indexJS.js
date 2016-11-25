/**
 * Created by Administrator on 2016/7/30 0030.
 */
function adv(){
    open("adverPage.html")
}
window.onload=adv();
var num=1;
function changimg(){
   $("#centertop2").css("background","url('../images/dd_scroll_"+num+".jpg')");
    $("[id=centertop] ul button").css("background","#FAFAFB");
    x=num-1;
    $("[id=centertop] ul button:eq('"+x+"')").css("background","#FD9B5D");
   num++;
   if (7==num){num=1;}
}
window.setInterval("changimg(num)",2000);
function slide(){
    $("[id='rightul'] li:last").show(600);
    $("[id='rightul'] li:first").hide(600,function(){
        var text=$(this).html();
        var li='<li style="display: none"><a href="#">'+text+'</a></li>';
        $(this).remove();
        $("[id='rightul'] ul").append(li);
    });
}
 var set=window.setInterval("slide()",590);


$(function(){
    $("[id=centertop] ul button").click(function(){
        $("[id=centertop] ul button").css("background","#FAFAFB");
        $(this).css("background","#FD9B5D");
        $number=$(this).attr("value");
        $("[id=centertop2]").css("background","url('../images/dd_scroll_"+$number+".jpg')")
    });
    $("[id=scroll] button").click(function(){
        $("#scroll").hide();
    });
    $("#rightul").mouseenter(function(){
        clearInterval(set);
    });
    $("[id=rightul]").mouseleave(function(){
        set=setInterval("slide()",590);
    });
    $("button[class=book]").mouseenter(function(){
        var index=$(this).parent('li').index();
        $("button[class=book]").css("background","url('../images/dd_book_bg1.jpg')");
        for(var i=0;i<4;i++){
            $("#centermidbottom"+i).hide();
        }
        $(this).css("background","url('../images/dd_book_bg2.jpg')");
        $("#centermidbottom"+index).show();
    });
});
