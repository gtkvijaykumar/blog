import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/blogContext";
import BlogForm from "../components/BlogForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogForm
      initValues={{ title: "", content: "" }}
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate("Index"))
      }
    ></BlogForm>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
