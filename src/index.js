import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root');

function Goals() {
  return(
    <div>
      <h3>Goals for 2020:</h3>
      <ul>
        <li>Become a Web Developer</li>
        <li>Go to Madrid</li>
        <li>Run a 10K</li>
      </ul>
    </div>
  );
}


ReactDOM.render(
  <Goals />,
  root
);