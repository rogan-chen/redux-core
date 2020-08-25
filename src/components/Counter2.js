import React, { Component } from 'react';
import actions from '../store/actions/Counter2';
import { connect } from 'react-redux';

class Counter2 extends Component {
    render() {
        console.log('Counter2 render')
        return (
            <div>
                <div>Counter2组件：{this.props.number}</div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

const mapStateToProps = ({ counter2 }) => ({ ...counter2 });
const mapDispatchToProps = dispatch => ({
    onIncrement: (...args) => dispatch(actions.increment),
    onDecrement: (...args) => dispatch(actions.decrement),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);