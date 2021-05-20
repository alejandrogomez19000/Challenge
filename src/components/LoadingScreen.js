import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import colors from "../utils/colors";

const LoadingScreen = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color={colors.bluewhite} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    backgroundColor: colors.transparentBlack,
  },
});
export default LoadingScreen;
