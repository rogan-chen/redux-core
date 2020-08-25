import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';

ReactDOM.render(
    <React.Fragment>
        <Counter/>
        <br/>
        <Counter1/>
    </React.Fragment>, 
    document.getElementById('root')
);