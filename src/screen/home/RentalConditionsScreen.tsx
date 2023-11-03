//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CommonMapView,
  FooterView,
  Header,
  HomeProductcart,
} from "../../components";
import {
  hp,
  screen_height,
  screen_width,
  wp,
} from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import MapView from "react-native-maps";
import { productDetails } from "../../helper/constantData";
import { icons, image } from "../../theme/Icons";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";

const listData = [
  {
    id: 1,
    title: "Renditingimused",
    isSelect: false,
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In pellentesque velit eget ligula iaculis dignissim. Curabitur vel tempor augue. Curabitur ultricies ut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non. Sed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam mollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`,
  },
  {
    id: 2,
    title: "Pealkiri",
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In pellentesque velit eget ligula iaculis dignissim. Curabitur vel tempor augue. Curabitur ultricies ut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non. Sed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam mollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`,
    isSelect: false,
  },
  {
    id: 3,
    title: "Pealkiri",
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In pellentesque velit eget ligula iaculis dignissim. Curabitur vel tempor augue. Curabitur ultricies ut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non. Sed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam mollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`,
    isSelect: false,
  },
];

// create a component
const RentalConditionsScreen = () => {
  const [downData, setDownData] = useState(listData);

 if(Platform.OS =='web'){
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 150 }}>
        {downData?.map((item) => {
          return (
            <View
              style={{
                width: screen_width * 0.7,
                alignSelf: "center",
                paddingHorizontal: 24,
                marginBottom: 32,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  ...commonFontStyle(
                    fontFamily.articulat_normal,
                    24,
                    colors.black
                  ),
                }}
              >
                {item?.title}
              </Text>

              <Text
                style={{
                  lineHeight: 20,
                  marginBottom: 30,
                  ...commonFontStyle(
                    fontFamily.articulat_normal,
                    18,
                    colors.black
                  ),
                }}
              >
                {item?.subTitle}
              </Text>
            </View>
          );
        })}
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
 }else{
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: heightPercentageToDP(5) }}>
        {downData?.map((item) => {
          return (
            <View
              style={{
                width: screen_width * 1,
                alignSelf: "center",
                paddingHorizontal: 24,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  ...defaultFont(400, 24, colors.black),
                }}
              >
                {item?.title}
              </Text>

              <Text
                style={{
                  lineHeight: 20,
                  marginBottom: heightPercentageToDP(6),
                  marginTop:heightPercentageToDP(2),
                  ...defaultFont(400, 18, colors.black),
                }}
              >
                {item?.subTitle}
              </Text>
            </View>
          );
        })}
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
 }
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  ofusText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 24, colors.black),
  },
  ofusSubText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
});

//make this component available to the app
export default RentalConditionsScreen;
