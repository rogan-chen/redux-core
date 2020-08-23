var count = 0; // 初始值
var root = document.getElementById('root');
var incrementBtn = document.getElementById('increment-btn');
var decrementBtn = document.getElementById('decrement-btn');

// 数值加一 
incrementBtn.addEventListener('click',function(){
  root.innerHTML = ++count;
});

// 数值减一
decrementBtn.addEventListener('click',function(){
  root.innerHTML = --count;
});