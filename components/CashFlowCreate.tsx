import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CashFlowCreate = () => {
  return (
    <View style={styles.container}>
      <Text>Expense Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CashFlowCreate;
