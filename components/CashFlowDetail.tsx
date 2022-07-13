import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

const CashFlowDetail = ({ route }: { route: any }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.expenseName}>{item.amount}</Text>
      <Text style={styles.expenseDetail}>{item.name}</Text>
      <Text style={styles.expenseDetail}>{item.description}</Text>
      <Text style={styles.expenseDetail}>{item.date}</Text>
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

export default CashFlowDetail;
