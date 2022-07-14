import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import uuid from "react-native-uuid";

import DateTimePicker from "@react-native-community/datetimepicker";

import Context from "../context/Context";

const CashFlowEdit = ({ route }: { route: any }) => {
  const { item } = route.params;
  const navigation = useNavigation<any>();

  const [expenses, setExpenses] = useContext(Context);
  const [id, setId] = useState(item.id);
  const [amount, setAmount] = useState(item.amount);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [date, setDate] = useState(item.date);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={editHandler}>
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

  const deleteExpense = (currentId: string) => {
    const newExpenses = expenses.filter((item: any) => item.id != currentId);
    setExpenses(newExpenses);
  };

  const editHandler = () => {
    if (!amount) {
      Alert.alert("Error!", "Amount is required.");
      return;
    }
    if (!name) {
      Alert.alert("Error!", "Name is required.");
      return;
    }

    deleteExpense(id);

    const editExpense = {
      id: uuid.v4(),
      amount: amount,
      name: name,
      description: description,
      category: category,
      date: date,
    };
    setExpenses([editExpense, ...expenses]);
    Alert.alert("Success!", "Item was added.");
    navigation.goBack();
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
          value={amount}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setName(value)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setDescription(value)}
          multiline={true}
          value={description}
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          placeholderTextColor="#777e90"
          onChangeText={(value) => setCategory(value)}
          value={category}
        />
        <TouchableOpacity
          style={styles.datePicker}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>{date.toString()}</Text>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  datePicker: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1b2036",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  dateText: {
    color: "white",
  },
});

export default CashFlowEdit;
