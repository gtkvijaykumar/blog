import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/blogContext";

const indexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>This is Index Screen</Text>
      <FlatList
        data={value}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default indexScreen;
