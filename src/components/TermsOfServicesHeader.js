import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Title from "./Texts/Title";
import BackArrow from "../assets/images/icons/back-arrow.png";
import LinearGradient from "react-native-linear-gradient";

const TermsOfServicesHeader = ({ goBack }) => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={["#8D24C4", "#500F71"]}
    style={styles.linearGradient}
  >
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={BackArrow} />
      </TouchableOpacity>
      <Title customStyles={styles.title} text={"Terms of Services"} />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backArrowIcons: {
    resizeMode: "cover",
    backgroundColor: "black",
  },
  title: {
    flex: 1,
    marginVertical: 0,
  },
});
export default TermsOfServicesHeader;
