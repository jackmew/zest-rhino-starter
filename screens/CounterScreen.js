import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';

@inject('CounterStore') @observer
export default class CounterScreen extends Component {
  render() {
    const Counter = this.props.CounterStore;

    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title={`-`}
          onPress={() => Counter.onMinus()}
        />

        <Text style={styles.text}>
            { Counter.count }
        </Text>

        <Button
          style={styles.button}
          title={`+`}
          onPress={() => Counter.onPlus()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
  },
  text: {
    margin: 10,
  },
  button: {
    height: 10,
    width: 10,
  }
});
