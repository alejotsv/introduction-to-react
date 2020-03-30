import React from 'react';
import ToDoItem from './ToDoItem';

function MainContent() {  

  return(
    <div className='goals'>
      <h2 >Goals for 2020:</h2>
      <ul>
        <ToDoItem item='Become a Web Developer'/>
        <ToDoItem item='Go to Montreal'/>
        <ToDoItem item='Run a 10k'/>
      </ul>
    </div>
  );
}

export default MainContent;