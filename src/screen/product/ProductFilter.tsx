//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../theme/Colors";
import { DropDownMenu, FooterView, Header } from "../../components";
import { hp, screen_width, wp } from "../../helper/globalFunctions";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import HeaderBottomPathView from "../../components/common/HeaderBottomPathView";

const filterData = [
  { id: 1, name: "Pesurid" },
  { id: 2, name: "Tolmuimejad" },
  { id: 3, name: "Saed" },
  { id: 4, name: "Puhurid" },
  { id: 5, name: "Trellid" },
  { id: 6, name: "Lõikurid" },
];
// create a component
const ProductFilter = () => {
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <View
        style={{
          width: screen_width * 0.75,
          alignSelf: "center",
          marginTop: hp(60),
        }}
      >
        <HeaderBottomPathView heading="kodu / Seadmed" />
        <View style={styles.containerBody}>
          <View style={styles.leftView}>
            <Text style={styles.leftHeaderText}>Tootekategooriad</Text>
            {filterData.map((item) => {
              return <TouchableOpacity>
                <Text style={styles.leftHeaderItemText}>{item?.name}</Text>
              </TouchableOpacity>
            })}
            <Text style={[styles.leftHeaderText, { marginTop: hp(32) }]}>Filtreeri</Text>
            <DropDownMenu />
          </View>
          <View style={styles.rightView}>
            <Text>right</Text>
          </View>
          H</View>
      </View>
      {/* <View  style={{justifyContent:'flex-end',flex:1}}>
      <FooterView />
      </View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  containerBody: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  leftView: {
    flex: 0.3,
    alignItems: "flex-start",
  },
  leftHeaderText: {
    marginBottom: 10,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  leftHeaderItemText: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  rightView: {
    flex: 1,
  },
});

//make this component available to the app
export default ProductFilter;
