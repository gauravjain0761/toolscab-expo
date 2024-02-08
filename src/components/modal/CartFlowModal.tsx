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
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  oncomfirmPress: () => void;
  itemData: any;
};

// create a component
const CartFlowModal = ({
  isVisible,
  onClose,
  oncomfirmPress,
  itemData,
}: Props) => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectedTab] = useState(1);
  const duration = moment(new Date()).diff(
    moment(itemData?.added_to_cart),
    "seconds"
  );

  const second = Math.floor(duration);
  const [delay, setDelay] = useState(second < 900 ? second : 0);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      selectTab == 1 && setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  const onFirstTimePress = () => {
    oncomfirmPress();
  };

  const onClosePress = () => {
    onClose();
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
                  {selectTab == 1 ? (
                    <Image
                      source={icons.commonicon}
                      style={styles.commoniconStyleWeb}
                    />
                  ) : (
                    <Image source={icons.done} style={styles.doneIcon} />
                  )}
                </ImageBackground>
              </View>
              {selectTab === 1 ? (
                <Text style={styles.headerText}>Pea hoogu!</Text>
              ) : (
                <Text
                  style={[
                    styles.headerText,
                    { lineHeight: 30, textAlign: "center" },
                  ]}
                >
                  {"Sinu seade on\nbroneeritud!"}
                </Text>
              )}
              {selectTab == 2 && (
                <View style={styles.timeView}>
                  <Text style={styles.timeValueStyle}>
                    {minutes ? minutes : "00"}:{seconds ? seconds : "00"}
                  </Text>
                  <Text style={styles.timeTextStyle}>Tasuta broneering</Text>
                </View>
              )}
              {selectTab == 1 ? (
                <Text style={styles.headerSubText}>
                  {
                    "Nõustun, et toote lisamisel ostukorvi\nbroneeritakse toode 15 minutiks. aja\nmöödumisel algab automaatselt tasuline\nrendiaeg, vaata hinnastust ja tellimistingimusi"
                  }
                </Text>
              ) : (
                <Text style={styles.headerSubText}>
                  {
                    "Sinu seade ootab sind Toolscabi rendikapis\nVõta see 15 minuti jooksul tasuta välja."
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
                {selectTab == 1 ? (
                  <Image
                    source={icons.qrcodecart}
                    style={styles.commoniconStyleMob}
                  />
                ) : (
                  <Image source={icons.done} style={styles.doneIconMob} />
                )}
              </View>
              {selectTab === 1 ? (
                <>
                  <Text style={styles.headerTextMob}>
                    {`Sinu kapp on \n`}
                    {itemData?.lockers?.map((item, index) => {
                      return (
                        <Text
                          style={[
                            styles.headerTextMob,
                            { color: colors.black },
                          ]}
                        >
                          <Text
                            style={[
                              styles.headerTextMob,
                              { color: colors.Roheline2 },
                            ]}
                          >
                            {"№ "}
                          </Text>
                          {item?.locker_number}
                          {index == 0 && (
                            <Text
                              style={[
                                styles.headerTextMob,
                                { color: colors.Roheline2 },
                              ]}
                            >
                              {" ja "}
                            </Text>
                          )}
                        </Text>
                      );
                    })}
                  </Text>
                </>
              ) : (
                <Text
                  style={[
                    styles.headerTextMob,
                    { lineHeight: 36, textAlign: "center" },
                  ]}
                >
                  {"Sinu seade on\nbroneeritud!"}
                </Text>
              )}

              {selectTab == 1 ? (
                <Text style={styles.headerSubTextMob}>
                  {
                    "Kapi avamiseks skanneeri QR koodi kapilKõigepealt võta akud kapist 15 ning seade kapist 26"
                  }
                </Text>
              ) : (
                <Text style={styles.headerSubTextMob}>
                  {
                    "Sinu seade ootab sind Toolscabi rendikapis\nVõta see 15 minuti jooksul tasuta välja."
                  }
                </Text>
              )}
              {selectTab == 1 && (
                <View style={styles.timeViewMob}>
                  <Text style={styles.timeValueStyleMob}>
                    {minutes ? minutes : "00"}:{seconds ? seconds : "00"}
                  </Text>
                  <Text style={styles.timeTextStyleMob}>Tasuta broneering</Text>
                </View>
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
                  title={selectTab == 1 ? "Skanneeri" : "Rendikorv"}
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
    ...defaultFont(400, 14, colors.headerBG),
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 20,
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
});

//make this component available to the app
export default CartFlowModal;
