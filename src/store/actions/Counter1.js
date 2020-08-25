import * as types from '../action-types';
import store from '../index';
import {bindActionCreators} from '../../redux';

const actions = bindActionCreators({
    // 派发数值加一的动作
    increment: () => ({ type: types.INCREMENT1 }),

    // 派发数值减一的动作
    decrement: () =>({ type: types.DECREMENT1 }),
}, store.dispatch);

export default actions;