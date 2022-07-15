import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useVirtualKeyboard } from "./hooks";

export default function App() {
  const { handleClick, handleChange } = useVirtualKeyboard();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          width: 50,
          height: 50,
          margin: 20,
          position: "absolute",
          top: 50,
          right: 20,
          borderRadius: 25,
          borderColor: "#333",
          borderWidth: 2,
          zIndex: 999,
        }}
      />
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={{ flex: 1 }}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
          {[...Array(100)].map((i, k) => {
            return (
              <View>
                <Text>test data {k}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.form}>
          <TextInput
            style={{
              height: 40,
              borderColor: "black",
              backgroundColor: "white",
              borderWidth: 1,
              flex: 1,
              paddingLeft: 5,
            }}
            placeholder="入力欄"
            onChangeText={handleChange}
          />
          <Button title="ボタン" onPress={handleClick} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#87CEEB",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    color: "#333",
    fontSize: 20,
  },
  form: {
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
});
