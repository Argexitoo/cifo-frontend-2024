import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Picture from "./Picture";
import Comment from "./Comment";

const Story = ({
  // storyId,
  photo,
  author,
  timestamp,
  comments,
}) => {
  return (
    <View style={styles.container}>
      <Picture photo={photo} author={author} timestamp={timestamp} />
      <ScrollView style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            author={comment.username || comment.author}
            text={comment.comment || comment.text}
            timestamp={comment.timestamp}
          />
        ))}
      </ScrollView>
      <Text style={styles.separator}>🔶</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  commentsContainer: {
    marginVertical: 10,
  },
  separator: {
    textAlign: "center",
  },
});

export default Story;
