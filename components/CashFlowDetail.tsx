import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

const CashFlowDetail = ({ route }: { route: any }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.expenseContainer}>
        <Text style={styles.expenseAmount}>
          Php {Number(item.amount).toFixed(2)}
        </Text>
        <Text style={styles.expenseName}>{item.name}</Text>
        {item.description ? (
          <Text style={styles.expenseDetail}>{item.description}</Text>
        ) : (
          <></>
        )}
        <Text style={styles.expenseDetail}>{item.date}</Text>
      </View>
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
    justifyContent: "center",
  },
  expenseName: {
    color: "white",
    fontSize: 20,
    marginBottom: 5,
  },
  expenseDetail: {
    color: "#777e90",
    fontSize: 16,
  },
  expenseAmount: {
    color: "#4ea27f",
    fontSize: 20,
    marginBottom: 5,
  },
});

export default CashFlowDetail;
