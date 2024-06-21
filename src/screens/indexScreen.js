import React,{useContext} from "react";
import { Text,View,StyleSheet } from "react-native";
import BlogContext from "../context/blogContext";

const indexScreen = () => {
const value = useContext(BlogContext);
    return( <View>
        <Text>This is Index Screen</Text>
        <Text>{value}</Text>
    </View>);

};

const styles = StyleSheet.create( {

});

export default indexScreen;