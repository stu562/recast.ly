// TODO: Render the `App` component to the DOM
// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/App.js';
import data from './data/exampleVideoData.js';

ReactDOM.render(<App data={data}/> , document.getElementById('app'));