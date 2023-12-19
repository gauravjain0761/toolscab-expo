//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Platform,
  TextInput,
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
import { screen_width } from "../../helper/globalFunctions";
import { getAsyncUserInfo } from "../../helper/asyncStorage";
import { useDispatch } from "react-redux";
import { getPaymentMethods, savePaymentMethod } from "../../actions/authAction";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

// create a component
const CardPaymentModalWeb = ({ isVisible, onClose }: Props) => {
  const navigationRef = useNavigation();
  const [paymentType, setPaymentType] = useState("CreditCard");
  const [isPrimary, setIsPrimary] = useState(false);
  const [cardCode, setCardCode] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const dispatch = useDispatch();

  const onClosePress = () => {
    onClose();
    setIsPrimary(false);
    setPaymentType("CreditCard");
    setCardCode("");
    setCardExpiry('')
    setCardCVV('')
  };

  const getPayment = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      const obj = {
        params: {
          customer_id: customer,
        },
        onSuccess: (res: any) => {},
        onFailure: () => {},
      };
      dispatch(getPaymentMethods(obj));
    }
  };
    

  const onConfirmPress = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      if (cardCode.trim().length === 0) {
        alert("Sisestage kaardi kood");
      } else if (cardCode.trim().length !== 16) {
        alert("palun kinnitage oma kaardi kood");
      } else {
        const obj = {
          data: {
            payment_method_id: null,
            customer_id: customer,
            type: paymentType,
            code: cardCode,
            expiry: new Date(),
            is_primary: isPrimary,
          },
          onSuccess: (res: any) => {
            getPayment();
            onClosePress();
            setIsPrimary(false);
            setPaymentType("CreditCard");
            setCardExpiry('')
            setCardCVV('')
          },
          onFailure: () => {},
        };
        dispatch(savePaymentMethod(obj));
      }
    }
  };

  const data = [
    { id: 1, name: "CreditCard" },
    { id: 2, name: "PayPal" },
  ];

  const renderItem = ({ item }: any) => {
    if (Platform.OS === "web") {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            marginRight: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setPaymentType(item?.name)}
            style={[
              styles.boxStyle,
              {
                borderColor:
                  paymentType == item?.name ? colors.black : colors.filterText,
              },
            ]}
          >
            {paymentType == item?.name && (
              <View style={styles.boxContainerStyle} />
            )}
          </TouchableOpacity>
          <Text style={styles.itemText}>{item?.name}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={styles.boxStyleMob} />
          <Text style={styles.itemTextMob}>{item?.name}</Text>
        </View>
      );
    }
  };

  const _handlingCardExpiry = (text: any) => {
    if (text.indexOf(".") >= 0 || text.length > 5) {
      return;
    }

    if (text.length === 2 && cardExpiry.length === 1) {
      text += "/";
    }
    setCardExpiry(text);
  };

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
            <Text style={styles.headerTextMob}>Lisa kaart</Text>
            <View style={styles.bodyViewMob}>
              <Text style={styles.labelTextMob}>Kaardi number</Text>
              <TextInput
                placeholder="1234 5678 90123 456"
                style={styles.inputTextMob}
                value={cardCode
                  ?.replace(/\s?/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                onChangeText={(text) => {
                      setCardCode(text.replace(/[^0-9]/g, ''));
                }}
                placeholderTextColor={colors.filterText}
                maxLength={19}
                keyboardType={"numeric"}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <View>
                  <Text style={styles.labelTextMob}>Aegub</Text>
                  <TextInput
                    placeholder="kk/aa"
                    style={[styles.inputTextMob, { width: screen_width * 0.1 }]}
                    placeholderTextColor={colors.filterText}
                    keyboardType={"numeric"}
                    value={cardExpiry}
                    onChangeText={_handlingCardExpiry}
                    maxLength={5}
                  />
                </View>
                <View style={{ width: 5 }} />
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.labelTextMob}>Turvakood</Text>
                    <Image
                      source={icons.epquestion}
                      style={styles.epquestionMob}
                    />
                  </View>
                  <TextInput
                    placeholder=""
                    style={[styles.inputTextMob, { width: screen_width * 0.1 }]}
                    value={cardCVV}
                    onChangeText={(text) => setCardCVV(text)}
                    maxLength={3}
                    secureTextEntry={true}
                    keyboardType={"numeric"}
                  />
                </View>
              </View>
              <FlatList data={data} renderItem={renderItem} horizontal />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => setIsPrimary(!isPrimary)}
                  style={[
                    styles.boxStyle,
                    {
                      borderColor:
                        isPrimary == true ? colors.black : colors.filterText,
                      borderRadius: 5,
                      backgroundColor:
                        isPrimary == true ? colors.black : colors.white,
                    },
                  ]}
                >
                  {isPrimary == true && (
                    <Image
                      source={icons.done}
                      style={{ width: 12, height: 12 }}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.itemText}>{"Select to primary"}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginBottom: 30,
              }}
            >
              <CommonGreenBtn
                title="Tühista"
                onPress={onClosePress}
                style={styles.btnLeftSideMob}
              />
              <CommonGreenBtn
                title="Lisa kaart +"
                onPress={onConfirmPress}
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
  itemText: {
    marginLeft: 15,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  boxStyle: {
    width: 20,
    height: 20,
    borderWidth: 1,

    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainerStyle: {
    width: 10,
    height: 10,
    backgroundColor: colors.black,
    borderRadius: 10,
  },
  itemTextMob: {
    marginLeft: 16,
    ...defaultFont(400, 18, colors.black),
    width: screen_width * 0.77,
  },
  boxStyleMob: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.filterText,
    borderRadius: 5,
  },

  headerTextMob: {
    ...commonFontStyle(fontFamily.articulat_bold, 18, colors.black),
    textAlign: "center",
  },
  labelTextMob: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
    marginBottom: 4,
    left: 8,
  },
  bodyViewMob: {
    backgroundColor: colors.roheline,
    paddingVertical: 10,
    marginTop: 20,
    paddingHorizontal: 18,
    borderRadius: 16,
  },
  inputTextMob: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: colors.bottomLine,
    paddingVertical: 12,
    borderRadius: 8,
    paddingLeft: 12,
  },
  epquestionMob: {
    width: 14,
    height: 14,
    marginBottom: 4,
    marginLeft: 10,
  },
  btnLeftSideMob: {
    borderColor: colors.headerBG,
    width: widthPercentageToDP(7),
    marginTop: 50,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
});

//make this component available to the app
export default CardPaymentModalWeb;
