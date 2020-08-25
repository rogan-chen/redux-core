/**
 * 创建仓库方法
 */

import isPlainObject from './util/isPlainObject';
import ActionTypes from './util/actionTypes';

/**
 * reducer 必须是一个函数
 * preloadedState state的初始值
 */
export default function createStore(reducer, preloadedState) {

    // 判断reducer
    if (typeof reducer !== 'function') {
        throw new Error('reducer必须是一个函数');
    }

    let currentReducer = reducer; // 当前的处理器
    let currentState = preloadedState; // 当前状态
    let currentListeners = []; // 当前的监听函数

    // 获取当前状态
    function getState() {
        return currentState;
    }

    // 派发动作
    function dispatch(action) {
        // 判断action是否纯对象
        if(!isPlainObject(action)) {
            throw new Error('action必须是一个纯对象');
        }

        // action.type不能是undefined
        if (typeof action.type === 'undefined') {
            throw new Error('action的type不能是undefined')
        }

        // 调用reducer，将结果赋值给当前状态
        currentState = currentReducer(currentState, action);
        
        // 执行监听函数
        currentListeners.forEach(listener => listener());

        return action;
    }

    // 监听状态变化，函数订阅执行
    function subscribe(listenr) {
        currentListeners.push(listenr);

        // 取消订阅
        let subscribed = true;
        return function unsubscribe() {
            if(!subscribed) return; // 防止重复取消订阅
            const index = currentListeners.indexOf(listenr);
            currentListeners.splice(index, 1);
            subscribed = false;
        }
    }

    // 派发初始化动作，这样state就会获取到默认值
    dispatch({ type: ActionTypes.INIT })

    return {
        getState,
        dispatch,
        subscribe,
    };
}