import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/blogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPostId = navigation.getParam("id");
  const selectedBlogPost = state.find((el) => el.id == blogPostId);
  return (
    <View>
      <Text style={styles.text}>
        {selectedBlogPost.title}-{selectedBlogPost.id}
      </Text>
      <Text style={styles.text}>{selectedBlogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => console.log("I am going to be edited")}>
        <Feather name="edit" style={styles.headerIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  headerIcon: {
    fontSize: 28,
    marginRight: 15,
  },
});

export default ShowScreen;
