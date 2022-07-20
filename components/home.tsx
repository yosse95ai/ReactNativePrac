import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Button } from "react-native";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Page1">;
const Home = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Go to page1"
        onPress={() => navigation.navigate("Page1", { name: "Home" })}
      />
    </View>
  );
};

export default Home;
