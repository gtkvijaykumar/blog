import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/blogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Text>This is Index Screen</Text>
      <TouchableOpacity style={styles.button} onPress={addBlogPost}>
        <Text>Add Post</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  {item.title}-{item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon}></Feather>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" style={styles.headerIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    borderColor: "black",
    height: 25,
    width: 75,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 3,
    borderColor: "black",
    borderTopWidth: 2,
  },
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  headerIcon: {
    fontSize: 28,
    marginRight: 15,
  },
});

export default IndexScreen;
