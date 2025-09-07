//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="welcome-text">Hello, React Native!</Text>
      <Text testID="welcome-text">Nama: Dean Dota Petarra</Text>
      <Text testID="welcome-text">NIM: D1041231086</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
