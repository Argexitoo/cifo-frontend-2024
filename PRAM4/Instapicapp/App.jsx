import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";
import ListStories from "./components/ListStories";
import SuggestFollow from "./components/SuggestFollow";
import { data } from "./assets/data";

const App = () => {
  const [suggestedFollows, setSuggestedFollows] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setSuggestedFollows(data.suggestedFollows);
    setStories(data.stories);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={styles.heading}>WHO TO FOLLOW</Text>
        <SuggestFollow users={suggestedFollows} />
        <Text style={styles.heading}>LATEST STORIES</Text>
        <ListStories stories={stories} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 20,
    marginTop: 30,
    color: "#404040",
    textShadowColor: "#000",
    textShadowOffset: { height: 1 },
    textShadowRadius: 2,
  },
});

export default App;
