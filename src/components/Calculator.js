import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import Buttons from './Buttons';

class Calculator extends React.Component {
  render () {
    return (
      <div>
        <CalculatorDisplay />
        <Buttons />
      </div>
    )
  }
}

export default Calculator;