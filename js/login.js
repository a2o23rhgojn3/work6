$(function() {
    // checkbox event
    $('input[type="checkbox"]').click(function() {
        let inputCheck = $('input[type="checkbox"]').prop("checked");
        if(inputCheck == true) {
            $("input[type='password']").attr("type", "text");
        }else {
            console.log("test");
            $("input[type='text']").attr("type", "password");
        }
    })
    // button event
    $("button").click(function() {
        let email = $("#email").val();
        let password = $("#password").val();
        if(email != "user@gmail.com" || password != "password") {
            $(".alert").text("メールアドレスまたはパスワードが違います。");
            $("#email").val("");
            $("#password").val("");
            return;
        }
        location.href = `${location.protocol}//${location.host}/${location.pathname}/items.html`;
        // location.href = `${location.protocol}//${location.host}/items.html`;
    })
});