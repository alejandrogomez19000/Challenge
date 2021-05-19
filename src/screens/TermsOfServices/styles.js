import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  flyingMoneyContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  flyingMoneyImage: {
    height: width * 0.122,
    resizeMode: "contain",
  },
  flyingMoneyImageBrackground: {
    resizeMode: "cover",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.7,
    height: width * 0.122,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  termsOfServicesText: {
    color: colors.black,
    textAlign: "left",
    marginVertical: 15,
    fontWeight: "400",
  },
  termsOfServicesContainer: {
    marginTop: 50,
  },
});

export default styles;
