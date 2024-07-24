import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import User from "./User";

const SuggestFollow = ({ users }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user) => (
          <User
            key={user.username}
            name={user.username}
            avatar={user.avatar}
            isPremium={user.premium}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SuggestFollow;
