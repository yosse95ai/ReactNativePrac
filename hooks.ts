import { useState } from "react";
export const useVirtualKeyboard = () => {
  const [textValue, setTextValue] = useState("");

  const handleChange = (value: string) => {
    setTextValue(value);
  };

  const handleClick = () => {
    alert(`Input value is ${textValue}`);
  };

  return { handleClick, handleChange };
};
