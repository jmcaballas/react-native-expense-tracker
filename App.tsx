import { StyleSheet, Text, View } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import CashFlowCreate from "./components/CashFlowCreate";
import CashFlowDetail from "./components/CashFlowDetail";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
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
            headerRight: () => (
              <MaterialIcons
                name="check"
                size={24}
                color="white"
                // onPress={() => navigation.navigate("CashFlowCreate")}
              />
            ),
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
