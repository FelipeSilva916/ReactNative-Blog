//Set up a context object that will be used to communicate data to all the children components.
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload;

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

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogPosts", payload: response.data }); // response.data === [{}, {}, {}]
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    //   dispatch({ type: "add_blogPost", payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
