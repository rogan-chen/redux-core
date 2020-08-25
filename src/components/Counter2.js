import React, { Component } from 'react';
import actions from '../store/actions/Counter2';
import { connect } from '../react-redux';

class Counter2 extends Component {
    render() {
        return (
            <div>
                <div>Counter2组件：{this.props.number}</div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

// 将仓库中的state映射到组件的props上
const mapStateToProps = ({ counter2 }) => ({ ...counter2 });

// 将dispatch映射到组件的props上
const mapDispatchToProps = dispatch => ({
    onIncrement: (...args) => dispatch(actions.increment(...args)),
    onDecrement: (...args) => dispatch(actions.decrement(...args)),
});

// connect是一个高阶函数，用来连接store和组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter2);