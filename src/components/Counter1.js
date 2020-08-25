import React, { Component } from 'react'
import store from '../store';
import actions from '../store/actions/Counter1';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.unsubscribe = null;
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.state = { number: store.getState().counter1.number };
    }

    componentDidMount() {
        // 订阅仓库中的数据变化，并更新状态
        this.unsubscribe = store.subscribe(() => {
            this.setState({ number: store.getState().counter1.number });
        });
    }

    componentWillUnmount() {
        // 取消订阅
        this.unsubscribe();
    }

    // 数值加一 
    onIncrement() {
        actions.increment()
    }

    // 数值减一
    onDecrement() {
        actions.decrement()
    }

    render() {
        return (
            <div>
                <div>Counter1组件：{this.state.number}</div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}
