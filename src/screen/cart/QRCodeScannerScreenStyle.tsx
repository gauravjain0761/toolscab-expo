import { Dimensions } from "react-native";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { colors } from "../../theme/Colors";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    ...defaultFont(700, 24, colors.black),
  },
  paragraph: {
    marginBottom: 40,
    ...defaultFont(400, 16, colors.black),
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
    borderWidth: 1,
    
  },
  camera: {
    flex: 1,
  },
  button: {
    borderColor: colors.black,
    marginLeft: 10,
    width: "40%",
    backgroundColor: colors.roheline,
  },
};
export default styles;
