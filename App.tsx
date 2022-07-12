import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

export default function App() {
  const onPressButton = () => {
    alert("You tapped the button.");
  };
  const onLongPressButton = () => {
    alert("You long-pressed the button!");
  };

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressButton} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressButton} title="PressMe" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={onPressButton} title="This looks great." />
        <Button onPress={onPressButton} title="OK" color="#841584" />
      </View>
      <View style={styles.container}>
        <TouchableHighlight onPress={onPressButton} underlayColor="white">
          <View style={styles.touchableButton}>
            <Text style={styles.touchableButtonText}>
              TouchableButtonHighlight
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.touchableButton}>
            <Text style={styles.touchableButtonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={onPressButton}
          background={
            Platform.OS === "android"
              ? TouchableNativeFeedback.SelectableBackground()
              : undefined
          }
        >
          <View style={styles.touchableButton}>
            <Text style={styles.touchableButtonText}>
              TouchableWithoutFeedback&nbsp;
              {Platform.OS !== "android" ? "(Android only)" : ""}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={onPressButton}>
          <View style={styles.touchableButton}>
            <Text style={styles.touchableButtonText}>
              TouchableWithoutFeedback
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          underlayColor="white"
        >
          <View style={styles.touchableButton}>
            <Text style={styles.touchableButtonText}>
              Touchable with Long Press
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 1 }}
          placeholder="Type here to translate."
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text
            .split(" ")
            .map((word) => word && "🍎")
            .join(" ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableButton: {
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#6F3219",
  },
  touchableButtonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});
