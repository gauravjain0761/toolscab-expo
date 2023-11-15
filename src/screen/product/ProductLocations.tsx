//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CommonMapView,
  Header,
  RenderMapRow,
  SearchBar,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle } from "../../theme/Fonts";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import { useNavigation } from "@react-navigation/native";

// create a component
const ProductLocations = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
        <View
          style={{
            width: screen_width * 0.65,
            alignSelf: "center",
          }}
        >
          <View style={styles.tab2View}>
            <CommonMapView width={widthPercentageToDP(34)} />
            <View style={styles.rightSide}>
              <Text style={styles.rightHeader}>
                Sisesta oma asukoht ning leia endale lähim kapp:
              </Text>
              <SearchBar />
              <View style={styles.checkBox}>
                <Image
                  source={icons.checkbox}
                  style={styles.checkBoxIcon}
                />
                <Text style={styles.checkBoxText}>
                  Tuvasta asukoht automaatselt
                </Text>
              </View>
              {[0, 1, 2, 3].map((item, index) => {
                return <RenderMapRow index={index} />;
              })}
            </View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={icons.closeIcon} style={styles.closeStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.boxStyle}>
            <View>
              <Image
                source={icons.image1}
                style={styles.leftIcon}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.bodyHeader}>Tekstiilipesur</Text>
              <Text style={styles.bodyHeaderText}>KARCHER Puzzi 10/1</Text>
              <View style={styles.bodyBoxStyle}>

              <Text style={styles.boxItem}>Tekstiilipesur</Text>
              <Text style={styles.boxItem}>Voolik</Text>
              <Text style={styles.boxItem}>Pesuaine</Text>
              </View>
            </View>
            <View>
                <Text style={styles.rightTextView}>
                  0<Text style={{ fontSize: 60 }}>.22</Text>
                  <Text style={styles.rightTextDoller}>€</Text>
                </Text>
                <View
                  style={[
                    styles.priceView,
                    {
                      position: "absolute",
                      bottom: 15,
                      width: "100%",
                      paddingLeft: 20,
                    },
                  ]}
                >
                  <Text style={styles.rightTextDollerValue}>26€ / 24h</Text>
                  <Text style={styles.rightSideMin}>Minut</Text>
                </View>
            
            </View>
          </View>
        </View>
        <View style={{ height: 150 }} />
      </ScrollView>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1EF",
  },
  tab2View: {
    flexDirection: "row",
    width: screen_width * 0.65,
    paddingVertical: 30,
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
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
    marginLeft: 35,
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  headerSubText: {
    marginBottom: 5,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  rightSide: {
    flex: 1,
    paddingVertical: 60,
    paddingLeft: 50,
  },
  rightHeader: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  checkBoxIcon: {
    height: 18,
    width: 18,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkBoxText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.checkBoxText),
  },
  closeStyle: {
    width: 24,
    height: 24,
    tintColor: "rgba(0, 0, 0, 1)",
    marginVertical: 60,
    // marginLeft:60,
    left: 60,
    // paddingLeft: 50,
  },
  boxStyle: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 50,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  leftIcon: {
    width: 250,
    height: 170,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightTextView: {
    ...commonFontStyle(fontFamily.semiBold, 100, colors.Roheline2),
    letterSpacing: -5,
  },
  rightTextDoller: {
    ...commonFontStyle(fontFamily.semiBold, 26, colors.Roheline2),
  },
  rightTextDollerValue: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.filterText),
  },
  rightSideMin: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.headerBG),
  },
  bodyHeader: {
    lineHeight:21,
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.black),
  },
  bodyHeaderText: {
    ...commonFontStyle(fontFamily.semiBold, 28, colors.black),
  },
  boxItem:{
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  bodyBoxStyle:{
    borderTopWidth:1,
    borderBottomWidth:1,
    paddingVertical:23,
    marginTop:12,
    borderColor:colors.homecartBG
  }
  
});

//make this component available to the app
export default ProductLocations;
