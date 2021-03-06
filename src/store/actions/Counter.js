import * as types from '../action-types';
import store from '../index';

const actions = {
    // 派发数值加一的动作
    increment: () => store.dispatch({ type: types.INCREMENT }),

    // 派发数值减一的动作
    decrement: () => store.dispatch({ type: types.DECREMENT }),
};

export default actions;