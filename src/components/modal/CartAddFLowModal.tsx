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
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { onReviewAddAction } from "../../actions/catalogueAction";
import { Keyboard } from "react-native";
import { rentalOpenLockerAction } from "../../actions/cartAction";
import { getAsyncUserInfo } from "../../helper/asyncStorage";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  oncomfirmPress: () => void;
  itemData: any;
};

// create a component
const CartAddFLowModal = ({
  isVisible,
  onClose,
  oncomfirmPress,
  itemData,
}: Props) => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectedTab] = useState(1);
  const [inputSadValue, setInputSadValue] = useState("");
  const [showAddReview, setShowAddReview] = useState(false);
  const [checkBoxData, setCheckBoxData] = useState(
    itemData?.components.map((item) => {
      return { ...item, isSelect: false };
    })
  );
  const [mainCheckBox, setMainCheckBox] = useState(false);
  const dispatch = useDispatch();

  const onFirstTimePress = () => {
    oncomfirmPress();
  };

  const onClosePress = () => {
    onClose();
  };

  const onReviewPress = async () => {
    const customer = await getAsyncUserInfo();
    const obj = {
      params: {
        rental_id: itemData?.rental_id,
        problemDescription: inputSadValue,
      },
      customer_id: customer,
      onSuccess: (res: any) => {},
      onFailure: () => {
        // setSelectedTab(3);
        // setInputSadValue("");
      },
    };
    dispatch(onReviewAddAction(obj));
  };

  const onTabfirstPress = () => {
    if (showAddReview) {
      setSelectedTab(2);
    } else {
      const updatedata = checkBoxData.filter((item) => item.isSelect == true);
      if (updatedata.length && mainCheckBox) {
        setSelectedTab(3);
      } else {
        Alert.alert("");
      }
    }
  };

  const onQrcodePress = async () => {
    const customer = await getAsyncUserInfo();
    itemData?.lockers.map((item: any, index: any) => {
      const obj = {
        params: {
          rental_id: itemData?.rental_id,
          Qr_code: item?.qr_code,
        },
        customer_id: customer,
        onSuccess: (res: any) => {
          if (index === itemData?.lockers.length - 1) {
            setShowAddReview(!showAddReview);
            setCheckBoxData(
              itemData?.components.map((item: any) => {
                return { ...item, isSelect: false };
              })
            );
            setMainCheckBox(false);
            setSelectedTab(2);
          }
        },
        onFailure: (err: any) => {},
      };
      dispatch(rentalOpenLockerAction(obj));
    });
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
          Keyboard.dismiss();
        }}
        onBackdropPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={styles.containerMob}
          onResponderGrant={() => Keyboard.dismiss()}
        >
          <View style={styles.bodyContentMob}>
            <View style={{ marginHorizontal: 0, marginTop: 30 }}>
              <View style={styles.logoStyle}>
                <ImageBackground
                  source={icons.ellipse}
                  style={[
                    styles.commoniconStyleWeb,
                    { justifyContent: "center" },
                  ]}
                >
                  {selectTab == 2 ? (
                    <Image source={icons.sadIcon} style={styles.doneIcon} />
                  ) : (
                    <Image source={icons.done} style={styles.doneIcon} />
                  )}
                </ImageBackground>
              </View>
              {selectTab === 1 ? (
                <>
                  <Text style={styles.headerTextMob}>
                    {`Leidsid oma kapi!`}
                  </Text>
                </>
              ) : selectTab === 2 ? (
                <Text
                  style={[
                    styles.headerTextMob,
                    { lineHeight: 36, textAlign: "center" },
                  ]}
                >
                  {"Meil on kahju kuulda"}
                </Text>
              ) : (
                <Text
                  style={[
                    styles.headerTextMob,
                    { lineHeight: 36, textAlign: "center" },
                  ]}
                >
                  {"Jõudu tööle!"}
                </Text>
              )}
              {selectTab === 1 ? (
                <Text style={styles.tabText1}>
                  Jätkamiseks kontrolli seadme komplektsust
                </Text>
              ) : selectTab === 2 ? (
                <Text style={styles.tabText1}>
                  {
                    "palun pane kõik asjad tagasi täpselt sinna kappi,kust sa selle võtsid"
                  }
                </Text>
              ) : null}
              {selectTab === 1 && (
                <View>
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
                          setShowAddReview(false);
                        }}
                      />
                    );
                  })}
                  <CheckBoxText
                    title={`${itemData?.main_product?.product_name},${itemData?.main_product?.brand}`}
                    select={mainCheckBox}
                    onSelectionChange={() => {
                      setMainCheckBox(!mainCheckBox);
                      setShowAddReview(false);
                    }}
                  />
                  <CheckBoxText
                    select={showAddReview}
                    onSelectionChange={() => {
                      onQrcodePress();
                    }}
                    redColor={true}
                    title={
                      "Kompletist on midagi puudu, või seade on kahjustunud"
                    }
                  />
                </View>
              )}
              {selectTab == 2 && (
                <TextInput
                  placeholder="Palun kirjeldage, mis on komplektist puudu..."
                  multiline
                  style={styles.inputText}
                  value={inputSadValue}
                  onChangeText={(text) => {
                    setInputSadValue(text);
                  }}
                />
              )}
              {selectTab == 3 && (
                <Text style={styles.headerSubTextMob}>
                  {`Sinu rent algas. Pea meeles, et seade oleks tagastades puhas, ning samas seisukorras nagu sa ta kapist võtsid.kui seadme töös esineb puudujääke või tekib opereerimise osas küsimusi, võta ühendust Toolscab klienditoega või vaata meie veebist seadme kasutusjuhendit.`}
                </Text>
              )}

              {selectTab == 1 ? (
                <>
                  {checkBoxData.filter((item) => item.isSelect == true)
                    .length && mainCheckBox ? (
                    <CommonGreenBtn
                      title="Jätka"
                      onPress={() => {
                        onTabfirstPress();
                      }}
                      style={{
                        borderColor: colors.headerBG,
                        marginLeft: 10,
                        width: widthPercentageToDP(30),
                        marginTop: 50,
                        alignSelf: "center",
                        marginBottom: 30,
                      }}
                    />
                  ) : (
                    <View style={{ height: 126 }} />
                  )}
                </>
              ) : selectTab == 3 ? (
                <CommonGreenBtn
                  title="Sule"
                  onPress={() => {
                    navigationRef.navigate(screenName.profileScreen);
                    setSelectedTab(1);
                    setShowAddReview(false);
                    onClosePress();
                  }}
                  style={{
                    borderColor: colors.headerBG,
                    marginLeft: 10,
                    width: widthPercentageToDP(30),
                    marginTop: 50,
                    alignSelf: "center",
                    marginBottom: 30,
                  }}
                />
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginBottom: 20,
                    // marginTop: 20,
                  }}
                >
                  <CommonGreenBtn
                    title="Tagasi"
                    onPress={() => {
                      setSelectedTab(1);
                    }}
                    style={styles.btnLeftSideMob}
                  />
                  <CommonGreenBtn
                    title={"Valmis"}
                    onPress={onReviewPress}
                    style={{
                      borderColor: colors.headerBG,
                      marginLeft: 10,
                      width: widthPercentageToDP(30),
                      marginTop: 50,
                    }}
                  />
                </View>
              )}
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
    paddingHorizontal: 30,
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
    ...defaultFont("700_o", 28, colors.Roheline2),
    alignSelf: "center",
    marginTop: 60,
    lineHeight: 38,
  },
  tabText1: {
    ...defaultFont("400", 14, colors.headerBG),
    alignSelf: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  headerSubTextMob: {
    ...defaultFont(400, 14, colors.headerBG),
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 20,
  },
  inputText: {
    borderWidth: 0.5,
    padding: 8,
    height: 100,
    maxHeight: 200,
    textAlignVertical: "top",
    marginTop: 30,
    left: 2,
    ...defaultFont(400, 14, colors.headerBG),
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
export default CartAddFLowModal;
