import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#45b2fc',
  },
  subTitle: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const HeaderInfo = ({ consumed, status }) => (
  <View style={styles.infoArea}>
    <View style={styles.area}>
      <Text style={styles.title}>Meta</Text>
      <Text style={styles.subTitle}>2000ml</Text>
    </View>

    <View style={styles.area}>
      <Text style={styles.title}>Consumido</Text>
      <Text style={styles.subTitle}>
        {consumed}
        {'ml'}
      </Text>
    </View>

    <View style={styles.area}>
      <Text style={styles.title}>Status</Text>
      <Text style={styles.subTitle}>{status}</Text>
    </View>
  </View>
);

HeaderInfo.propTypes = {
  consumed: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default HeaderInfo;
