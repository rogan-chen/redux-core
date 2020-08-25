import React, { Component } from 'react'
import ReduxContext from './context';
import bindActionCreators from '../redux/bindActionCreators';

/**
 * 连接仓库和组件
 * 
 * mapStateToProps 将仓库的state映射到组件的props
 * mapDispatchToProps 将dispatch映射到组件的props
 */
export default function connect(mapStateToProps, mapDispatchToProps) {
    return function(WrappedComponent) {
        return class extends Component {
            // 创建的上下文
            static contextType = ReduxContext;

            constructor(props, context) {
                super(props);
                // Provider传递的store
                this.store = context.store;

                // 初始化当前的state数据
                this.state = mapStateToProps(context.store.getState());
            }

            componentDidMount() {
                // 订阅数据的变化
                this.unsubscribe = this.store.subscribe(() => {
                    // 将mapStateToProps返回的数据保存到this.state中
                    this.setState(mapStateToProps(this.context.store.getState()));
                });
            }

            componentWillUnmount() {
                // 取消订阅
                this.unsubscribe();
            }
            
            render() {
                let actions = {};
                if(typeof mapDispatchToProps === 'function') {
                    actions = mapDispatchToProps(this.store.dispatch);
                }else{
                    actions = bindActionCreators(mapDispatchToProps, this.store.dispatch);
                }

                // 将dispatch/this.state中的数据/actions作为属性传递给组件
                return (
                    <WrappedComponent 
                        {...this.props} 
                        dispatch={this.store.dispatch} 
                        {...this.state} 
                        {...actions}
                    />
                );
            }
        }
    }
}