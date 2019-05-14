import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Programs List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 36,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2274f7',
  },
});