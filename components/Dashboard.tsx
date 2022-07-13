import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

import uuid from "react-native-uuid";

const Dashboard = ({ navigation }: { navigation: any }) => {
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
      description: "",
      category: "Bills",
      date: "July 13, 2022",
    },
  ]);

  const [totalExpenses, setTotalExpenses] = useState(0);

  const calculateTotalExpenses = () => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += Number(expenses[i].amount);
    }
    setTotalExpenses(total);
  };

  useEffect(() => {
    calculateTotalExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.budget}>Budget: Php {totalExpenses.toFixed(2)}</Text>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CashFlowDetail", { item: item })
            }
          >
            <View style={styles.expenseContainer}>
              <View>
                <Text style={styles.expenseName}>{item.name}</Text>
                {item.description ? (
                  <Text style={styles.expenseDetail}>{item.description}</Text>
                ) : (
                  <></>
                )}
                <Text style={styles.expenseDetail}>{item.date}</Text>
              </View>
              <View>
                <Text style={styles.expenseAmount}>
                  Php {item.amount.toFixed(2)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
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
  budget: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
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
