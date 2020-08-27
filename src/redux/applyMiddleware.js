/*** 
 * @Author: Rogan
 * @Date: 2020-08-25
 * @Description: 手写applyMiddleware源码
 */

// middlewares => [Logger, Logger1, Logger2]
export default function applyMiddleware(...middlewares) {
    return function(createStore) {
        return function(reducers, preloadedState) {
            // 原始仓库
            const store = createStore(reducers, preloadedState);
            let dispatch = () => { throw new Error('还不能用') }

            return {
                ...store,
                dispatch,
            };
        }
    }
}