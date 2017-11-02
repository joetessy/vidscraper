import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi</div>;
};


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.querySelector('#root'));
});
