import React from 'react';
import ToDoItem from './ToDoItem';

function MainContent() {  

  return(
    <div className='goals'>
      <h2 >Goals for 2020:</h2>
      <ul>
        <ToDoItem />
      </ul>
    </div>
  );
}

export default MainContent;