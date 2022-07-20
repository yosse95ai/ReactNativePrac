import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Button, Text } from "react-native";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Page1">;
const Page1 = ({ navigation, route }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.params.name} からやってきました</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Page1;
