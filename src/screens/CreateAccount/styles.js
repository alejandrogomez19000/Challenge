import { StyleSheet } from "react-native";
import fontSizes from "../../utils/fontSizes";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formikContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  inputsContainer: {
    padding: 30,
  },
  termOfServiceButton: {
    marginVertical: 0,
    marginBottom: 0,
  },
  termOfServiceButtonText: {
    color: colors.bluewhite,
    fontSize: fontSizes.small1,
    top: 3.5,
    left: 2,
    position: "relative",
  },
  termOfServiceContainer: {
    width: "90%",
    textAlign: "center",
    fontSize: fontSizes.small1,
    lineHeight: fontSizes.default,
    marginVertical: 20,
    marginTop: 30,
    color: "#00000066",
    flexDirection: "row",
    position: "relative",
  },
});

export default styles;
