import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CashFlowDetail = ({ route }: { route: any }) => {
  const { item } = route.params;
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("CashFlowEdit", { item: item })}
        >
          <MaterialIcons name="edit" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
