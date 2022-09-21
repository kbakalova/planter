//WITHOUT REACT
// import _ from 'lodash';

// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

//PREVIOUS VERSIONS OF REACT
// import React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './components/App.jsx';
// require('./mystyles.scss');

// ReactDOM.render(<App />, document.getElementById('app'));

//REACT 18
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
require('./mystyles.scss');
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);