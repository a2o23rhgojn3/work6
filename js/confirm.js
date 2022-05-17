$(function () {
    // rendering
    let sum = 0;    // 商品合計
    let tax = 1.1;   // 消費税
    for (let i = 0; i < sessionStorage.length; i++) {
        let obj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        console.log(obj);
        console.log(obj.image);
        if (obj.image == undefined) {
            continue;
        }
        sum += obj.price * obj.count;
        $(".cart").append(`
            <div class="content" id="${sessionStorage.key(i)}">
                <div class="item">
                    <div class="image-wrapper">
                        <img src="${obj.image}" alt="">
                    </div>
                    <div class="info">
                        <p class="name">${obj.name}</p>
                        <p class="size">フリーサイズ</p>
                        <p class="price">￥${obj.price}</p>
                        <p class="count">数量 : ${obj.count}</p>
                    </div>
                </div>
                <div class="sum">
                    <p>小計 ￥${(obj.price * obj.count).toLocaleString()}</p> 
                </div>
                <div class="clear btn">
                    <p>削除する</p>
                </div>
            </div>
        `);
    }
    $(".payment .payment__confirm .sum .price").text(`￥${sum.toLocaleString()}`);
    $(".payment .payment__confirm .tax .price").text(`￥${(sum * tax).toLocaleString()}`);
    // clear item
    $(".clear").click(function () {
        sessionStorage.removeItem($(this).closest(".content").attr("id"));
        location.reload();
    });
})