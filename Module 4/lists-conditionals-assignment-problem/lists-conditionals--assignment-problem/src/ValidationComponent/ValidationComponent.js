import React from 'react';

const validation = (props) => {

let x = 'text too short';

if ( props.value >= 5){
  x = ( <p> text long enough </p> )
}

return (
  <div className = 'ValidationComponent'>
  {x}
  </div>

  )}

export default validation;
