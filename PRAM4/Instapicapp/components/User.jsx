import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const User = ({ name, avatar, isPremium }) => {
  return (
    <View style={styles.user}>
      <Image source={{ uri: avatar }} style={styles.userImage} />
      <Text style={styles.userName}>{name}</Text>
      {isPremium && <MaterialIcons name="favorite" size={20} color="#d34" />}
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  userImage: {
    borderRadius: 50,
    width: 75,
    height: 75,
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    color: "#58a",
  },
});

export default User;
