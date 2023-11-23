import { FlatList, Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonFontStyle ,defaultFont} from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { navigate } from "../../navigations/RootNavigation";

type Props = {
  title?: string;
  list?: any;
};

const data = [
  { id: 1, name: "Apple Pay", icon: icons.pay1 },
  { id: 2, name: "516737******1589", icon: icons.pay2 },
  { id: 3, name: "516737******1990", icon: icons.pay3 },
];

const renderItem = ({ item }: any) => {
 if(Platform.OS =='web'){
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={item?.icon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <Text style={styles.itemText}>{item?.name}</Text>
      </View>
      <View style={styles.container}>
        {item?.id === 1 && <Text style={styles.rightText}>peamine</Text>}
        <Image source={icons.dotsthreefill} style={styles.iconStyle1} />
      </View>
    </View>
  );
 }else{
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={item?.icon}
          style={styles.iconStyleMob}
          resizeMode="contain"
        />
        <Text style={styles.itemTextMob}>{item?.name}</Text>
      </View>
      <View style={styles.containerMob}>
        {item?.id === 1 && <Text style={styles.rightTextMob}>peamine</Text>}
        <Image source={icons.dotsthreefill1} style={styles.iconStyle1Mob} />
      </View>
    </View>
  );
 }
};

const PaymentViewCart = ({ title, list }: Props) => {
  if(Platform.OS =='web'){
    return (
      <View style={[{ marginTop: 25 }]}>
        <FlatList data={data} renderItem={renderItem} />
        <CommonGreenBtn
          title="Lisa +"
          onPress={() => {}}
          style={{
            borderColor: colors.headerBG,
            marginLeft: 10,
            width: widthPercentageToDP(7),
            marginTop: 50,
            alignSelf: "center",
          }}
        />
      </View>
    );
  }else{
    return (
      <View style={[{ marginTop: 25 }]}>
        <FlatList data={data} renderItem={renderItem} />
        <CommonGreenBtn
          title="Lisa +"
          onPress={() => {navigate(screenName.cardScreen)}}
          style={{
            borderColor: colors.headerBG,
            marginLeft: 10,
            width: widthPercentageToDP(28),
            marginTop: 50,
            alignSelf: "center",
          }}
        />
      </View>
    );
  }
};

export default PaymentViewCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerText: {
    marginLeft: 8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  itemText: {
    marginLeft: 20,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  rightText: {
    marginRight: 20,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.black),
  },

  iconStyle: {
    width: 20,
    height: 16,
  },
  iconStyle1: {
    width: 26,
    height: 26,
  },

  //Mobile
  containerMob: {
    flexDirection: "row",
    alignItems: "center",
  },
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerTextMob: {
    marginLeft: 8,
    ...defaultFont(400, 18, colors.black),
  },
  itemTextMob: {
    marginLeft: 20,
    ...defaultFont(400, 18, colors.black),
  },
  rightTextMob: {
    marginRight: 20,
    ...defaultFont(400, 12, colors.black),
  },

  iconStyleMob: {
    width: 20,
    height: 16,
  },
  iconStyle1Mob: {
    width: 26,
    height: 26,
  },
});
