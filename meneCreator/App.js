import React, { Component } from 'react';
import {
  TextInput, StyleSheet, Text, View, Image,
} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
  },
  inputArea: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 40,
    margin: 20,
    padding: 10,
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0,
  },
  text: {
    fontSize: 25,
    color: '#ffffff',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70,
    zIndex: 1,
  },
  text1: {},
  text2: {
    marginTop: -70,
  },
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    text1: '',
    text2: '',
  };

  replaceVogals = (text) => {
    let newText = text.toLowerCase();

    newText = newText.replace(/(a|e|i|o|u)/g, 'i');
    newText = newText.replace(/(ã|á|ä|à)/g, 'i');
    newText = newText.replace(/(é|è)/g, 'i');
    newText = newText.replace(/(ó|ò|õ|ö)/g, 'i');
    newText = newText.replace(/(ú|ù|ü)/g, 'i');

    return newText;
  };

  write = (text) => {
    this.setState({
      text1: text,
      text2: this.replaceVogals(text),
    });
  };

  render() {
    const { text1, text2 } = this.state;

    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Criador de Mimimi</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite seu mimimi"
            onChangeText={this.write}
          />
        </View>
        <View style={styles.area}>
          <Text style={[styles.text, styles.text1]}>{text1.toUpperCase()}</Text>
          <Image style={styles.image} source={require('./images/mimimi.jpg')} />
          <Text style={[styles.text, styles.text2]}>{text2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}
