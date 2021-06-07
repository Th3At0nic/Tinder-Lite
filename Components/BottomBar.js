import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="times" size={27} color="#F06795" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="heart" size={27} color="#F06795" />
      </TouchableOpacity>
      <View />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
});
