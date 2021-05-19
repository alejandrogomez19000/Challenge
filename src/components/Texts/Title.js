import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import fontSizes from "../../utils/fontSizes";

const Title = ({ text, customStyles }) => (
  <Text style={[styles.text, customStyles && customStyles]}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: fontSizes.large,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default Title;
