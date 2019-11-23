$(()=>{
    let id=location.search.substring(1);
    let shuju=phoneData.find(e=>{
        return e.pID=id;
    })
            $('.sku-name').text(shuju.name);
            $('.summary-price em').text(shuju.price);
            $('.preview-img img').attr('src',(shuju.imgSrc));


    $('.addshopcar').on('click',function(){
        let num=$('.choose-number').val();
        if(parseInt(num)==0||isNaN(num)||num.trim().length==0){
            alert('不是数字');
            return;
        };
        let arr=Kits.getDate('cartData');
        console.log(arr);
        
        //判断是否存在该商品
        let pd=arr.find(e=>{
            return e.pID=id;
        });
        num=parseInt(num);
        if(pd){
            pd.num+=num;
        }else{
            let obj={
                pID:shuju.pID,
                name:shuju.name,
                price:shuju.price,
                imgSrc:shuju.imgSrc,
                num:num
            }
            arr.push(obj);
        }
        Kits.setDate('cartData',arr);
        location.href='./cart.html';
    })
})