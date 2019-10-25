import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => (
  <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to React Native monorepo!</Text>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b0ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff'
  }
});

export default App;
