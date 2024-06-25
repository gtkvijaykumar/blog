import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/blogContext";

const indexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>This is Index Screen</Text>
      <TouchableOpacity style={styles.button} onPress={addBlogPost}>
        <Text>Add Post</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    borderColor: "black",
    height: 25,
    width: 75,
    margin: 10,
  },
});

export default indexScreen;
