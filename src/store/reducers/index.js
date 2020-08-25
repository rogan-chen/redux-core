import { combineReducers } from '../../redux';
import counter from './Counter';
import counter1 from './Counter1';
import counter2 from './Counter2';

/**
 * 将多个组件的reducer合并成一个
 * 同时state树也变成了以下的结构
 */
export default combineReducers({
    counter, // counter初始值 => 0
    counter1, // counter1初始值 => { number: 1 }
    counter2, // counter2初始值 => { number: 1, age: 10 }
})