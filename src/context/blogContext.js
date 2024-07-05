import axios from "axios";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload;
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogPost":
      return state.filter((el) => el.id != action.payload);
    case "save_blogPost":
      return state.map((blogPost) =>
        blogPost.id == action.payload.id ? action.payload : blogPost
      );
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("blogposts");
    dispatch({ type: "get_blogPosts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("blogposts", { title, content });
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const saveBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "save_blogPost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogPostReducer,
  { addBlogPost, deleteBlogPost, saveBlogPost, getBlogPosts },
  []
);
