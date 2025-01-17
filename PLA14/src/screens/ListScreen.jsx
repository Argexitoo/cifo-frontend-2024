import { useEffect, useState } from "react";
// TODO #5
// Afegeix tot el que calgui dins de les claus de l'import a la línia següent.
import { View, Text, FlatList, StyleSheet } from "react-native";
import Character from "../components/Character";
import localData from "../data/data.json";
import emptyData from "../data/empty.json";
import Colors from "../common/Colors";

const ListScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  // Data -- Using real API.
  // const api = 'https://rickandmortyapi.com/api/character'
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(api)
  //     const data = await res.json()
  //     setCharacters(data.results)
  //   }
  //   fetchData()
  // }, [])

  // Data -- Local file to prevent API calls.
  useEffect(() => {
    const fetchData = async () => {
      setCharacters(localData.results);
    };
    fetchData();
  }, []);

  // Data -- Local file to test empty results.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setCharacters(emptyData.results);
  //   };
  //   fetchData();
  // }, []);

  const separator = () => <View style={styles.separator} />;

  // TODO #3
  // Millora la UI que es mostra en cas de no rebre dades, aquest simple Text queda molt pobre.
  if (characters.length === 0) {
    return (
      <View style={styles.nodataContainer}>
        <Text style={styles.nodataText}>No data available</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      renderItem={({ item }) => (
        <Character
          gender={item.gender}
          // TODO #4
          // Revisa Character.jsx i afegeix aquí les props que manquen.
          name={item.name}
          status={item.status}
          species={item.species}
          image={item.image}
          onPress={() =>
            navigation.navigate("Detail", { id: item.id, name: item.name })
          }
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={separator}
    />
  );
};

const styles = StyleSheet.create({
  nodataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nodataText: {
    fontSize: 18,
    color: Colors.primary,
  },
  separator: {
    height: 0.6,
    left: 16,
    backgroundColor: Colors.primary,
  },
});

export default ListScreen;
