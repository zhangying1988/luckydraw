/*判断手机号不为空和是否是正确的手机号，给验证码按钮添加样式*/
$(function () {
    $(".btn-login").click(function () {
        var text1 = $("#text1").val();
        var text2 = $("#text2").val();
        if (text1 != "" && text2 != "" && /^1[34578]\d{9}$/.test(text1)) {
            $(location).attr('href', 'index.html');
            return true;
        } else if (text1 == "") {
            showErrorInfo();
            $(".prompt1").text("请输手机号码");
            return false;
        } else if (text2 == "") {
            showErrorInfo();
            $(".prompt1").text("请输入密码");
            return false;
        } else {
            showErrorInfo();
            $(".prompt1").text("手机号码错误");
            return false;
        }
    })
    function showErrorInfo() {
        $(".prompt1").show().delay(3000).hide(300);
    }
})
