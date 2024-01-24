//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  FlatList,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CartProfileList,
  EmailSettingView,
  FooterView,
  Header,
  MyProfileView,
  PaymentViewCart,
  PreviousView,
  QRCodeScnnerModal,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { styles } from "./ProfileScreenStyle";
import { tabData } from "../../helper/constantData";
import { icons } from "../../theme/Icons";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUserInfo } from "../../helper/asyncStorage";
import {
  deletePaymentMethod,
  getPaymentMethods,
  getProfileMethods,
} from "../../actions/authAction";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getProductAction } from "../../actions/catalogueAction";
import {
  getActiveRentalsAction,
  getFinishRentalAction,
  removeItemFromCartAction,
} from "../../actions/cartAction";
import { fontFamily, screenName } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";

// create a component
const ProfileScreen = () => {
  const navigationRef = useNavigation();

  const [selectedTab, setselectedTab] = useState(1);
  const dispatch = useDispatch();
  const { getProfileList, getActiveRental } = useSelector(
    (state) => state.profile
  );
  const [isSelect, setIsSelect] = useState(true);
  const [itemData, setItemDate] = useState([]);
  const [locarShow, setLocarShow] = useState(false);

  console.log("getActiveRental", getActiveRental);

  const { getPaymentList } = useSelector((state) => state.cart);
  const isFocused = useIsFocused();

  const getProfileListAction = async () => {
    const customer = await getAsyncUserInfo();
    if (customer !== null) {
      const obj = {
        params: {
          customer_id: customer,
        },
        onSuccess: (res: any) => {},
        onFailure: () => {},
      };
      dispatch(getProfileMethods(obj));
      const obj1 = {
        params: {
          customer_id: customer,
        },
        onSuccess: (res: any) => {},
        onFailure: () => {},
      };
      dispatch(getActiveRentalsAction(obj1));
    }
  };
  useEffect(() => {
    getProfileListAction();
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

  const onRenderItemPress = (item: any) => {
    const obj = {
      params: {
        Payment_method_id: item,
      },
      onSuccess: (res: any) => {
        getPayment();
      },
      onFailure: () => {},
    };
    dispatch(deletePaymentMethod(obj));
  };

  const onFinishPress = (item: any) => {
    setLocarShow(true);
    setItemDate(item);
  };

  const onPessRemoveRental = (item: any) => {
    const obj = {
      params: {
        rental_id: item?.rental_id,
      },
      onSuccess: (res: any) => {
        getProfileListAction();
      },
      onFailure: () => {},
    };
    dispatch(removeItemFromCartAction(obj));
  };

  const HeaderCommonView = ({ title, style, isShow, onPress }: any) => {
    if (Platform.OS === "web") {
      return (
        <View style={style}>
          <View style={{ height: 50 }} />
          <Text style={styles.headerSubText}>{title}</Text>
          <View style={[styles.unLineStyle, style]} />
        </View>
      );
    } else {
      return (
        <View style={style}>
          <View style={{ height: 28 }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headerSubTextMob}>{title}</Text>
            {isShow && (
              <TouchableOpacity
                onPress={onPress}
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 12,
                  },
                ]}
              >
                <Image
                  source={isSelect ? icons.pen : icons.save}
                  style={{ width: 18, height: 18, marginRight: 8 }}
                />
                <Text style={styles.headerRightTextMob}>
                  {isSelect ? "Muuda" : "Salvesta"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.unLineStyleMob, style]} />
        </View>
      );
    }
  };

  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
          <View
            style={{
              width: screen_width * 0.6,
              alignSelf: "center",
            }}
          >
            <Text style={styles.headerText}>{"Minu rendid & profiil"}</Text>
            <View style={{ flexDirection: "row" }}>
              {tabData.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => setselectedTab(item?.id)}
                    style={[
                      styles.tabView,
                      {
                        backgroundColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                        borderColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                      },
                    ]}
                  >
                    <Text style={styles.tabText}>{item?.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {selectedTab == 1 && (
              <>
                <HeaderCommonView title={"Aktiivsed rendid"} />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <FlatList
                      data={getActiveRental}
                      renderItem={({ item }) => {
                        return (
                          <CartProfileList
                            data={item}
                            onPress={() => {
                              onFinishPress(item);
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
                                ...commonFontStyle(
                                  fontFamily.articulat_medium,
                                  16,
                                  colors.black
                                ),
                              }}
                            >
                              Aktiivsetes laenutustes pole tooteid
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
                <HeaderCommonView
                  title={"Varasemad rendid"}
                  style={{ marginBottom: 20 }}
                />
                <FlatList
                  data={getActiveRental}
                  renderItem={({ item }) => {
                    return <PreviousView />;
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
                          Varasemates üürilepingutes tooteid ei ole
                        </Text>
                      </View>
                    );
                  }}
                />
              </>
            )}
            {(selectedTab == 2 || selectedTab == 3) && (
              <>
                <HeaderCommonView title={"Minu profiil"} />
                <MyProfileView data={getProfileList} />
                <HeaderCommonView title={"Maksevahendid"} />
                <PaymentViewCart
                  data={getPaymentList}
                  onPress={onRenderItemPress}
                />
                {selectedTab == 2 && (
                  <>
                    <HeaderCommonView title={"E-maili seaded"} />
                    <EmailSettingView />
                  </>
                )}
              </>
            )}
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
          <View style={{ marginHorizontal: 24, marginTop: 30 }}>
            <Text style={styles.headerTextMob}>
              {selectedTab == 1
                ? `Tere, ${getProfileList?.first_name}!`
                : "Minu profiil"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              {tabData.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => setselectedTab(item?.id)}
                    style={[
                      styles.tabViewMob,
                      {
                        backgroundColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                        borderColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                      },
                    ]}
                  >
                    <Text style={styles.tabTextMob}>{item?.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {selectedTab == 1 && (
              <View style={{}}>
                <HeaderCommonView title={"Aktiivsed rendid"} />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <FlatList
                      data={getActiveRental}
                      renderItem={({ item }) => {
                        return (
                          <CartProfileList
                            data={item}
                            onPress={() => {
                              onFinishPress(item);
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
                                ...defaultFont(500, 14, colors.black),
                              }}
                            >
                              Aktiivsetes laenutustes pole tooteid
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
                <HeaderCommonView
                  title={"Aktiivsed rendid "}
                  style={{ marginBottom: 10 }}
                />
                <FlatList
                  data={getActiveRental}
                  renderItem={({ item }) => {
                    return <PreviousView />;
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <View>
                        <Text
                          style={{
                            alignSelf: "center",
                            ...defaultFont(500, 14, colors.black),
                          }}
                        >
                          Varasemates üürilepingutes tooteid ei ole
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            )}
            {(selectedTab == 2 || selectedTab == 3) && (
              <>
                {/* <HeaderCommonView title={"Minu profiil"} isShow={true} onPress={()=>setIsSelect(!isSelect)} /> */}
                <MyProfileView data={getProfileList} />
                <HeaderCommonView title={"Maksevahendid"} />
                <PaymentViewCart
                  data={getPaymentList}
                  onPress={onRenderItemPress}
                />
                {selectedTab == 2 && (
                  <>
                    <HeaderCommonView title={"E-maili seaded"} />
                    <EmailSettingView />
                  </>
                )}
              </>
            )}
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
          {locarShow && (
            <QRCodeScnnerModal
              totle={1}
              lockersNo={itemData?.lockers[0]?.locker_number}
              isVisible={locarShow}
              itemData={itemData}
              onClose={() => setLocarShow(false)}
              oncomfirmPress={() => {
                setTimeout(() => {
                  // setqrcodeModalShow(true);
                  navigationRef.navigate(screenName.finishQRCodeScanner, {
                    itemData: itemData,
                  });
                }, 1000);
                setLocarShow(false);
              }}
            />
          )}
        </ScrollView>
      </View>
    );
  }
};
export default ProfileScreen;
