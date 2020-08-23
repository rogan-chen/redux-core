import {createStore} from './redux';

// 初始值
var initState = 0; 

// 动作
var INCREMENT = 'increment'; // 加一
var DECREMENT = 'decrement'; // 减一

// redux动作中规定必须有一个部位undefined的type属性，用来表示动作类型
function reducer(state = initState, action) {
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state -1;
    default:
      return state;
  }
}

/**
 * 创建唯一仓库
 * 
 * state赋予默认值的两种方法：
 *  1. 在reducer中赋值
 *  2. 在createStore方法的第二个参数赋值
 * 如果同时使用以上两种方式给state赋默认值，以第二种为主
 */
var store = createStore(reducer, initState);

// 订阅仓库中的数据变化，并执行render方法
const unsubscribe = store.subscribe(render);
// 两秒后取消订阅
setTimeout(() => {
  unsubscribe();
}, 2000);

var root = document.getElementById('root');
var incrementBtn = document.getElementById('increment-btn');
var decrementBtn = document.getElementById('decrement-btn');

// 渲染
function render() {
  // 获取仓库中的值，并赋值给root元素
  root.innerHTML = store.getState();
}

// 数值加一 
incrementBtn.addEventListener('click',function(){
  // 派发数值加一的动作
  store.dispatch({type: INCREMENT});
});

// 数值减一
decrementBtn.addEventListener('click',function(){
  // 派发数值减一的动作
  store.dispatch({type: DECREMENT});
});