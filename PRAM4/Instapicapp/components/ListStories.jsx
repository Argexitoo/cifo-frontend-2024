import React from "react";
import { ScrollView } from "react-native";
import Story from "./Story";

const ListStories = ({ stories }) => {
  return (
    <ScrollView>
      {stories.map((story) => (
        <Story
          key={story.id}
          storyId={story.id}
          photo={story.picture}
          author={story.username}
          timestamp={story.timestamp}
          comments={story.comments}
        />
      ))}
    </ScrollView>
  );
};

export default ListStories;
