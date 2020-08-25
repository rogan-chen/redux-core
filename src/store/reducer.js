import * as types from './action-types';

// redux动作中规定必须有一个部位undefined的type属性，用来表示动作类型
function reducer(state, action) {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default reducer;