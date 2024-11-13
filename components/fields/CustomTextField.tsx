import React from "react";
import { StyleSheet, TextInput, TextInputProps, TextStyle } from "react-native";

interface TextFieldProps extends TextInputProps {
  style?: TextStyle;
}

function CustomTextField({ style, ...props }: TextFieldProps) {
  return (
    <TextInput style={StyleSheet.flatten([styles.input, style])} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    minWidth: 250,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default CustomTextField;
