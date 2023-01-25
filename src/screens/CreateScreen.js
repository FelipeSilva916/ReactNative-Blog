import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  console.log(id, state);

  return (
    <View>
      <Text>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
