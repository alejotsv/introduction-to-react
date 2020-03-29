import React from 'react';

function MainContent() {
  return(
    <div className='goals'>
      <h2>Goals for 2020:</h2>
      <ul>
       <li><input class='cbox' type='checkbox' />Become a Web Developer</li>
       <li><input class='cbox' type='checkbox' />Go to Montreal</li>
       <li><input class='cbox' type='checkbox' />Run a 10k</li>
      </ul>
    </div>
  );
}

export default MainContent;