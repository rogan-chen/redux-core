var count = 0; // 初始值
var counterValue = document.getElementById('counter-value');
var incrementBtn = document.getElementById('increment-btn');
var decrementBtn = document.getElementById('decrement-btn');

// 计数器加一
incrementBtn.addEventListener('click',function() {
    count++;
    counterValue.innerHTML = count;
});

// 计数器减一
decrementBtn.addEventListener('click',function(){
    count--;
    counterValue.innerHTML = count;
})