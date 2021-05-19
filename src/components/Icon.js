import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import UserImage from "../assets/images/icons/person.png";
import PasswordImage from "../assets/images/icons/passwordIcon.png";
import EmailImage from "../assets/images/icons/emailIcon.png";

const Icon = ({ name, customStyles }) => {
  const renderIconImage = () => {
    const icons = {
      user: UserImage,
      password: PasswordImage,
      email: EmailImage,
    };
    return icons[name];
  };
  return (
    <Image
      source={renderIconImage()}
      style={[styles.icon, customStyles && customStyles]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
});

export default memo(Icon);
