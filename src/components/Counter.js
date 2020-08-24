import React, { Component } from 'react'
import {createStore} from 'redux';

// 动作
var INCREMENT = 'increment'; // 加一
var DECREMENT = 'decrement'; // 减一

// redux动作中规定必须有一个部位undefined的type属性，用来表示动作类型
function reducer(state, action) {
    switch (action.type){
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state -1;
      default:
        return state;
    }
}

  /**
 * 创建唯一仓库
 * 
 * state赋予默认值的两种方法：
 *  1. 在reducer中赋值
 *  2. 在createStore方法的第二个参数赋值
 * 如果同时使用以上两种方式给state赋默认值，以第二种为主
 */
var store = createStore(reducer, 0);

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.unsubscribe = null;
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.state = {number: store.getState()};
    }

    componentDidMount() {
        // 订阅仓库中的数据变化，并更新状态
        this.unsubscribe = store.subscribe(() => {
            this.setState({ number: store.getState() })
        });
    }

    componentWillUnmount() {
        // 取消订阅
        this.unsubscribe();
    }
    

    // 数值加一 
    onIncrement() {
        store.dispatch({ type: INCREMENT })
    }

    // 数值减一
    onDecrement() {
        store.dispatch({ type: DECREMENT })
    }

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}
