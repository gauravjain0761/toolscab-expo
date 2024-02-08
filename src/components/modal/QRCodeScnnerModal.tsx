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
  Alert,
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
  totle: any;
  lockersNo: any;
};

// create a component
const QRCodeScnnerModal = ({
  isVisible,
  onClose,
  oncomfirmPress,
  itemData,
  totle,
  lockersNo,
}: Props) => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectedTab] = useState(1);
  const [checkBoxData, setCheckBoxData] = useState(
    itemData?.components.map((item) => {
      return { ...item, isSelect: false };
    })
  );
  const [mainCheckBox, setMainCheckBox] = useState(false);

  const onFirstTimePress = () => {
    const updatedata = checkBoxData.filter((item) => item.isSelect == true);
    if (updatedata.length && mainCheckBox) {
      oncomfirmPress();
    } else {
      Alert.alert("Valige märkeruut");
    }
  };

  const onClosePress = () => {
    onClose();
  };

  const CheckBoxText = ({
    title,
    redColor,
    select,
    onSelectionChange,
  }: any) => {
    return (
      <View style={styles.checkViewStyle}>
        <TouchableOpacity
          onPress={onSelectionChange}
          style={[
            styles.checkBox,
            {
              backgroundColor: select ? colors.green : colors.white,
              borderColor: select ? colors.green : colors.grey_6,
            },
          ]}
        >
          <Image source={icons.done} style={{ width: 14, height: 14 }} />
        </TouchableOpacity>
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
      </View>
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
          // onClosePress();
        }}
        onBackdropPress={() => {
          // onClosePress();
        }}
      >
        <View style={styles.containerMob}>
          <View style={styles.bodyContentMob}>
            <View style={{ marginHorizontal: 24, marginTop: 30 }}>
              <View style={styles.logoStyleMob}>
                <View style={styles.listView}>
                  <Text
                    style={styles.listText}
                  >{`${totle}/${itemData?.lockers?.length}`}</Text>
                </View>
                <Image
                  source={icons.qrcodecart}
                  style={styles.commoniconStyleMob}
                />
              </View>

              <View style={{ marginTop: 60, marginBottom: 30 }}>
                {checkBoxData?.map((item: any) => {
                  return (
                    <CheckBoxText
                      title={item.product_name}
                      select={item.isSelect}
                      onSelectionChange={() => {
                        const updateData = checkBoxData?.map((list: any) => {
                          if (list.product_name == item.product_name) {
                            return { ...list, isSelect: !list.isSelect };
                          } else {
                            return { ...list };
                          }
                        });
                        setCheckBoxData(updateData);
                      }}
                    />
                  );
                })}
                <CheckBoxText
                  title={`${itemData?.main_product?.product_name},${itemData?.main_product?.brand}`}
                  select={mainCheckBox}
                  onSelectionChange={() => {
                    setMainCheckBox(!mainCheckBox);
                  }}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.headerSubTextMob}>
                  {"Pane need asjad\nkappi nr"}
                </Text>
                <Text
                  style={[
                    styles.headerSubTextMob,
                    {
                      fontSize: 36,
                      lineHeight: 40,
                      marginLeft: 20,
                      marginTop: 15,
                    },
                  ]}
                >
                  {`${lockersNo}`}
                </Text>
                <Text style={styles.headerSubTextMob}>{" ja sulge uks!"}</Text>
              </View>
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
                  style={styles.btnLeftSideMob}
                />
                <CommonGreenBtn
                  title={"Jätka"}
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
    justifyContent: "center",
    alignItems: "center",
  },
  checkViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
});

//make this component available to the app
export default QRCodeScnnerModal;
