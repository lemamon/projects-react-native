import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from './components/layout';
import Panel from './components/panel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    result: '0',
  };

  handleClick = (b) => {
    let { result } = this.state;
    switch (b) {
      case 'c':
        result = '0';
        break;
      case '=':
        result = eval(result);
        break;
      default:
        result = result !== '0' ? result + b : b;
    }

    this.setState({ result });
  };

  render() {
    const { result } = this.state;
    return (
      <View style={styles.container}>
        <Panel>{result}</Panel>
        <Layout onPress={this.handleClick} />
      </View>
    );
  }
}
