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

// create a component
const CartScreen = () => {
  const [downData, setDownData] = useState(listData);

  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
        <View
          style={{
            width: screen_width * 0.75,
            alignSelf: "center",
          }}
        >
          <Text style={styles.headerText}>Rendikorvx</Text>
          <View style={styles.unLineStyle} />
          <Text style={styles.headerSubText}>Korvis kokku 2 toodet</Text>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:1}}>
             <CartList />
          </View>
          <View style={{flex:0.48,backgroundColor:colors.homecartBG,padding:18,borderRadius:16}}>
            <Text>Maksemeetodid</Text>
          </View>

          </View>
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
    width: screen_width * 0.75,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    // marginTop:10,
    marginBottom: 12,
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
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
});

//make this component available to the app
export default CartScreen;
