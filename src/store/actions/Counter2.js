import * as types from '../action-types';

const actions = {
    // 数值加一的动作
    increment() {
        return { type: types.INCREMENT2 };
    },

    // 数值减一的动作
    decrement() {
        return { type: types.DECREMENT2 };
    },
}

export default actions;