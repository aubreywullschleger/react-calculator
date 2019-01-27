import React from 'react';

function CalculatorDisplay (props) {
    return (
      <div>
        <input type="text" value={props.buttonPressed} readOnly />
      </div>
    )
}

export default CalculatorDisplay;