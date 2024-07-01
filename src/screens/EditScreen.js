import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/blogContext";

const EditScreen = ({ navigation }) => {
  const { state, saveBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  console.log(id);
  const selectedBlogPost = state.find((blog) => blog.id == id);
  console.log(selectedBlogPost.title);
  const [title, setTitle] = useState(selectedBlogPost.title);
  const [content, setContent] = useState(selectedBlogPost.content);
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Enter New Title</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Enter New Content</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      ></TextInput>
      <Button
        title="Save Blog Post"
        onPress={() => saveBlogPost(id, title, content, () => navigation.pop())}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 5,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default EditScreen;
