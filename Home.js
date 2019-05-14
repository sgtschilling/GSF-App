import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/dead-lift.jpg')} style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
          <View style={styles.panel}>
            <Text style={styles.title}>ProFitness</Text>
            <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>Sign in</Button>
            <Text style={styles.register}>Not a member?</Text>
          </View>
          <View style={styles.trademark}>
            <Text style={styles.register}>A ProFusion product ®2019</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2274f7',
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    margin: 'auto',
    padding: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: '100%',
    height: '100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    alignSelf: 'flex-end'
  },
  register: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    margin: 36,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2274f7',
  },
  trademark: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24,
  }
});