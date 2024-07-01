import createDataContext from "./createDataContext";

const blogPostReducer = (state, action) => {
  switch (action.type) {
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

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
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
  { addBlogPost, deleteBlogPost, saveBlogPost },
  [
    { id: 10, title: "Blog Post #1", content: "Blog Post Content #1" },
    { id: 20, title: "Blog Post #2", content: "Blog Post Content #2" },
    { id: 30, title: "Blog Post #3", content: "Blog Post Content #3" },
  ]
);
