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
const PaymentModalWeb = ({ isVisible, onClose }: Props) => {
  const navigationRef = useNavigation();
  const [paymentType, setPaymentType] = useState("CreditCard");
  const [isPrimary, setIsPrimary] = useState(false);
  const dispatch = useDispatch();

  const onClosePress = () => {
    onClose();
    setIsPrimary(false)
    setPaymentType('CreditCard')
  };

  const getPayment=async()=>{
    const customer = await getAsyncUserInfo()
    if(customer !== null) {
      const obj = {
        params: {
          customer_id:customer,
        },
        onSuccess: (res: any) => {},
        onFailure: () => {},
      };
      dispatch(getPaymentMethods(obj));
    }
  }

  const onConfirmPress = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      const obj = {
        data: {
          payment_method_id: null,
          customer_id: customer,
          type: paymentType,
          code: "string",
          expiry: new Date(),
          is_primary: isPrimary,
        },
        onSuccess: (res: any) => {
          getPayment()
          onClosePress()
          setIsPrimary(false)
          setPaymentType('CreditCard')
        },
        onFailure: () => {},
      };
      dispatch(savePaymentMethod(obj));
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
          }}
        >
          <TouchableOpacity
            onPress={() => setPaymentType(item?.name)}
            style={[
              styles.boxStyle,
              {
                borderColor:
                  paymentType == item?.name
                    ? colors.Roheline2
                    : colors.filterText,
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
            <Text style={styles.headerText}>Payment Method</Text>
            <FlatList data={data} renderItem={renderItem} />
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
                      isPrimary == true ? colors.Roheline2 : colors.filterText,
                    borderRadius: 5,
                    backgroundColor:
                      isPrimary == true ? colors.Roheline2 : colors.white,
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
                title="Esita"
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
    ...commonFontStyle(fontFamily.bold, 24, colors.Roheline2),
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
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
  itemText: {
    marginLeft: 20,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
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
    backgroundColor: colors.Roheline2,
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
});

//make this component available to the app
export default PaymentModalWeb;
