import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculation: {
        leftOperand: '',
        rightOperand: '',
        operation: '',
      },
      displayText: '0',
    };
  }

  /* Function is called when a number button is pressed. */
  onNumberButtonPress = (value) => {
    const calc = this.state.calculation;

    // First time we are entering a number or we've already entered a number
    // and haven't specified an operator (so we continue updating the 1st number).
    if (calc.leftOperand === '' || calc.operation === '') {
      calc.leftOperand += value.toString();
      this.setState({ displayText: calc.leftOperand });
    } else { // Otherwise we're updating the 2nd number
      calc.rightOperand += value.toString();
      this.setState({ displayText: calc.rightOperand });
    }
    this.setState({ calculation: calc });
  };

  /* Function is called when an operation (+, -, *, /) is pressed. */
  onOperationButtonPress = (operation) => {
    const calc = this.state.calculation;

    // You can only specify an operation in-between numbers.
    //
    // if leftOperand === '' means we haven't specified the first number.
    // if rightOperand !== '' means we've already specified an operator
    if (calc.leftOperand === '' || calc.rightOperand !== '') {
      return null;
    }

    calc.operation = operation;
    this.setState({ calculation: calc });
  };

  /* Function is called when '=' is pressed. */
  onCalculate = () => {
    const calc = this.state.calculation;

    // Convert the string into an integer before applying operations.
    const left = parseInt(calc.leftOperand, 10);
    const right = parseInt(calc.rightOperand, 10);

    // Perform the operation on the left and right side.
    switch (calc.operation) {
      case '-':
        this.setState({ displayText: (left - right).toString() });
        break;
      case '+':
        this.setState({ displayText: (left + right).toString() });
        break;
      case '*':
        this.setState({ displayText: (left * right).toString() });
        break;
      case '/':
        this.setState({ displayText: (left / right).toString() });
        break;
    }

    // Reset the calculation state now that we've finished.
    //
    // We need to do this to make sure that this current calculation doesn't affect
    // the next calculation - otherwise we'll mix up results.
    this.setState({
      calculation: {
        leftOperand: '',
        rightOperand: '',
        operation: '0',
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* This is how you write a comment inside the `render` function. */}
        <Text style={{ fontSize: 28 }}>{this.state.displayText}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title="1" onPress={() => { this.onNumberButtonPress(1); }} />
          <Button title="2" onPress={() => { this.onNumberButtonPress(2); }} />
          <Button title="3" onPress={() => { this.onNumberButtonPress(3); }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button title="4" onPress={() => { this.onNumberButtonPress(4); }} />
          <Button title="5" onPress={() => { this.onNumberButtonPress(5); }} />
          <Button title="6" onPress={() => { this.onNumberButtonPress(6); }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button title="7" onPress={() => { this.onNumberButtonPress(7); }} />
          <Button title="8" onPress={() => { this.onNumberButtonPress(8); }} />
          <Button title="9" onPress={() => { this.onNumberButtonPress(9); }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button title="0" onPress={() => { this.onNumberButtonPress(0); }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button title="+" onPress={() => { this.onOperationButtonPress('+'); }} />
          <Button title="-" onPress={() => { this.onOperationButtonPress('-'); }} />
          <Button title="/" onPress={() => { this.onOperationButtonPress('/'); }} />
          <Button title="*" onPress={() => { this.onOperationButtonPress('*'); }} />
        </View>
        <Button title="=" onPress={this.onCalculate} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
};

// This tells React Native that your app begins here. You can kind of think this
// like your "main function" in Java.
//
// Further reading: https://facebook.github.io/react-native/docs/appregistry.html
AppRegistry.registerComponent('calculator', () => Calculator);
