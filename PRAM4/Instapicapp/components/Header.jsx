import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Instapicapp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100, // Ajusta la altura según sea necesario
    backgroundColor: "#58a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingTop: 40,
  },
});

export default Header;
