/*** 
 * @Author: Rogan
 * @Date: 2020-08-25
 * @Description: 每次派发动作前后打印新老状态
 */

export default function Logger(store) {
    return function(dispatch) {
        return function(action) {
            console.log('老状态2', store.getState());
            dispatch(action);
            console.log('新状态2', store.getState());
        }
    }
}