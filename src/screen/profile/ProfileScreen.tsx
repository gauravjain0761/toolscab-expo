//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
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
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { styles } from "./ProfileScreenStyle";
import { tabData } from "../../helper/constantData";
import { icons } from "../../theme/Icons";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUserInfo } from "../../helper/asyncStorage";
import { deletePaymentMethod, getPaymentMethods, getProfileMethods } from "../../actions/authAction";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getProductAction } from "../../actions/catalogueAction";
import { getActiveRentalsAction, getFinishRentalAction } from "../../actions/cartAction";
import { screenName } from "../../helper/constants";

// create a component
const ProfileScreen = () => {
  const navigationRef = useNavigation();

  const [selectedTab, setselectedTab] = useState(1);
  const dispatch = useDispatch();
  const { getProfileList ,getActiveRental} = useSelector((state) => state.profile);
  const [isSelect, setIsSelect] = useState(true);
console.log("getActiveRental",getActiveRental);

  const { getPaymentList } = useSelector(
    (state) => state.cart
  );
  const isFocused = useIsFocused();

  useEffect(()=>{
     const getProfileList = async() =>{
      const customer = await getAsyncUserInfo()
      if(customer !==null){
        const obj = {
          params:{
            customer_id:customer
          },
          onSuccess: (res: any) => {},
          onFailure: () => {},
        };
        dispatch(getProfileMethods(obj))
        const obj1 = {
          params:{
            customer_id:customer
          },
          onSuccess: (res: any) => {},
          onFailure: () => {},
        };
        dispatch(getActiveRentalsAction(obj1))
      }
     }
     getProfileList()
     getPayment()
  },[isFocused])

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

  const onRenderItemPress = (item: any) => {    
    const obj = {
      params: {
        Payment_method_id: item,
      },
      onSuccess: (res: any) => {
        getPayment()
      },
      onFailure: () => {},
    };
    dispatch(deletePaymentMethod(obj));
  };

  const onFinishPress=(item:any)=>{
    const obj = {
      data: {
        rental_id: item?.rental_id,
        qr_codes: [item?.components?.[0]?.qr_code],
      },
      onSuccess: (res: any) => {
        navigationRef.navigate(screenName.homeScreen);
      },
      onFailure: () => {},
    };
    dispatch(getFinishRentalAction(obj));
  }

  const HeaderCommonView = ({ title, style, isShow,onPress }: any) => {
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
                <Text style={styles.headerRightTextMob}>{isSelect ? "Muuda" : "Salvesta"}</Text>
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
                    {getActiveRental.length > 0 && getActiveRental?.map((item:any) => {
                      return <CartProfileList data={item} onPress={()=>{onFinishPress(item)}}/>;
                    })}
                  </View>
                </View>
                <HeaderCommonView
                  title={"Varasemad rendid"}
                  style={{ marginBottom: 45 }}
                />
                {/* <PreviousView /> */}
                {/* <PreviousView /> */}
              </>
            )}
            {(selectedTab == 2 || selectedTab == 3) && (
              <>
                <HeaderCommonView title={"Minu profiil"} />
                <MyProfileView data={getProfileList}/>
                <HeaderCommonView title={"Maksevahendid"} />
                <PaymentViewCart  data={getPaymentList} onPress={onRenderItemPress}/>
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
              {selectedTab == 1 ? `Tere, ${getProfileList?.first_name}!` : "Minu profiil"}
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
                  {getActiveRental.length > 0 && getActiveRental?.map((item:any) => {
                      return <CartProfileList data={item} onPress={()=>{onFinishPress(item)}}/>;
                    })}
                  </View>
                </View>
                <HeaderCommonView
                  title={"Aktiivsed rendid "}
                  style={{ marginBottom: 10 }}
                />
                {/* <PreviousView />
                <PreviousView /> */}
              </View>
            )}
            {(selectedTab == 2 || selectedTab == 3) && (
              <>
                {/* <HeaderCommonView title={"Minu profiil"} isShow={true} onPress={()=>setIsSelect(!isSelect)} /> */}
                <MyProfileView data={getProfileList}/>
                <HeaderCommonView title={"Maksevahendid"} />
                <PaymentViewCart  data={getPaymentList} onPress={onRenderItemPress}/>
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
  }
};
export default ProfileScreen;
