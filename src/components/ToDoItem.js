import React from 'react';

function ToDoItem(props) {    
  
  return(    
    <li><input className='cbox' type='checkbox' />{props.item}</li>
  )
}

export default ToDoItem