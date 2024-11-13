import React from "react";
import { StyleSheet, TextProps, TextStyle, Text } from "react-native";

interface LabelProps extends TextProps {
  text: string;
  style?: TextStyle;
}

function CustomLabel({ text, style, ...props }: LabelProps) {
  return <Text style={StyleSheet.flatten([styles.label, style])}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "400",
  },
});

export default CustomLabel;
