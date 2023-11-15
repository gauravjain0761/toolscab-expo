//import liraries
import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

interface Props {
  containerStyle?: ViewStyle;
  isMainScreen: boolean;
}


const Header = ({ containerStyle, isMainScreen }: Props) => {
  const navigationRef = useNavigation()
  
  const [loginModal,setLoignModal]=useState(false)
  const bgColor = isMainScreen ? "#191917" : colors.headerColorBg;
  const textColor = isMainScreen ? colors.white : colors.black;


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
          <TouchableOpacity onPress={()=>setLoignModal(true)}>

          <Text style={[styles.userText, { color: textColor }]}>SISENE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigationRef.navigate(screenName.profileScreen)}
          >
            <Image
              source={icons.userIcone}
              style={[styles.userIconeStyle, { tintColor: textColor }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigationRef.navigate(screenName.cartScreen)}
          >
            <Image
              source={icons.cartIcon}
              style={[styles.iconStyle, { tintColor: textColor }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigationRef.navigate(screenName.cartScreen)}
          >
            <Image
              source={icons.notification}
              style={[styles.userIconeStyle, { tintColor: textColor }]}
            />
          </TouchableOpacity>
          <Text style={[styles.userText, { fontSize: 12, color: textColor }]}>
            EST
          </Text>
        </View>
      </View>
      <LoginModalWeb isVisible={loginModal} onClose={()=>setLoignModal(false)}/>
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
