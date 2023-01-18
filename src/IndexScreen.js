//Goal of this component is to show a list of blog posts
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import BlogContext from "./context/BlogContext";
import React, { useContext } from "react";

const IndexScreen = () => {
  const value = useContext(BlogContext); //value is the value that was passed to the BlogProvider component in App.js
  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;
