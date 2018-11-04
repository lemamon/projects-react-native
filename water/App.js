import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import PercerntInfo from './components/PercerntInfo';
import HeaderInfo from './components/HeaderInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  bgImage: {
    flex: 1,
    width: null,
  },
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    percent: 0,
    consumed: 0,
    status: 'Ruim',
  };

  addCup = () => {
    let { consumed, percent, status } = this.state;
    consumed += 200;
    percent = Math.floor((consumed / 2000) * 100);
    status = percent >= 100 ? 'Bom' : 'Ruim';
    this.setState({ consumed, percent, status });
  };

  render() {
    const { percent, consumed, status } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('./assets/images/waterbg.png')}>
          <View>
            <HeaderInfo consumed={consumed} status={status} />
            <PercerntInfo percent={percent} onPress={this.addCup} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
