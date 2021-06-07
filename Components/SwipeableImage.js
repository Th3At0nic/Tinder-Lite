import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function SwipeableImage({ user }) {
  return (
    <View>
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
    </View>
  );
}
const styles = StyleSheet.create({
  photo: {
    height: "400px",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
