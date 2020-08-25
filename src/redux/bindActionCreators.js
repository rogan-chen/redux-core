
/**
 * 将actionCreators和dispatch绑定在一起
 * 
 * 
 * actionCreators 可以是函数，也可以是对象：
 * const action = () => ({ type: types.INCREMENT1 });
 * const actions = {
 *   // 派发数值加一的动作
 *   increment: () => ({ type: types.INCREMENT1 }),
 *
 *   // 派发数值减一的动作
 *   decrement: () => ({ type: types.INCREMENT1 }),
 * };
 * 
 * 
 * bindActionCreators 返回的数据：
 * const action = () => dispatch({ type: types.INCREMENT1 });
 * const actions = {
 *   // 派发数值加一的动作
 *   increment: () => dispatch({ type: types.INCREMENT1 }),
 *
 *   // 派发数值减一的动作
 *   decrement: () => dispatch({ type: types.INCREMENT1 }),
 * };
 */
export default function bindActionCreators(actionCreators = {}, dispatch) {
    // 如果actionCreators是函数
    if (typeof action === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }

    // 如果actionCreators是对象，遍历所有的key，并返回拼接的对象
    const result = {};
    Object.keys(actionCreators).forEach(key => {
        const actionCreator = actionCreators[key];
        result[key] = bindActionCreator(actionCreator, dispatch);
    });
    return result;
}

function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    } 
}