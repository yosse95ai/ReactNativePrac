import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ItemType, useFlexDirectionBasics } from "./hooks";

export default function App() {
  return <FlexDirectionBasics />;
}

const FlexDirectionBasics = () => {
  const { items } = useFlexDirectionBasics();

  return (
    <ScrollView style={{ marginTop: 40, marginBottom: 20 }}>
      {items.map((item) => (
        <PreviewLayout
          label={item.label}
          values={item.values}
          selectedValue={item.selectedValue}
          setSelectedValue={item.setSelectedValue}
        >
          <View style={[styles.box, { backgroundColor: "powderblue" }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View
            style={[
              styles.box,
              { backgroundColor: "steelblue" },
              item.extendStyle,
            ]}
          />
        </PreviewLayout>
      ))}
    </ScrollView>
  );
};

type PreviewLayoutType = {
  children: JSX.Element[];
} & ItemType;
const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutType) => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, { [label]: selectedValue }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    height: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});
