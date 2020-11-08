import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Main} from './Main';
import {Works} from './Works';
import {Qualification} from './Qualification';
import {Achievements} from './Achievements';
import {Skills} from './Skills';

function Example() {
    return (
        <App/>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
