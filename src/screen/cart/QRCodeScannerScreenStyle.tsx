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
  headerTextMain1:{
    marginBottom: 20,
    ...defaultFont(400, 24, colors.black),
  },
  paragraph: {
    marginBottom: 40,
    ...defaultFont(400, 16, colors.black),
  },
  headerText: {
    marginBottom: 5,
    alignSelf: 'center',
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
  textstyle:{
    marginTop: 50,
    alignSelf:"center",
    ...defaultFont(400, 24, colors.Roheline2),
  },
  textSubStyle:{
    marginVertical: 20,
    alignSelf:"center",
    ...defaultFont(400, 20, colors.black),
  },
  text:{
    ...defaultFont(400, 20, colors.black),
  },
  headerTextMain:{
    marginBottom: 20,
    alignSelf:"center",
    ...defaultFont(400, 30, colors.black),
  },
  textstyle1:{
    alignSelf:"center",
    marginVertical: 10,
    ...defaultFont(400, 34, colors.black),
    fontWeight: 'bold',
  },
  textstyle2:{
    alignSelf:"center",
    marginVertical: 20,
    ...defaultFont(400, 18, colors.Roheline2),
  },
  textstyle3:{
    alignSelf:"center",
    marginTop: 10,
    ...defaultFont(400, 17, colors.black),
  },
  commoniconStyleMob: {
    width: 123,
    height: 123,
    alignSelf: "center",
    tintColor: colors.black,
  },
  doneIconMob: {
    width: 80,
    height: 80,
    alignSelf: "center",
    tintColor: colors.black,
  },
  closeIcon: {
    width: 50,
    height: 50,
    alignSelf: "center",
    tintColor: colors.white,
  },
  logoStyleMob: {
    width: 123,
    height: 123,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 123 / 2,
    alignSelf: "center",
    position: "absolute",
    top: -70,
  },

};
export default styles;
