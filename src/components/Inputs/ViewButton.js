import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import fontSizes from "../../utils/fontSizes";

const ViewButton = ({ onPress, text, customStyles, disabled }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[
      styles.container,
      disabled && styles.disabled,
      customStyles && customStyles.container,
    ]}
  >
    <Text style={[styles.buttonText, customStyles && customStyles.buttonText]}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 250,
    maxWidth: "90%",
    borderRadius: 5,
    height: 50,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSizes.default,
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: colors.greenwhite,
  },
});

export default ViewButton;
