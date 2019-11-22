$(()=>{
    let id=location.search.substring(1);
    phoneData.forEach(e=>{
        if (id==e.pID){
            $('.sku-name').text(e.name);
            $('.summary-price em').text(e.price);
            $('.preview-img img').attr('src',(e.imgSrc));
        }
    })
})