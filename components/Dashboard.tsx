import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import uuid from "react-native-uuid";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([
    {
      id: uuid.v4(),
      amount: 500,
      name: "Buffet",
      description: "Yummy!",
      category: "Food",
      date: "July 13, 2022",
    },
    {
      id: uuid.v4(),
      amount: 200,
      name: "Grab",
      description: "Home to Work",
      category: "Transportation",
      date: "July 13, 2022",
    },
    {
      id: uuid.v4(),
      amount: 1000,
      name: "Globe",
      description: "June Billing",
      category: "Bills",
      date: "July 13, 2022",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        // style={styles.container}
        data={expenses}
        renderItem={({ item }) => {
          return (
            <View style={styles.expenseContainer}>
              <View>
                <Text style={styles.expenseName}>{item.name}</Text>
                <Text style={styles.expenseDetail}>{item.description}</Text>
                <Text style={styles.expenseDetail}>{item.date}</Text>
              </View>
              <View>
                <Text style={styles.expenseAmount}>
                  Php {item.amount.toFixed(2)}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232a44",
  },
  expenseContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expenseName: {
    color: "white",
  },
  expenseDetail: {
    color: "#777e90",
  },
  expenseAmount: {
    color: "#4ea27f",
  },
});

export default Dashboard;
