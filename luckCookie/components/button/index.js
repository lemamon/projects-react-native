import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {
  styles = () => {
    const { color } = this.props;

    return StyleSheet.create({
      button: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: color,
        backgroundColor: 'transparent',
      },
      buttonArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color,
        fontSize: 14,
        fontWeight: 'bold',
      },
    });
  };

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={this.styles().button} onPress={onPress}>
        <View style={this.styles().buttonArea}>
          <Text style={this.styles().buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'blue',
};

export default Button;
