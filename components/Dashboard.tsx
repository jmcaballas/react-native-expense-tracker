import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232a44",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default Dashboard;
