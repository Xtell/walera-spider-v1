import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const AppTextInput = ({
  placeholder,
  placeholderTextColor,
  autoFocus,
  onChange,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      autoFocus={autoFocus}
      onChangeText={(text) => (onChange(text))}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D4D8D8",
    backgroundColor: "#F4F5F5",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
