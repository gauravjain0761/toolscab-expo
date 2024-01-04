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
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import InpuText from "../reusableComponent/InpuText";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "../../navigations/RootNavigation";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  tabValue: number;
};

// create a component
const CommonModalWeb = ({ isVisible, onClose, tabValue }: Props) => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectedTab] = useState(tabValue);
  useEffect(() => {
    setSelectedTab(tabValue);
  });

  const onFirstTimePress = () => {
    onClose();
    if (selectTab == 1) {
      navigationRef.navigate(screenName.registerScreen);
    } else {
      Platform.OS == "web"
        ? navigationRef.navigate(screenName.profileScreen)
        : navigationRef.navigate(screenName.cardScreen);
    }
  };

  const onClosePress = () => {
    onClose();
    setSelectedTab(1);
  };

  if (Platform.OS === "web") {
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
                  <Image
                    source={icons.commonicon}
                    style={styles.commoniconStyleWeb}
                  />
                </ImageBackground>
              </View>

              <Text style={styles.headerText}>tähelepanelik!</Text>

              {selectTab == 1 ? (
                <Text style={styles.headerSubText}>
                  {
                    "tundub, et teie makseviisi pole lisatud. jätkamiseks\nlisage see kõigepealt."
                  }
                </Text>
              ) : (
                <Text style={styles.headerSubText}>
                  {
                    "tundub, et te pole meiega registreerunud. jätkamiseks\nregistreeruge meiega."
                  }
                </Text>
              )}

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 70,
                  marginTop: 20,
                }}
              >
                <CommonGreenBtn
                  title="tühistada"
                  onPress={onClosePress}
                  style={styles.btnLeftSide}
                />
                <CommonGreenBtn
                  title={selectTab == 1 ? "registreeru kohe" : "lisa makse"}
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
        style={{ margin: 15, flex: 1 }}
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
        <View style={styles.containerMob}>
          <View style={styles.bodyContentMob}>
            <View style={{ marginHorizontal: 24, marginTop: 30 }}>
              <View style={styles.logoStyleMob}>
                <ImageBackground
                  source={icons.ellipse}
                  style={[
                    styles.commoniconStyleMob,
                    { justifyContent: "center" },
                  ]}
                >
                  <Image
                    source={icons.commonicon}
                    style={styles.commoniconStyleMob}
                  />
                </ImageBackground>
              </View>

              <Text style={styles.headerText}>tähelepanelik!</Text>

              {selectTab == 1 ? (
                <Text style={styles.headerSubTextMob}>
                  {
                    "tundub, et teie makseviisi pole lisatud. jätkamiseks\nlisage see kõigepealt."
                  }
                </Text>
              ) : (
                <Text style={styles.headerSubTextMob}>
                  {
                    "tundub, et te pole meiega registreerunud. jätkamiseks\nregistreeruge meiega."
                  }
                </Text>
              )}

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 70,
                  marginTop: 20,
                }}
              >
                <CommonGreenBtn
                  title="tühistada"
                  onPress={onClosePress}
                  style={styles.btnLeftSideMob}
                />
                <CommonGreenBtn
                  title={selectTab == 1 ? "registreeru kohe" : "lisa makse"}
                  onPress={onFirstTimePress}
                  style={{
                    borderColor: colors.headerBG,
                    marginLeft: 10,
                    width: widthPercentageToDP(32),
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
    marginTop: 100,
    marginBottom: 20,
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

  containerMob: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContentMob: {
    // width: screen_width * 0.32,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    borderRadius: 8,
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
  logoStyleMob: {
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
  headerTextMob: {
    ...defaultFont("700_o", 32, colors.Roheline2),
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  headerSubTextMob: {
    ...defaultFont(400, 14, colors.headerBG),
    alignSelf: "center",
    textAlign: "center",
    lineHeight:20
  },
  btnLeftSideMob: {
    borderColor: colors.headerBG,
    width: widthPercentageToDP(32),
    marginTop: 50,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  timeViewMob: {
    alignItems: "center",
    marginVertical: 20,
  },
  timeValueStyleMob: {
    ...defaultFont(700, 24, colors.black),
    lineHeight: 30,
  },
  timeTextStyleMob: {
    lineHeight:20,
    ...defaultFont(700, 14, colors.headerBG),
  },
});

//make this component available to the app
export default CommonModalWeb;
