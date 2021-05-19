import React from "react";
import { SafeAreaView, Image, View, ImageBackground } from "react-native";
import FlyingMoney from "../../assets/images/flyingMoney.png";
import FlyingMoneyBackground from "../../assets/images/illustrationMoney.png";
import Paragraph from "../../components/Texts/Paragraph";
import TermsOfServicesHeader from "../../components/TermsOfServicesHeader";

import styles from "./styles";

const TermsOfServices = ({ navigation }) => (
  <SafeAreaView>
    <TermsOfServicesHeader goBack={navigation.goBack} />
    <View style={styles.container}>
      <ImageBackground
        style={styles.flyingMoneyImageBrackground}
        source={FlyingMoneyBackground}
      >
        <Image style={styles.flyingMoneyImage} source={FlyingMoney} />
      </ImageBackground>
      <View style={styles.termsOfServicesContainer}>
        <Paragraph
          customStyles={styles.termsOfServicesText}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Paragraph
          customStyles={styles.termsOfServicesText}
          text="1.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.n. ."
        />
        <Paragraph
          customStyles={styles.termsOfServicesText}
          text="2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <Paragraph
          customStyles={styles.termsOfServicesText}
          text="3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </View>
    </View>
  </SafeAreaView>
);

export default TermsOfServices;
