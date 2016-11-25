/**
 * Created by Administrator on 2016/7/30 0030.
 */
var x=232, y=208,z=340;
$(function(){
    //$("#jiesuan").live("click",function(){
    //$arr=new Array(5);
    //$a=new Array(5);
    //for(var i=0;i<$arr.length;i++){
    //    $n=i+1;
    //    $arr[i]=$("input:eq("+$n+")").val();
    //    $a[i]=$arr[i]-0;
    //}
    //$scmoney=90*$a[0]+80*$a[1]+120*$a[2]+100*$a[3]+50*$a[4];
    //$ddmoney=45*$a[0]+32*$a[1]+60*$a[2]+60*$a[3]+35*$a[4];
    //$savemoney=$scmoney-$ddmoney;
    //$score=100*$a[0]+90*$a[1]+80*$a[2]+50*$a[3]+20*$a[4];
    //    $("#jiesheng").children("span").css("color","red").text("￥"+$savemoney);
    //    $("#jifen").children("span").css("color","red").text($score);
    //    $("#totle").children("span").css("color","red").text("￥"+$ddmoney);
    //} );
    var i=1;
    $("#arrowUp").click(function(){
        if(i%2==0){
            $(this).attr("src","../images/shopping_arrow_up.gif");
            i++;
        }
        else
        {
            $(this).attr("src","../images/shopping_arrow_down.gif");
            i++;
        }
        $("#Recommend").slideToggle()
    });

    $("input[type=text]").focus(function(){$(this).select()}).keyup(function(){
            $arr=new Array(5);
            $a=new Array(5);
            for(var i=0;i<$arr.length;i++){
                $n=i+1;
                $arr[i]=$("input:eq("+$n+")").val();
                $a[i]=$arr[i]-0;
            }
           $scmoney=90*$a[0]+80*$a[1]+120*$a[2]+100*$a[3]+50*$a[4];
           $ddmoney=45*$a[0]+32*$a[1]+60*$a[2]+60*$a[3]+35*$a[4];
           $savemoney=$scmoney-$ddmoney;
            $score=100*$a[0]+90*$a[1]+80*$a[2]+50*$a[3]+20*$a[4];
            $("#jiesheng").children("span").css("color","red").text("￥"+$savemoney);
            $("#jifen").children("span").css("color","red").text($score);
            $("#totle").children("span").css("color","red").text("￥"+$ddmoney);
            return (x=$ddmoney)(y=$savemoney)(z=$score);
        } );
    $("#jiesuan").live("click",function(){
        var s=confirm("请确认您的订单信息：\n商品总金额：￥"+x+"\n共节省：￥"+y+"\n所得积分："+z);
        if(s){
            window.location.href="shoppingCart.html"
        }
    });
    $(".delRow").click(function(){
        var x=confirm("您确定要删除此商品么？");
        if(x){$(this).parent().remove();}
    });
    $("a[class='slide']").click(function(){
        $("#slide").slideToggle();
    });
});