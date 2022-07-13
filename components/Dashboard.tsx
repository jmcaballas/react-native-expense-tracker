import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import { nanoid } from "nanoid";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      amount: 500,
      name: "Buffet",
      description: "Yummy!",
      category: "Food",
      date: "July 13, 2022",
    },
    {
      id: nanoid(),
      amount: 200,
      name: "Grab",
      description: "Home to Work",
      category: "Transportation",
      date: "July 13, 2022",
    },
    {
      id: nanoid(),
      amount: 1000,
      name: "Globe",
      description: "June Billing",
      category: "Bills",
      date: "July 13, 2022",
    },
  ]);

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
