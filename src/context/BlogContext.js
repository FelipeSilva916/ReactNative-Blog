//Set up a context object that will be used to communicate data to all the children components.
import React from "react";
const BlogContext = React.createContext(); //Object with 2 properties: Provider and Consumer. Responsible for communicating data to all the children components.

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
}; //children is a prop that is automatically passed to a component. It is a reference to all the child components nested inside of the parent component.
