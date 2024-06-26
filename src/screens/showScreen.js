import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context } from "../context/blogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPostId = navigation.getParam("id");
  const selectedBlogPost = state.find((el) => el.id == blogPostId);
  console.log(selectedBlogPost);
  return (
    <View>
      <Text style={styles.text}>
        {selectedBlogPost.title}-{selectedBlogPost.id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default ShowScreen;
