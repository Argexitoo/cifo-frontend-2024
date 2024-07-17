import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to my first app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    fontSize: 12,
    backgroundColor: '#f0f',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerText: {
    fontSize: 20
  },
});

export default Header;
