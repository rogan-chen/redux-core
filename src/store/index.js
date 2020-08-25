import { createStore } from '../redux';
import reducers from './reducers';

/**
 * 创建唯一仓库
 * 
 * state赋予默认值的两种方法：
 *  1. 在reducer中赋值
 *  2. 在createStore方法的第二个参数赋值
 * 如果同时使用以上两种方式给state赋默认值，以第二种为主
 */
var store = createStore(reducers, {});

export default store;