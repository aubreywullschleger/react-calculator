import React from 'react';

import Button from './Button';

class Buttons extends React.Component {
  constructor (props) {
    super(props);
    this.numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', 'x', '/', '<--', 'CE', 'C'];
  }

  buttonsList () {
    return this.numberButtons.map(num => {
      return (
      <Button
        key={num}
        value={num}
        buttonPressed={this.props.buttonPressed}
      />
      );
    })
  }
  
  render () {
    return (
      <div>
        {this.buttonsList()}
      </div>
    )
  }
}

export default Buttons;