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
    console.log(`${location.protocol}//${location.host}/items.html`);
    // button event
    $("button").click(function() {
        location.href = `${location.protocol}//${location.host}/items.html`;
    })
});