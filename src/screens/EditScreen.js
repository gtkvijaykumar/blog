import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/blogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation }) => {
  const { state, saveBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const selectedBlogPost = state.find((blog) => blog.id == id);

  return (
    <BlogForm
      initValues={{
        title: selectedBlogPost.title,
        content: selectedBlogPost.content,
      }}
      onSubmit={(newTitle, newContent) =>
        saveBlogPost(id, newTitle, newContent, () => navigation.pop())
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
