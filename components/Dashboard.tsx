import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";

import { StatusBar } from "expo-status-bar";

import moment from "moment";

import Context from "../context/Context";

const Dashboard = ({ navigation }: { navigation: any }) => {
  const [expenses, setExpenses] = useContext(Context);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isExpensesEmpty, setIsExpensesEmpty] = useState(true);

  const calculateTotalExpenses = () => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += Number(expenses[i].amount);
    }
    setTotalExpenses(total);
  };

  useEffect(() => {
    calculateTotalExpenses();
    if (expenses.length > 0) {
      setIsExpensesEmpty(false);
    }
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.budget}>Budget: Php {totalExpenses.toFixed(2)}</Text>
      {isExpensesEmpty ? (
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("CashFlowCreate")}
        >
          <Text style={styles.addText}>Create your first entry!</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
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
                <Text style={styles.expenseDetail}>
                  {moment(item.date).format("MMMM D, YYYY")}
                </Text>
              </View>
              <View>
                <Text style={styles.expenseAmount}>
                  Php {Number(item.amount).toFixed(2)}
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
  addBtn: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#101324",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  addText: {
    color: "white",
    textAlign: "center",
  },
});

export default Dashboard;
