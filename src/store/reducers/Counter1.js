import * as types from '../action-types';

const initState = { number: 1 };

// redux动作中规定必须有一个部位undefined的type属性，用来表示动作类型
function reducer(state = initState, action) {
    switch (action.type) {
        case types.INCREMENT1:
            return { ...state, number: state.number + 1 };
        case types.DECREMENT1:
            return { ...state, number: state.number - 1 };
        default:
            return state;
    }
}

export default reducer;