import React, { Component } from 'react'
import ReduxContext from './context';

export default class Provider extends Component {
    render() {
        // 通过context向子组件传递store
        return (
            <ReduxContext.Provider value={{ store: this.props.store }}>
                {this.props.children}
            </ReduxContext.Provider>
        )
    }
}
