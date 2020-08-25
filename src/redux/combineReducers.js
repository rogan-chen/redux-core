/**
 * 将多个reducer合并成一个
 */

export default function (reducers) {
    // 当状态改变时，依次执行每个reducer，并返回新的state
    const nextState = {};
    return function (state = {}, action) {
        const reducerKeys = Object.keys(reducers); // reducerKeys => ['counter', 'counter1']
        reducerKeys.forEach(key => {
            const reducer = reducers[key]; // 遍历每个reducer
            const previousStateForKey = state[key]; // 根据reducer的key获取state
            const nextStateForKey = reducer(previousStateForKey, action); // 获取更新后的state
            nextState[key] = nextStateForKey; // 保存更新后的state
        });

        // nextState => { counter: 0, counter1: { number: 1 } }
        return nextState;
    }
}