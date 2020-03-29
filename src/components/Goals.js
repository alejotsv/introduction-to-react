import React from 'react';

function Goals() {
  let place = 'Montreal';

  return(
    <ul>
       <li><input class='cbox' type='checkbox' />Become a Web Developer</li>
       <li><input class='cbox' type='checkbox' />Go to {place}</li>
       <li><input class='cbox' type='checkbox' />Run a 10k</li>
      </ul>
  )
}

export default Goals