// 把页面顶上的购物车的气泡实现
let arr = Kits.getDate('cartData');
let total = 0;
arr.forEach(e=>{
  total += e.num;
})
$('.count').text(total);