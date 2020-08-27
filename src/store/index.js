import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Logger from '../middlewares/redux-logger';
import Logger1 from '../middlewares/redux-logger/index1';
import Logger2 from '../middlewares/redux-logger/index2';

/**
 * 创建唯一仓库
 * 
 * state赋予默认值的两种方法：
 *  1. 在reducer中赋值
 *  2. 在createStore方法的第二个参数赋值
 * 如果同时使用以上两种方式给state赋默认值，以第二种为主
 */
var store = applyMiddleware(Logger, Logger1, Logger2)(createStore)(reducers, {});

export default store;