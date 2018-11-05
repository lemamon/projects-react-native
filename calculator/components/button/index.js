import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {
  styles = () => {
    const { size, bg } = this.props;
    return StyleSheet.create({
      container: {
        flex: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#999999',
        borderWidth: 0.5,
        backgroundColor: bg,
        borderRadius: 5,
      },
      text: {
        fontSize: 18,
      },
    });
  };

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(text)} style={this.styles().container}>
        <Text style={this.styles().text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  bg: PropTypes.string,
};

Button.defaultProps = {
  size: 1,
  bg: '#e0e0e0',
};

export default Button;
