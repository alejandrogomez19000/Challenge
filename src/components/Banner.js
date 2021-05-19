import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import bannerImage from "../assets/images/background.png";
import Title from "./Texts/Title";
import Paragraph from "./Texts/Paragraph";

const Banner = ({ subtitle, title, customStyles }) => (
  <View style={[styles.container, customStyles && customStyles]}>
    <ImageBackground source={bannerImage} style={styles.imageBackground}>
      <View style={styles.textContainer}>
        <Title text={title} />
        {subtitle && <Paragraph text={subtitle} />}
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Banner;
