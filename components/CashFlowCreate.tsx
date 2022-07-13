import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import uuid from "react-native-uuid";

import DateTimePicker from "@react-native-community/datetimepicker";

const CashFlowCreate = ({ navigation }: { navigation: any }) => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={createHandler}>
          <MaterialIcons name="check" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, amount, name, description, category, date]);

  const showDatePickerHandler = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const createHandler = () => {
    const newExpense = {
      id: uuid.v4(),
      amount: amount,
      name: name,
      description: description,
      category: category,
      date: date,
    };

    console.log(newExpense);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Amount"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setAmount(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setDescription(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setCategory(value)}
        />
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>{date.toString().slice(4, 15)}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            onChange={showDatePickerHandler}
          />
        )}
        <StatusBar style="light" />
      </View>
    </TouchableWithoutFeedback>
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
