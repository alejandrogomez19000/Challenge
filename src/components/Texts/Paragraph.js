import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import fontSizes from "../../utils/fontSizes";

const Paragraph = ({ text, customStyles }) => (
  <Text style={[styles.text, customStyles && customStyles]}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: fontSizes.default,
    textAlign: "center",
    marginVertical: 5,
  },
});

export default Paragraph;
