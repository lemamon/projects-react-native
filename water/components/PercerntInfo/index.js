import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';

const styles = StyleSheet.create({
  percentArea: {
    marginTop: 300,
    alignItems: 'center',
  },
  percentText: {
    fontSize: 70,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  btnArea: {
    marginTop: 30,
    alignItems: 'center',
  },
});

const PercerntInfo = ({ percent, onPress }) => (
  <View>
    <View style={styles.percentArea}>
      <Text style={styles.percentText}>
        {percent}
        {'%'}
      </Text>
    </View>
    <View style={styles.btnArea}>
      <Button title="Beber 200ml" onPress={onPress} />
    </View>
  </View>
);

PercerntInfo.propTypes = {
  percent: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PercerntInfo;
