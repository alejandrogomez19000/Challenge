import React, { useEffect } from "react";
import { SafeAreaView, View, Image, BackHandler, Alert } from "react-native";
import Banner from "../../components/Banner";
import ViewButton from "../../components/Inputs/ViewButton";
import Paragraph from "../../components/Texts/Paragraph";
import Title from "../../components/Texts/Title";
import BankImage from "../../assets/images/bank.png";

import { useNavigationState } from "@react-navigation/native";
import { routeNames } from "../../navigation/routes";

import { viewButtonStyles } from "./styles";
import styles from "./styles";

const LinkYourBank = () => {
  const routes = useNavigationState((state) => state.routes);
  useEffect(() => {
    const backAction = () => {
      const currentRouteName = routes[routes.length - 1].name;
      if (currentRouteName === routeNames.LINK_YOUR_BANK) {
        Alert.alert(
          "Hold on!",
          "Are you sure you want to exit the GoalsetterChallenge?",
          [
            {
              text: "No",
              onPress: () => null,
              style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
          ]
        );
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title="Link your bank!" customStyles={styles.bannerContainer} />
      <View style={styles.linkYourBankContainer}>
        <View style={styles.contentContainer}>
          <Image source={BankImage} style={styles.image} />
          <Title customStyles={styles.title} text="Family banking" />
          <Paragraph
            customStyles={styles.text}
            text="Linking your bank lets you use all of Goalsetter’s amazing features. Every member of your family can save, gift, learn, earn, and spend money... smartly."
          />
        </View>

        <ViewButton customStyles={viewButtonStyles} text="LINK A BANK" />
      </View>
    </SafeAreaView>
  );
};

export default LinkYourBank;
