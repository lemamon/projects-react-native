import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../button';

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
});

const Layout = ({ onPress }) => (
  <Fragment>
    <View style={styles.buttons}>
      <Button bg="#cccccc" size={3} text="c" onPress={onPress} />
      <Button bg="#fd9536" text="/" onPress={onPress} />
    </View>
    <View style={styles.buttons}>
      <Button text="7" onPress={onPress} />
      <Button text="8" onPress={onPress} />
      <Button text="9" onPress={onPress} />
      <Button bg="#fd9536" text="x" onPress={onPress} />
    </View>
    <View style={styles.buttons}>
      <Button text="4" onPress={onPress} />
      <Button text="5" onPress={onPress} />
      <Button text="6" onPress={onPress} />
      <Button bg="#fd9536" text="-" onPress={onPress} />
    </View>
    <View style={styles.buttons}>
      <Button text="1" onPress={onPress} />
      <Button text="2" onPress={onPress} />
      <Button text="3" onPress={onPress} />
      <Button bg="#fd9536" text="+" onPress={onPress} />
    </View>
    <View style={styles.buttons}>
      <Button size={2} text="0" onPress={onPress} />
      <Button text="." onPress={onPress} />
      <Button bg="#fd9536" text="=" onPress={onPress} />
    </View>
  </Fragment>
);

Layout.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Layout;
