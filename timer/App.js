import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Timer from './components/timer';
import Button from './components/button';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30',
  },
  buttons: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80,
  },
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    time: 0,
    buttonText: 'GO',
  };

  timer = null;

  go = () => {
    let buttonText = '';
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      buttonText = 'GO';
    } else {
      this.timer = setInterval(() => {
        let { time } = this.state;
        time += 0.1;
        this.setState({ time });
      }, 100);
      buttonText = 'STOP';
    }
    this.setState({ buttonText });
  };

  clear = () => {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      time: 0,
      buttonText: 'GO',
    });
  };

  render() {
    const { time, buttonText } = this.state;
    return (
      <View style={styles.container}>
        <Image source={require('./images/clock.png')} />
        <Timer text={time.toFixed(1)} />
        <View style={styles.buttons}>
          <Button text={buttonText} onPress={this.go} />
          <Button text="CLEAN" onPress={this.clear} />
        </View>
      </View>
    );
  }
}
