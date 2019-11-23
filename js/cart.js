$(()=>{
    let arr=Kits.getDate('cartData'); 
    let html='';
    arr.forEach(e => {
        // 需要有一个产品的id，用于后期的一些其他操作
        html += `<div class="item" data-id="${e.pID}">
        <div class="row">
          <div class="cell col-1 row">
            <div class="cell col-1">
              <input type="checkbox" class="item-ck" ${e.isChecked ? "checked" : ''}>
            </div>
            <div class="cell col-4">
              <img src="${e.imgSrc}" alt="">
            </div>
          </div>
          <div class="cell col-4 row">
            <div class="item-name">${e.name}</div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="price">${e.price}</em>
          </div>
          <div class="cell col-1 tc lh70">
            <div class="item-count">
              <a href="javascript:void(0);" class="reduce fl ">-</a>
              <input autocomplete="off" type="text" class="number fl" value="${e.num}">
              <a href="javascript:void(0);" class="add fl">+</a>
            </div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="computed">${e.num * e.price}</em>
          </div>
          <div class="cell col-1">
            <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
          </div>
        </div>
      </div>`;
      })
    $('.item-list').append(html);

    if(arr.length!=0){
        $('.empty-tip').hide();
        $('.cart-header').removeClass('hidden');
        $('.total-of').show(); // 显示用于结算的div

    }

    // 实现全选点选
    let noCheck=arr.find(e=>{
        return !e.isChecked;
    })
    $('.pick-all').prop('checked',!noCheck)
    $('.pick-all').on('click',function(){
        let ckall=$(this).prop('checked');
        $('.item-ck').prop('checked',ckall);
        $('.pick-all').prop('checked',ckall);
        arr.forEach(e=>{
            e.isChecked=ckall;
        })
        Kits.setDate('cartData',arr);
    })

    //实现点选控制全选
    $('.item-ck').on('click',function(){
        let ck=$(this).prop('checked');
        $('.pick-all').prop('checked',ck);
        arr.forEach(e=>{
            e.isChecked=ck;
        })
        Kits.setDate('cartData',arr);
    });

    //实现总和计算功能
    function jisuan(){
        let spall=0;
        let slall=0;
        arr.forEach(e=>{
            if(e.isChecked){
                slall+=e.num;
                spall+=e.price*e.num;
            }
        }
        )
        $('.selected').text(slall);
        $('.total-money').text(spall);
    }
    jisuan();

    //实现加减功能
})