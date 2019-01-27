import React from 'react';

function Button (props) {
  return (
    <button type="button" onClick={() => props.buttonPressed(props.value)}>{props.value}</button>
  )
}

export default Button;