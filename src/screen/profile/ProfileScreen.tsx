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
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CartList,
  CartProfileList,
  CommonMapView,
  FooterView,
  Header,
  HomeProductcart,
  PaymentView,
  PreviousView,
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
import { commonFontStyle } from "../../theme/Fonts";
import HeaderBottomPathView from "../../components/common/HeaderBottomPathView";

const listData = [
  {
    id: 1,
    title: "Kuidas seadet rentida?",
    isSelect: false,
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In\npellentesque velit eget ligula iaculis dignissim.\nCurabitur vel tempor augue.Curabitur ultricies ut nibh non ullamcorper.\nMauris iaculis viverra velit, a rutrum eros cursus non. `,
  },
  {
    id: 2,
    title: "Kuidas rentimise eest tasuda?",
    subTitle: "",
    isSelect: false,
  },
  { id: 3, title: "Kus teid leiab?", subTitle: "", isSelect: false },
  { id: 4, title: "Kuidas ma arve saan?", subTitle: "", isSelect: false },
  {
    id: 5,
    title: "Kas ma saan renditavaid seadmeid ka osta?",
    subTitle: "",
    isSelect: false,
  },
  {
    id: 6,
    title: "Seade läks katki, mida teha?",
    subTitle: "",
    isSelect: false,
  },
];

const tabData = [
  { id: 1, name: "Rendid" },
  { id: 2, name: "Minu profiil" },
  { id: 3, name: "Maksevahendid" },
];

// create a component
const ProfileScreen = () => {
  const [selectedTab, setselectedTab] = useState(1);
  const [downData, setDownData] = useState(listData);

  const HeaderCommonView = ({title,style}:any) => {
    return (
      <View style={style}>
        <View style={{ height: 50, }} />
        <Text style={styles.headerSubText}>{title}</Text>
        <View style={[styles.unLineStyle,style]} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
        <View
          style={{
            width: screen_width * 0.7,
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
          <HeaderCommonView title={"Aktiivsed rendid"}/>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View style={{ flex: 1 }}>
              {[0, 1].map(() => {
                return <CartProfileList />;
              })}
            </View>
          </View>
          <HeaderCommonView title={"Varasemad rendid"} style={{marginBottom:45}}/>
          <PreviousView />
          <PreviousView />
        </View>
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  unLineStyle: {
    width: screen_width * 0.7,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },
  tabView: {
    // width: '1%',
    // borderBottomColor: 'transparent',
    paddingHorizontal: 40,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 5,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
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
  headerText: {
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  headerSubText: {
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
});

//make this component available to the app
export default ProfileScreen;
