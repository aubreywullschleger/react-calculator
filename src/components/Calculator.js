import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import Buttons from './Buttons';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mostRecentButtonPressed: 0,
      total: 0,
    }
  }

  math () {
    return {
      '+': function(x, y){return x + y},
      '-': function(x, y){return x - y},
      'x': function(x, y){return x * y},
      '/': function(x, y){return x / y},
    }
  }

  buttonPressed = (value) => {
    this.setState({mostRecentButtonPressed: value});
  }

  render () {
    return (
      <div>
        <CalculatorDisplay buttonPressed={this.state.mostRecentButtonPressed} />
        <Buttons buttonPressed={this.buttonPressed} />
      </div>
    )
  }
}

export default Calculator;