import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { Provider } from './react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Counter />
            <br />
            <Counter1 />
            <br />
            <Counter2 />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);