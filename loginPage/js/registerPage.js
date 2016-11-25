/**
 * Created by asus on 2016/7/30.
 */
var cityName=new Array();
cityName["江苏省"]=["南京","苏州","无锡","徐州","常州","南通"];
   cityName ["江西省"]=["南昌","赣州","新余","九江","萍乡","上饶"];
   cityName["福建省"]=["厦门","福州","南平","漳州","泉州","龙岩"];
function showCity(){
    var getProvince=document.getElementById("province").value;
    var getCity=document.getElementById("city");
    getCity.options.length=1;
    for(key in cityName){
        if(key==getProvince){
            for(inkey in cityName[key]){
                getCity.add(new Option(cityName[key][inkey],cityName[key][inkey]),null)
            }
        }
    }
}
$(function(){$("[type=text]:eq(0)").focus(function(){
    if($(this).val()=="请输入您的邮箱地址"){
    $(this).val("");
   }
    $(".onErrorEmail").hide();
    $(this).css("background-color","#E8E8E8");
});
    $("[type=text]:eq(0)").blur(function(){
        $(this).css("background-color","white");

        if( $(this).val()==""){
            $(this).val("请输入您的邮箱地址")
        }
        else{
            if( /^@+.+[A-Za-z0-9]{4,20}$/.test($(this).val())==false){
               if($(this).val().indexOf("@")==-1||$(this).val().indexOf(".")==-1){
                   var errorEmail = '&nbsp;请输入正确的E-Mail地址.';
                    $(this).parent().append('<span class="onErrorEmail">' + errorEmail + '</span>');
                   return false;
               }
            }
            else{
                $(".onErrorEmail").hide();
                return true;
            }
        }
    });
    $("[type=text]:eq(1)").focus(function(){
        if($(this).val()=="请输入您的昵称"){
            $(this).val("");
        }
        $(".onErrorName").hide();
        $(this).css("background-color","#E8E8E8");
    });
    $("[type=text]:eq(1)").blur(function(){
        $(this).css("background-color","white");
        if( $(this).val()==""){
            $(this).val("请输入您的昵称")
        }
        if($(this).val().length<6){
            var errorMsgName= '&nbsp;请输入至少6位的昵称.';
            $(this).parent().append('<span class="onErrorName">' + errorMsgName + '</span>');
            return false;
        }

        else{
            $(".onErrorName").hide();
            return true;
        }

    });
    $("[type=password]:eq(0)").focus(function(){
        $(".onErrorPwd").hide();
        $(this).css("background-color","#E8E8E8");
    });
    $("[type=password]:eq(0)").blur(function(){
        $(this).css("background-color","white");
        if(/^[A-Za-z0-9_]{6,12}$/.test($(this).val())==false){
            var errorMsgPwd= '&nbsp;请输入至少6位非中文密码且不超过12位.';
            $(this).parent().append('<span class="onErrorPwd">' + errorMsgPwd + '</span>');
            return false;
        }
        else{
            $(".onErrorPwd").hide();
            return true;
        }
    });
    $("[type=password]:eq(1)").focus(function(){
        $(".onErrorPwd2").hide();
        $(this).css("background-color","#E8E8E8");
    });
    $("[type=password]:eq(1)").blur(function(){
        $(this).css("background-color","white");
        if($(this).val()!=$("[type=password]:eq(0)").val()){
            var errorMsgPwd2= '&nbsp;两次输入的密码不符,请重新输入.';
            $(this).parent().append('<span class="onErrorPwd2">' + errorMsgPwd2 + '</span>');
            return false;
        }
        else{
            $(".onErrorPwd2").hide();
            return true;
        }
    });
});

