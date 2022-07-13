import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

const CashFlowCreate = () => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        placeholder="Amount"
        placeholderTextColor="#777e90"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#777e90"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#777e90"
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        placeholderTextColor="#777e90"
      />
      <TextInput
        style={styles.input}
        placeholder="Date & Time"
        placeholderTextColor="#777e90"
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
  input: {
    color: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1b2036",
    marginHorizontal: 20,
    marginTop: 20,
    paddingLeft: 15,
    paddingVertical: 10,
  },
});

export default CashFlowCreate;
