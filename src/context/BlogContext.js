//Set up a context object that will be used to communicate data to all the children components.
import React, { useReducer, useState } from "react";
const BlogContext = React.createContext(); //Object with 2 properties: Provider and Consumer. Responsible for communicating data to all the children components.

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []); //This is the data that will be passed to all the children components.

  const addBlogPost = () => {
    dispatch({ type: "add_blogPost" });
  };

  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost: addBlogPost }} //This is the value that will be passed to all the children components.
    >
      {children}
    </BlogContext.Provider>
  );
}; //children is a prop that is automatically passed to a component. It is a reference to all the child components nested inside of the parent component.

export default BlogContext;
