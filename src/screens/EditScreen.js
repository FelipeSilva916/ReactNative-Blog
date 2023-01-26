import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { TextInput } from "react-native-gesture-handler";

const EditScreen = ({ navigation }) => {
  const postId = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === postId);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title: </Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      <Text>Edit Content: </Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
