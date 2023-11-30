//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import { navigationRef } from "../../navigations/RootNavigation";
import { screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";

// create a component
const HomeProductView = ({ data }: any) => {
  const { navigate } = useNavigation();
  const onCardPress = () => {
    navigate(screenName.catalogueFilter);
  };
  return Platform.OS == "web" ? (
    <TouchableOpacity onPress={onCardPress} style={styles.container}>
      <Image
        defaultSource={icons.defultIcon}
        source={{
          uri: `https://api.toolscab.ee/PhotoBinary/CategoryPhoto?category_id=${data?.product_category_id}&maxWidth=300&maxHeight=300`,
        }}
        style={styles.iconStyle}
        resizeMode="contain"
      />
      <Text>{data?.category_title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onCardPress} style={styles.containerMob}>
      <Image
        source={{
          uri: `https://api.toolscab.ee/PhotoBinary/CategoryPhoto?category_id=${data?.product_category_id}&maxWidth=300&maxHeight=300`,
        }}
        style={styles.iconStyleMob}
        resizeMode="contain"
        defaultSource={icons.defultIcon}
      />
      <Text style={defaultFont(400, 14, colors.black)}>
        {data?.category_title}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  //web
  container: {
    width: 260,
    height: 412,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginRight: 21,
    justifyContent: "space-between",
  },
  iconStyle: {
    width: 190,
    height: 190,
    alignSelf: "center",
    marginTop: 30,
  },

  //mobile
  containerMob: {
    width: 208,
    height: 330,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginRight: 21,
    justifyContent: "space-between",
  },
  iconStyleMob: {
    width: 208 - heightPercentageToDP(4),
    height: 190,
    alignSelf: "center",
    marginTop: 30,
    // backgroundColor: 'red'
  },
});

//make this component available to the app
export default HomeProductView;
