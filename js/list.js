$(() => {
  let li;
  phoneData.forEach(e => {
    li += `<li class="goods-list-item">
        <a href="detail.html?${e.pID}">
          <div class="item-img">
            <img src="${e.imgSrc}" alt="">
          </div>
          <div class="item-title">
          ${e.name}
          </div>
          <div class="item-price">
            <span class="now">¥${e.price}</span> <s>￥6988</s>
          </div>
          <div class="sold">
            <span> 已售 <em>${e.percent}% </em></span>
            <div class="scroll">
              <div class="per" style="width:${e.percent}%"></div>
            </div>
            <span>剩余<i>${e.left}</i>件</span>
          </div>
        </a>
        <a href="#" class="buy">
          查看详情
        </a>
      </li>`;
  });
  $(".goods-list>ul").append(li);
});
