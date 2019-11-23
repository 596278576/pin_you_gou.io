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
        jisuan();
    })


    $('.item-list').on('click','.item-ck',function(){
        let ck=$('.item-ck').length==$('.item-ck:checked').length;
        $('.pick-all').prop('checked',ck);
        let pid=$(this).parents('.item').attr('data-id');
        let isChecked=$(this).prop('checked');
        arr.forEach(e=>{
            if(e.pID==pid){
                e.isChecked=isChecked
            }
        })
        Kits.setDate('cartData',arr);
        jisuan();
    })

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
    $('.item-list').on('click','.add',function(){
        let number=$(this).prev().val();
        $(this).prev().val(++number);
        let id=$(this).parents('.item').attr('data-id');
        let obj = arr.find(e=>{
            return e.pID == id;
          });
        obj.num=parseInt(number);
        Kits.setDate('cartData',arr);
        jisuan();
        $(this).parents('.item').find('.computed').text(obj.num*obj.price);
    })
    $('.item-list').on('click','.reduce',function(){
        let number=$(this).next().val();
        $(this).next().val(--number);
        let id=$(this).parents('.item').attr('data-id');
        let obj = arr.find(e=>{
            return e.pID == id;
          });
        obj.num=parseInt(number);
        Kits.setDate('cartData',arr);
        jisuan();
        $(this).parents('.item').find('.computed').text(obj.num*obj.price);

    })

    //实现删除功能
    $('.item').on('click','.item-del',function(){
      let r=confirm('确认删除吗');
      if(r){
        $(this).parents('.item').remove()
        let id=$(this).parents('.item').attr('data-id');
        arr=arr.filter(e=>{
          return e.pID!=id;
        })
        Kits.setDate('cartData',arr);
      }

    })

    //手动输入数字
    $('.item').on('blur','.number',function(){
      let num=$(this).prop('value');
      if (num.trim().length === 0 || isNaN(num) || parseInt(num) <= 0) {
        alert('商品数量不正确，请输入一个阿拉伯数字');
        return;
      }
      num=parseInt(num);
      let id=$(this).parents('.item').attr('data-id');
      let obj=arr.find(e=>{
        return e.pID==id;
      })
      obj.num=num;
      Kits.setDate('cartData',arr);
      jisuan();
      $(this).parents('.item').find('.computed').text(obj.num*obj.price);
    })

    // 回车键确认数量
    $('.item').on('keyup','.number',function(e){
      if(e.keyCode==13){
        let num=$(this).prop('value');
        if (num.trim().length === 0 || isNaN(num) || parseInt(num) <= 0) {
          alert('商品数量不正确，请输入一个阿拉伯数字');
          return;
        }
        num=parseInt(num);
        let id=$(this).parents('.item').attr('data-id');
        let obj=arr.find(e=>{
          return e.pID==id;
        })
        obj.num=num;
        Kits.setDate('cartData',arr);
        jisuan();
        $(this).parents('.item').find('.computed').text(obj.num*obj.price);
      }
    })

})