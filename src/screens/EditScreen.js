import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>Edit Screen - {id} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
