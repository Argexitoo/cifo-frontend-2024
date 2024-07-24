import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Comment = ({ author, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>💬{author} said:</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginVertical: 5,
  },
  author: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#808080",
  },
  text: {
    fontSize: 14,
    marginLeft: 20,
    fontWeight: "bold",
  },
});

export default Comment;
