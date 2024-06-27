import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/blogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

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
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
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

export default CreateScreen;
