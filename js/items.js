$(function () {
    // add button event
    $(".add").click(function (event) {
        event.preventDefault();
        let id = $(this).closest(".item").attr("id");
        let gender = $(this).parent().find(".type-of-gender").text();
        let name = $(this).parent().find(".name").text();
        let price = $(this).parent().find(".price").text().replace("￥", "").replace(",", "");
        let img = $(this).closest(".item").find(".image-wrapper img").attr("src");
        // show modal window
        $(".modal-window").show();
        $(".modal-content__main .image-wrapper img").attr("src", img);
        $(".modal-content__main .name").text(name);
        $(".modal-content__main .price").text(`￥${price}`);
        // sessionStorage
        let itemInfo = {
            gender: gender,
            name: name,
            price: price,
            image: img,
            count: 1
        }
        if (Object.keys(sessionStorage).some(x => x == id)) {
            let obj = JSON.parse(sessionStorage.getItem(id));
            obj.count++;
            console.log(id, obj.count);
            sessionStorage.setItem(id, JSON.stringify(obj));
        }
        else {
            sessionStorage.setItem(id, JSON.stringify(itemInfo));
        }

    })
    // close modal
    $(".close, .continue").click(function (event) {
        event.preventDefault();
        $(".modal-window").hide();
    })
});