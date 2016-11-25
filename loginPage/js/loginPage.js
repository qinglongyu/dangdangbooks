/**
 * Created by asus on 2016/7/30.
 */
$(function(){$("#centerMiddleCenter [type=text]").focus(function(){
    if($(this).val()=="请输入您的邮箱地址或昵称"){
        $(this).val("");
    }
    $(".onErrorEmail").hide();
    $(".onErrorName").hide();
    $(this).css("background-color","#E8E8E8");
});
    $("[type=text]:eq(0)").blur(function(){
        $(this).css("background-color","white");
        if( $(this).val()==""){
            $(this).val("请输入您的邮箱地址或昵称")
        }
        else{
            if($(this).val().indexOf("@")!=-1||$(this).val().indexOf(".")!=-1){
                if((/^[A-Za-z0-9-@.]{4,20}$/.test($(this).val())==true)&&($(this).val().indexOf("@")!=-1)&&($(this).val().indexOf(".")!=-1)){
                    $(".onErrorEmail").hide();
                    return true;
                }
                else{
                    var errorEmail = '请输入正确的E-mail地址.';
                    $(this).parent().append('<span class="onErrorEmail">' + errorEmail + '</span>');
                    return false;
                }
            }
            else{
                if($(this).val().length<6){
                    var errorMsgName= '请输入至少6位的昵称.';
                    $(this).parent().prepend('<span class="onErrorName">' + errorMsgName + '</span>');
                    return false;
                }
                else{
                    $(".onErrorName").hide();
                    return true;
                }
            }

        }
    });
    $("#centerMiddleCenter [type=password]").focus(function(){
        $(".onErrorPwd").hide();
        $(this).css("background-color","#E8E8E8");
    });
    $("#centerMiddleCenter [type=password]").blur(function(){
        $(this).css("background-color","white");
        if(/^[A-Za-z0-9_]{6,12}$/.test($(this).val())==false){
            var errorMsgPwd= '请输入至少6至12位非中文密码.';
            $(this).parent().prepend('<span class="onErrorPwd">' + errorMsgPwd + '</span>');
            return false;
        }
        else{
            $(".onErrorPwd").hide();
            return true;
        }
    });
});
