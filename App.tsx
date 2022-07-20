// import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "./components/home";
import page1 from "./components/page1";

export type RootStackParams = {
  Home: undefined;
  Page1: { name: string };
};
const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Page1" component={page1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
