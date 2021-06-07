import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Alert, StyleSheet, View } from "react-native";
import Topbar from "./Components/Topbar";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  
  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        "https://randomsuer.me/api/?gender=female&results=50"
      );
      setUsers(data.results);
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
      <View style={styles.swipes}></View>
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
