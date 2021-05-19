import { StyleSheet } from "react-native";
import fontSizes from "../../utils/fontSizes";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkYourBankContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  bannerContainer: {
    height: 80,
  },
  text: {
    color: colors.black,
    marginTop: 30,
    lineHeight: fontSizes.large,
  },
  image: {
    width: 165,
    resizeMode: "contain",
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: colors.darkenBlue,
  },
});

export const viewButtonStyles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: "100%",
  },
});

export default styles;
