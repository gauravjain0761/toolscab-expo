//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView } from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { icons } from "../../theme/Icons";
import { styles } from "./CardScreenStyle";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { getAsyncUserInfo } from "../../helper/asyncStorage";
import { getPaymentMethods, savePaymentMethod } from "../../actions/authAction";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

// create a component
const CardScreen = () => {
  const navigationRef = useNavigation();
  const [paymentType, setPaymentType] = useState("CreditCard");
  const [isPrimary, setIsPrimary] = useState(false);
  const [cardCode, setCardCode] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const dispatch = useDispatch();

  const onClosePress = () => {
    setIsPrimary(false);
    setPaymentType("CreditCard");
    setCardCode("");
    navigationRef.goBack();
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
  console.log("cardCode.trim().length !== 19", cardCode.trim().length);

  const onConfirmPress = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      if (cardCode.trim().length === 0) {
        alert("Sisestage kaardi kood");
      } else if (cardCode.trim().length !==  16) {
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
            setIsPrimary(false);
            setPaymentType("CreditCard");
            navigationRef.goBack();
          },
          onFailure: () => {},
        };
        dispatch(savePaymentMethod(obj));
      }
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

  const data = [
    { id: 1, name: "CreditCard" },
    { id: 2, name: "PayPal" },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          marginTop: 15,
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
        <Text style={styles.itemTextMob}>{item?.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.containerMob}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
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
                setCardCode(text.replace(/[^0-9]/g, ""));
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
                  style={[styles.inputTextMob, { width: screen_width * 0.38 }]}
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
                  style={[styles.inputTextMob, { width: screen_width * 0.38 }]}
                  placeholderTextColor={colors.filterText}
                  value={cardCVV}
                  onChangeText={(text) => setCardCVV(text)}
                  maxLength={3}
                  secureTextEntry={true}
                  keyboardType={"numeric"}
                />
              </View>
            </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                marginTop: 10,
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

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
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
                width: widthPercentageToDP(32),
                marginTop: 50,
              }}
            />
          </View>
        </View>
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
};
export default CardScreen;
