import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LoginScreen } from './views/LoginScreen';

function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

fetch('http://localhost:3001/users')
  .then(response => response.text())
  .then(data => console.log({data}));

export default App;