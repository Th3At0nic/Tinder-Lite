import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Alert, StyleSheet, Text, View } from "react-native";
import Topbar from "./Components/Topbar";
import SwipeableImage from "./Components/SwipeableImage";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?gender=female&results=50"
      );
      setUsers(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting users", " ", [
        { text: "Retry", onPress: () => fetchUsers() },
      ]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Topbar />
      <View style={styles.swipes}>
        {users.length > 1 && <SwipeableImage user={users[currentIndex]} />}
        {users.length}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
