//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { icons } from "../../theme/Icons";
import { commonFontStyle } from "../../theme/Fonts";
import { colors } from "../../theme/Colors";
import { fontFamily, screenName } from "../../helper/constants";
import LoginModalWeb from "../modal/LoginModalWeb";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { clearAsync, getAsyncUserInfo } from "../../helper/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT } from "../../actions/dispatchTypes";
import _ from "lodash";
import { getProfileMethods } from "../../actions/authAction";

interface Props {
  containerStyle?: ViewStyle;
  isMainScreen: boolean;
}

const Header = ({ containerStyle, isMainScreen }: Props) => {
  const navigationRef = useNavigation();
  const dispatch = useDispatch();

  const [loginModal, setLoignModal] = useState(false);
  const { getProfileList } = useSelector((state) => state.profile);
  const bgColor = isMainScreen ? "#191917" : colors.headerColorBg;
  const textColor = isMainScreen ? colors.white : colors.black;

  const isFocused = useIsFocused();

  useEffect(() => {
    const getProfileList = async () => {
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
      }
    };
    getProfileList();
  }, [isFocused]);

  const data = [
    {
      id: 1,
      name: "Seadmed",
      onPress: () => navigationRef.navigate(screenName.catalogueFilter),
    },
    {
      id: 2,
      name: "Asukohad",
      onPress: () => navigationRef.navigate(screenName.catalogueFilter),
    },
    {
      id: 3,
      name: "Meist",
      onPress: () => navigationRef.navigate(screenName.ourOfUsScreen),
    },
    {
      id: 4,
      name: "KKK",
      onPress: () => navigationRef.navigate(screenName.faqScreen),
    },
    {
      id: 5,
      name: "Renditingimused",
      onPress: () => navigationRef.navigate(screenName.rentalConditionsScreen),
    },
    { id: 6, name: "Kontakt" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        onPress={() => navigationRef.navigate(screenName.homeScreen)}
      >
        <Image
          source={icons.appLogo}
          style={[styles.appLogo, { tintColor: textColor }]}
        />
      </TouchableOpacity>
      <View style={styles.headerContent}>
        <View style={styles.headerContent}>
          {data?.map((item) => (
            <TouchableOpacity onPress={item?.onPress}>
              <Text style={[styles.headerText, { color: textColor }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.headerContent, { marginRight: 20 }]}>
          <TouchableOpacity
            onPress={() => {
              !_.isEmpty(getProfileList)
                ? navigationRef.navigate(screenName.profileScreen)
                : setLoignModal(true);
            }}
            style={{flexDirection:'row',alignItems:'center'}}
          >
            <Image
              source={icons.userIcone}
              style={[styles.userIconeStyle, { tintColor: textColor }]}
            />
             <Text
              style={[
                styles.userText,
                { color: textColor, textTransform: "uppercase" },
              ]}
            >
              {!_.isEmpty(getProfileList)
                ? `Tere ${getProfileList?.first_name}`
                : "SISENE"}
            </Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigationRef.navigate(screenName.cartScreen)}
          >
            <Image
              source={icons.cartIcon}
              style={[styles.iconStyle, { tintColor: textColor }]}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {
              navigationRef.navigate(screenName.cartScreen);
            }}
          >
            <Image
              source={icons.notification}
              style={[styles.userIconeStyle, { tintColor: textColor }]}
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.userText, { fontSize: 12, color: textColor }]}>
              EST
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              clearAsync();
              dispatch({ type: USER_LOGOUT });
              navigationRef.navigate(screenName.homeScreen);
            }}
          >
            <Image
              source={icons.turnoff}
              style={[
                styles.iconStyle,
                { tintColor: textColor, width: 20, height: 20 },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <LoginModalWeb
        isVisible={loginModal}
        onClose={() => setLoignModal(false)}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  appLogo: {
    width: 122,
    height: 22,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginRight: 27,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.white),
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  userIconeStyle: {
    width: 18,
    height: 20,
    marginRight: 16,
  },
  userText: {
    marginRight: 14,
    ...commonFontStyle(fontFamily.articulat_normal, 16, colors.white),
  },
});

//make this component available to the app
export default Header;
