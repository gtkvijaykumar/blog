import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context } from "../context/blogContext";

const CreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Create Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default CreateScreen;
