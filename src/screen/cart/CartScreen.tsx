//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  Image,
  FlatList,
} from "react-native";
import {
  CartFlowModal,
  CartList,
  FooterView,
  Header,
  PaymentView,
  QRCodeModal,
} from "../../components";
import { styles } from "./CartScreenStyle";
import { icons } from "../../theme/Icons";
import { colors } from "../../theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getAsyncUserInfo } from "../../helper/asyncStorage";
import { getPaymentMethods } from "../../actions/authAction";
import {
  getShoppingCartAction,
  getStartRentalsAction,
  removeItemFromCartAction,
} from "../../actions/cartAction";
import { fontFamily, screenName } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";

// create a component
const CartScreen = () => {
  const [qrcodeModalShow, setqrcodeModalShow] = useState(false);
  const [locarShow, setLocarShow] = useState(false);
  const [itemData, setItemDate] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigationRef = useNavigation();

  const { getPaymentList, getShoppingCart } = useSelector(
    (state) => state.cart
  );
  console.log("getShoppingCart", getShoppingCart);

  const getCardList = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      const obj = {
        params: {
          //  customer_id:"902f8f9b-1c9e-4e6f-8f2d-9c6e85e9c955"
          customer_id: customer,
        },
        onSuccess: (res: any) => {},
        onFailure: () => {},
      };
      dispatch(getShoppingCartAction(obj));
    }
  };

  useEffect(() => {
    getCardList();
    getPayment();
  }, [isFocused]);

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

  const onActivePress = () => {
    const qeCodelist = [];
    itemData?.components.map((item) => {
      qeCodelist.push(item.qr_code);
    });
    const obj = {
      data: {
        rental_id: itemData?.rental_id,
        qr_codes: qeCodelist,
      },
      onSuccess: (res: any) => {
        setTimeout(() => {
          setqrcodeModalShow(true);
        }, 500);
        setLocarShow(false);
      },
      onFailure: () => {},
    };
    dispatch(getStartRentalsAction(obj));
  };
  const onPessRemoveRental = (item: any) => {
    const obj = {
      params: {
        rental_id: item?.rental_id,
      },
      onSuccess: (res: any) => {
        getCardList();
      },
      onFailure: () => {},
    };
    dispatch(removeItemFromCartAction(obj));
  };

  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
          <View style={styles.mainStyle}>
            <Text style={styles.headerText}>Rendikorvx</Text>
            <View style={styles.unLineStyle} />
            <Text style={styles.headerSubText}>
              Korvis kokku {getShoppingCart.length} toodet
            </Text>
            <View style={styles.cartStyle}>
              <View
                style={{ flex: 1, marginRight: 18, alignSelf: "flex-start" }}
              >
                <FlatList
                  data={getShoppingCart}
                  renderItem={({ item }) => {
                    return (
                      <CartList
                        data={item}
                        onPress={() => onActivePress(item)}
                        removeRental={() => onPessRemoveRental(item)}
                      />
                    );
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <View>
                        <Text
                          style={{
                            alignSelf: "center",
                            ...commonFontStyle(
                              fontFamily.articulat_medium,
                              16,
                              colors.black
                            ),
                          }}
                        >
                          Ostukorvis ei ole ühtegi toodet
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
              <View style={styles.paymentStyle}>
                <PaymentView data={getPaymentList} />
              </View>
            </View>
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 40 }}>
          <View style={styles.mainStyleMob}>
            <Text style={styles.headerTextMob}>Rendikorv</Text>
            <View style={styles.unLineStyleMob} />
            <Text style={styles.headerSubTextMob}>
              Korvis kokku {getShoppingCart.length} toodet
            </Text>
            <View style={styles.cartStyleMob}>
              <View style={{ flex: 1 }}>
                <FlatList
                  data={getShoppingCart}
                  renderItem={({ item }) => {
                    return (
                      <CartList
                        data={item}
                        onPress={() => {
                          setLocarShow(true);
                          setItemDate(item);
                        }}
                        removeRental={() => onPessRemoveRental(item)}
                      />
                    );
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <View>
                        <Text
                          style={{
                            alignSelf: "center",
                            ...defaultFont(500, 16, colors.black),
                          }}
                        >
                          Ostukorvis ei ole ühtegi toodet
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.homecartBG,
              paddingTop: 30,
              paddingHorizontal: 30,
              paddingBottom: 40,
              marginTop:20
            }}
          >
            <Image source={icons.commonicon} style={styles.commoniconStyle} />
            <View style={{ marginLeft: 30 }}>
              <Text style={styles.listTest1}>
                Esimesed 15 minutit on broneering tasuta
              </Text>
              <Text style={styles.listTest2}>
                {"ning seejärel muutub tasuliseks\nvastavalt seadmele"}
              </Text>
              <Text style={styles.listTest3}>
                {
                  "Peale rendi lõppemist arvestatakse\nautomaatselt vastav summa Teie \npangakaardilt maha."
                }
              </Text>
            </View>
          </View>
          {/* <View style={{ height: 150 }} /> */}
          <FooterView />
          {/* <QRCodeModal
            isVisible={qrcodeModalShow}
            onClose={() => setqrcodeModalShow(false)}
            itemData={itemData}
          /> */}
          <CartFlowModal
            isVisible={locarShow}
            onClose={() => {
              setLocarShow(false);
            }}
            itemData={itemData}
            oncomfirmPress={() => {
              setTimeout(() => {
                // setqrcodeModalShow(true);
                navigationRef.navigate(screenName.qrCodeScannerScreen,{itemData:itemData})
              }, 1000);
              setLocarShow(false);
            }}
          />
        </ScrollView>
      </View>
    );
  }
};

//make this component available to the app
export default CartScreen;
