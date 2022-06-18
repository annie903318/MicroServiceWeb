document.getElementById("navbar-brand").innerHTML="ʕ•ᴥ•ʔ  Daily Life";

if($.cookie("userID")=="" ||$.cookie("userID")==null){
    $("#login").show();
    $("#changePass").hide()
    $("#username").hide();
    $("#logout").hide();
    $("#album").hide();
    $("#blog").hide();
    $("#drumkit").hide();
    $("#todolist").hide();
}else{
    $("#login").hide();
    $("#changePass").show();
    $("#username").show();
    $("#username").text("使用者 : "+$.cookie("userName"));
    $("#logout").show();
    $("#album").show();
    $("#blog").show();
    $("#drumkit").show();
    $("#todolist").show();
}
function logout(){
    $.removeCookie("userID");
    $.removeCookie("userName");
    history.go(0); //刷新當前頁面
    alert("登出成功");
}

