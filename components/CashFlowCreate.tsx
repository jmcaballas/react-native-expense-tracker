import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import DateTimePicker from "@react-native-community/datetimepicker";

const CashFlowCreate = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowDatePicker(false);
  };

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
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>{date.toString().slice(4, 15)}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker value={date} mode={"date"} onChange={onChange} />
      )}
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
  datePicker: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1b2036",
    marginHorizontal: 20,
    marginTop: 20,
    paddingLeft: 15,
    paddingVertical: 15,
  },
  dateText: {
    color: "white",
  },
});

export default CashFlowCreate;
