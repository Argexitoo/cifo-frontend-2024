import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Header';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handlePress = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>My first app</Text>
        <Button
          title="Click me!"
          onPress={handlePress}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
});
