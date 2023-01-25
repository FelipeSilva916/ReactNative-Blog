//Goal of this component is to show a list of blog posts
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "./context/BlogContext";
import React, { useContext } from "react";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context); //value is the value that was passed to the BlogProvider component in App.js

  return (
    <View>
      <Text>Index Screen</Text>

      <Button title="Add Post" onPress={addBlogPost} />

      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;
