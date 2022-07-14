import { StyleSheet } from "react-native";
import { useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import uuid from "react-native-uuid";

import CashFlowCreate from "./components/CashFlowCreate";
import CashFlowDetail from "./components/CashFlowDetail";
import Dashboard from "./components/Dashboard";
import { IExpenses } from "./types/Types";
import Context from "./context/Context";

export default function App() {
  const [expenses, setExpenses] = useState<any>([
    {
      id: uuid.v4(),
      amount: 500,
      name: "Buffet",
      description: "Yummy!",
      category: "Food",
      date: "July 13, 2022",
    },
    {
      id: uuid.v4(),
      amount: 200,
      name: "Grab",
      description: "Home to Work",
      category: "Transportation",
      date: "July 13, 2022",
    },
    {
      id: uuid.v4(),
      amount: 1000,
      name: "Globe",
      description: "",
      category: "Bills",
      date: "July 13, 2022",
    },
  ]);

  return (
    <Context.Provider value={[expenses, setExpenses]}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#101324",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={({ navigation }) => ({
              title: "Dashboard",
              headerLeft: () => (
                <MaterialIcons
                  name="menu"
                  size={24}
                  color="white"
                  style={{ marginRight: 15 }}
                  // onPress={() => navigation.navigate("Drawer")}
                />
              ),
              headerRight: () => (
                <MaterialIcons
                  name="add"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate("CashFlowCreate")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="CashFlowCreate"
            component={CashFlowCreate}
            options={({ navigation }) => ({
              title: "CashFlowCreate",
            })}
          />
          <Stack.Screen
            name="CashFlowDetail"
            component={CashFlowDetail}
            options={({ navigation }) => ({
              title: "CashFlowDetail",
              headerRight: () => (
                <MaterialIcons
                  name="edit"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate("CashFlowCreate")}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
