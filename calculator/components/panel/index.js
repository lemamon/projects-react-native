import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
    flex: 1,
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'right',
  },
});

const Panel = ({ children }) => (
  <View style={styles.buttons}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

Panel.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Panel;
