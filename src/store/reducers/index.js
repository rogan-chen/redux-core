import { combineReducers } from 'redux';
import counter from './Counter';
import counter1 from './Counter1';

/**
 * 将多个组件的reducer合并成一个
 * 同时state树也变成了以下的结构
 */
export default combineReducers({
    counter, // counter => 0
    counter1, // counter1 => { number: 1 }
})