//Set up a context object that will be used to communicate data to all the children components.
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload); // return a new array with all the blog posts that do not have the id of the blog post that we want to delete

    case "add_blogPost":
      console.log(state);
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "edit_blogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
);
