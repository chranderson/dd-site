import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root'));

registerServiceWorker();
