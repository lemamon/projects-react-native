import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text,
} from 'react-native';
import Button from './components/button';
import { phrases } from './datasource';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 17,
    color: '#b59619',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: '',
  };

  breakCookie = () => {
    const random = Math.floor(Math.random() * phrases.length);
    const text = `"${phrases[random]}"`;

    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./images/cookie.png')} />
        <Text style={styles.text}>{text}</Text>
        <Button text="Quebrar Biscoito" color="#b59619" onPress={this.breakCookie} />
      </View>
    );
  }
}
