//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useDispatch } from "react-redux";
import { onReviewAddAction } from "../../actions/catalogueAction";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  oncomfirmPress: () => void;
  itemData: any;
  totle: any;
  lockersNo: any;
  lockersValue:any
};

// create a component
const ReviewSuccessModal = ({
  isVisible,
  onClose,
  oncomfirmPress,
  itemData,
  totle,
  lockersNo,
  lockersValue
}: Props) => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectedTab] = useState(1);
  const [inputSadValue, setInputSadValue] = useState("");
  const [seletValue, setSeletValue] = useState(4);
  const dispatch = useDispatch();


  const onFirstTimePress = () => {
    const obj = {
      params: {
        rental_id: itemData?.rental_id,
        rating: seletValue,
        feedback:inputSadValue
      },
      onSuccess: (res: any) => {
        setInputSadValue("");
        setSeletValue(4),
        navigationRef.navigate(screenName.homeScreen)
      },
      onFailure: () => {
        
      },
    };

    dispatch(onReviewAddAction(obj));
  };

  const onClosePress = () => {
    navigationRef.navigate(screenName.homeScreen)
  };

  const CheckBoxText = ({ title, redColor, onPress }: any) => {
    return (
      <TouchableOpacity style={styles.checkViewStyle} onPress={onPress}>
        <View style={styles.checkBox} />
        <Text
          style={[
            styles.checkText,
            {
              color: redColor ? "red" : colors.headerBG,
              top: redColor ? 8 : 0,
            },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  if (Platform.OS == "web") {
    return (
      <Modal
        animationInTiming={500}
        animationOutTiming={500}
        style={{ margin: 0, flex: 1 }}
        backdropColor={colors.headerBG}
        backdropOpacity={0.2}
        isVisible={isVisible}
        onBackButtonPress={() => {
          onClosePress();
        }}
        onBackdropPress={() => {
          onClosePress();
        }}
      >
        <View style={styles.container}>
          <View style={styles.bodyContent}>
            <View style={{ marginHorizontal: 24, marginTop: 30 }}>
              <View style={styles.logoStyle}>
                <ImageBackground
                  source={icons.ellipse}
                  style={[
                    styles.commoniconStyleWeb,
                    { justifyContent: "center" },
                  ]}
                >
                  <Image source={icons.done} style={styles.doneIcon} />
                </ImageBackground>
              </View>
              <Text style={styles.headerText}>Pea hoogu!</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 70,
                  marginTop: 20,
                }}
              >
                <CommonGreenBtn
                  title="Loobun"
                  onPress={onClosePress}
                  style={styles.btnLeftSide}
                />
                <CommonGreenBtn
                  title={selectTab == 1 ? "Nõustun" : "Rendikorv"}
                  onPress={onFirstTimePress}
                  style={{
                    borderColor: colors.headerBG,
                    marginLeft: 10,
                    width: widthPercentageToDP(7),
                    marginTop: 50,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <Modal
        animationInTiming={500}
        animationOutTiming={500}
        // style={{ margin: 0, flex: 1 }}
        backdropColor={colors.headerBG}
        backdropOpacity={0.2}
        isVisible={isVisible}
        // onBackButtonPress={() => {
        //   onClosePress();
        // }}
        // onBackdropPress={() => {
        //   onClosePress();
        // }}
      >
        <View style={styles.containerMob}>
          <View style={styles.bodyContentMob}>
            <View style={{ marginHorizontal: 24, marginTop: 30 }}>
              <View style={styles.logoStyle}>
                <ImageBackground
                  source={icons.ellipse}
                  style={[
                    styles.commoniconStyleWeb,
                    { justifyContent: "center" },
                  ]}
                >
                  <Image source={icons.done} style={styles.doneIcon} />
                </ImageBackground>
              </View>
              <Text style={styles.headerText}>Sinu rent on lõppenud</Text>
              <View style={styles.listViewStyle}>
                <Text style={styles.listLeftText}>Maksumus:</Text>
                <Text style={styles.listRightText}>{lockersValue?.totalPrice}€</Text>
              </View>
              <View style={[styles.listViewStyle, { marginTop: 5 }]}>
                <Text style={styles.listLeftText}>Kestus:</Text>
                <Text style={[styles.listLeftText]}>{lockersValue?.duration}</Text>
              </View>
              <Text style={styles.listFooterText}>
                Müügiarve leiad minu profiil ja rendid alt.
              </Text>
              <Text
                style={[styles.headerText, { marginTop: 5, marginBottom: 1 }]}
              >
                Hinda oma renti!
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <TouchableOpacity onPress={() => setSeletValue(item)}>
                      <Image
                        source={seletValue >= item ? icons.starIn : icons.starout}
                        style={styles.starStyle}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
              <TextInput
                placeholder="Kirjuta tagasiside"
                // multiline
                style={styles.inputText}
                value={inputSadValue}
                onChangeText={(text) => {
                  setInputSadValue(text);
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 30,
                  // marginTop: 20,
                }}
              >
                <CommonGreenBtn
                  title="Sule"
                  onPress={onClosePress}
                  style={styles.btnLeftSideMob}
                />
                <CommonGreenBtn
                  title={"Sule"}
                  onPress={onFirstTimePress}
                  style={{
                    borderColor: colors.headerBG,
                    marginLeft: 10,
                    width: widthPercentageToDP(30),
                    marginTop: 50,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContent: {
    // width: screen_width * 0.32,
    paddingHorizontal: 45,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  commoniconStyleWeb: {
    width: 123,
    height: 123,
    alignSelf: "center",
    tintColor: colors.black,
  },
  doneIcon: {
    width: 80,
    height: 80,
    alignSelf: "center",
    tintColor: colors.black,
  },
  logoStyle: {
    width: 123,
    height: 123,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 123 / 2,
    backgroundColor: colors.roheline,
    alignSelf: "center",
    position: "absolute",
    top: -90,
  },
  headerText: {
    ...commonFontStyle(fontFamily.bold, 32, colors.Roheline2),
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
  },
  headerSubText: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG),
    alignSelf: "center",
    textAlign: "center",
  },
  btnLeftSide: {
    borderColor: colors.headerBG,
    width: widthPercentageToDP(7),
    marginTop: 50,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  timeView: {
    alignItems: "center",
    marginVertical: 20,
  },
  timeValueStyle: {
    ...commonFontStyle(fontFamily.articulat_bold, 24, colors.black),
    lineHeight: 20,
  },
  timeTextStyle: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG),
  },

  //mobile

  containerMob: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContentMob: {
    // width: screen_width * 0.32,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  commoniconStyleMob: {
    width: 100,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
    // tintColor: colors.black,
    zIndex: -1,
  },
  listView: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.roheline,
    position: "absolute",
    right: -20,
    top: 25,
  },
  listText: {
    ...defaultFont("700", 18, colors.black),
  },
  doneIconMob: {
    width: 80,
    height: 80,
    alignSelf: "center",
    tintColor: colors.black,
  },
  logoStyleMob: {
    // width: 123,
    // height: 123,
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 2,
    // borderRadius: 123 / 2,
    // backgroundColor: colors.roheline,
    alignSelf: "center",
    position: "absolute",
    top: -80,
  },
  headerTextMob: {
    ...defaultFont("700_o", 30, colors.Roheline2),
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
    lineHeight: 40,
  },
  headerSubTextMob: {
    ...defaultFont(400, 18, colors.Roheline2),
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 28,
  },
  btnLeftSideMob: {
    borderColor: colors.headerBG,
    width: widthPercentageToDP(30),
    marginTop: 50,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  timeViewMob: {
    alignItems: "center",
    marginVertical: 20,
  },
  timeValueStyleMob: {
    ...defaultFont(700, 22, colors.black),
    lineHeight: 30,
  },
  timeTextStyleMob: {
    ...defaultFont(400, 12, colors.headerBG),
  },
  checkText: {
    marginLeft: 10,
    ...defaultFont(400, 18, colors.black),
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey_D1,
  },
  checkViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  listViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: 200,
    justifyContent: "space-between",
  },
  listLeftText: {
    ...defaultFont(400, 18, colors.black),
  },
  listRightText: {
    ...defaultFont(600, 22, colors.black),
  },
  listFooterText: {
    textAlign: "center",
    marginTop: 10,
    ...defaultFont(500, 14, colors.black),
  },
  starStyle: {
    width: 25,
    height: 25,
    marginLeft: 4,
  },
  inputText: {
    borderWidth: 0.5,
    padding: 3,
    paddingLeft: 15,
    // textAlignVertical: "top",
    marginTop: 16,
    ...defaultFont(400, 14, colors.headerBG),
  },
});

//make this component available to the app
export default ReviewSuccessModal;
