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

import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

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
  const [date, setDate] = useState(new Date(item.date));
  const [showDatePicker, setShowDatePicker] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => editHandler(id)}>
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
    Alert.alert("Delete?", "Are you sure you want to delete?", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          const newExpenses = expenses.filter(
            (item: any) => item.id != currentId
          );
          setExpenses(newExpenses);
          navigation.navigate("Dashboard");
        },
      },
    ]);
  };

  const editHandler = (currentId: string) => {
    if (!amount) {
      Alert.alert("Error!", "Amount is required.");
      return;
    }
    if (!name) {
      Alert.alert("Error!", "Name is required.");
      return;
    }

    const newExpenses = expenses.map((item: { id: string }) => {
      if (item.id === currentId) {
        return {
          id: currentId,
          amount: amount,
          name: name,
          description: description,
          category: category,
          date: date,
        };
      } else {
        return item;
      }
    });

    setExpenses(newExpenses);
    Alert.alert("Success!", "Item was edited.");
    navigation.navigate("Dashboard");
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
          <Text style={styles.dateText}>
            {moment(date).format("MMMM D, YYYY")}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            onChange={showDatePickerHandler}
          />
        )}
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteExpense(id)}
        >
          <Text style={styles.deleteText}>DELETE</Text>
        </TouchableOpacity>
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
  deleteBtn: {
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "#eb4f74",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  deleteText: {
    color: "white",
    textAlign: "center",
  },
});

export default CashFlowEdit;
