import { useState } from "react";
import { ViewStyle } from "react-native";
export type ItemType = {
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  extendStyle?: ViewStyle;
};
export const useFlexDirectionBasics = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  const [direction, setDirection] = useState("ltr");
  const [justifyConetnt, setJustifyContent] = useState("flex-start");
  const [alignItems, setalignItems] = useState("stretch");

  const items: ItemType[] = [
    {
      label: "flexDirection",
      values: ["column", "row", "row-reverse", "column-reverse"],
      selectedValue: flexDirection,
      setSelectedValue: setFlexDirection,
    },
    {
      label: "direction",
      values: ["ltr", "rtl"],
      selectedValue: direction,
      setSelectedValue: setDirection,
    },
    {
      label: "justifyContent",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      selectedValue: justifyConetnt,
      setSelectedValue: setJustifyContent,
    },
    {
      label: "alignItems",
      values: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      selectedValue: alignItems,
      setSelectedValue: setalignItems,
      extendStyle: { width: "auto", minWidth: 50 },
    },
  ];

  return { items };
};
