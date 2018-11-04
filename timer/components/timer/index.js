import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#baa07a',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: -150,
  },
});

const Timer = (props) => {
  const { text } = props;
  return <Text style={styles.text}>{text}</Text>;
};

Timer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Timer;
