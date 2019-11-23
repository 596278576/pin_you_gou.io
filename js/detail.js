$(()=>{
    let id=location.search.substring(1);
    phoneData.forEach(e=>{
        if (id==e.pID){
            $('.sku-name').text(e.name);
            $('.summary-price em').text(e.price);
            $('.preview-img img').attr('src',(e.imgSrc));
        }
    });

    $('.addshopcar').on('click',function(){
        let num=$('.choose-number').val();
        if(parseInt(num)==0||isNaN(num)||num.trim().length==0){
            alert('不是数字');
            return;
        }
    })
})