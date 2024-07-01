import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogForm = ({ initValues, onSubmit }) => {
  const [title, setTitle] = useState(initValues.title);
  const [content, setContent] = useState(initValues.content);

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      ></TextInput>
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
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

export default BlogForm;
