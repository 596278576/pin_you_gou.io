$(()=>{
    // 获取id
    let id=location.search.substring(1);
    // 判断对应的id
    let shuju=phoneData.find(e=>{
        return e.pID=id;
    })
    // 修改对应id的数据
            $('.sku-name').text(shuju.name);
            $('.summary-price em').text(shuju.price);
            $('.preview-img img').attr('src',(shuju.imgSrc));


    
    $('.addshopcar').on('click',function(){
        // 判断用户输入的值
        let num=$('.choose-number').val();
        if(parseInt(num)==0||isNaN(num)||num.trim().length==0){
            alert('不是数字');
            return;
        };
        // 从本地存储获取数据
        let arr=Kits.getDate('cartData');
        console.log(arr);
        
        //判断是否存在该商品
        let pd=arr.find(e=>{
            return e.pID=id;
        });
        // 如果存在数量增加
        num=parseInt(num);
        if(pd){
            pd.num+=num;
        }else{
            // 如果不存在则存储到对象中并把对象存储到数组中
            let obj={
                pID:shuju.pID,
                name:shuju.name,
                price:shuju.price,
                imgSrc:shuju.imgSrc,
                num:num
            }
            arr.push(obj);
        }
        // 存入本地存储
        Kits.setDate('cartData',arr);
        // 跳转
        location.href='./cart.html';
    })
})