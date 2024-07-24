import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Picture = ({ photo, author, timestamp }) => {
  const photoTime = new Date(timestamp);
  const today = new Date();
  const diffTime = Math.abs(today - photoTime);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let timeText;
  if (diffDays === 0) {
    timeText = "today";
  } else if (diffDays === 1) {
    timeText = "yesterday";
  } else {
    timeText = `${diffDays} days ago`;
  }

  return (
    <View>
      <Image source={{ uri: photo }} style={styles.picture} />
      <Text style={styles.caption}>
        Posted {timeText} by {author}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    width: "100%",
    height: 400,
  },
  caption: {
    marginTop: 5,
    fontSize: 12,
    color: "#58a",
    padding: 10,
  },
});

export default Picture;
