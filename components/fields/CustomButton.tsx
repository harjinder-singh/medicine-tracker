import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  textStyles?: any;
}

function CustomButton({ text, onPress, textStyles, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={StyleSheet.flatten([styles.buttonLabel, style])}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#f9c2ff",
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 24,
    fontWeight: "400",
    marginTop: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: "400",
  },
});

export default CustomButton;
