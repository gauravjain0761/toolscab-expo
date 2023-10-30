//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";

// create a component
const DropDownMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Asukoht</Text>
      <View
        style={{
          borderWidth: 1,
          width: 150,
          paddingVertical: 5,
          paddingHorizontal: 8,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          borderRadius:5,
          marginTop:5
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.roheline,
            padding: 6,
            borderRadius: 6,
            width: 70,
            justifyContent:'space-between'
            
          }}
        >
          <Text style={{fontSize:14,fontFamily:'roboto'}}>{"Tallinn"}</Text>
          <Image source={icons.closecircle} style={{ width: 12, height: 12 }} />
        </View>
        <Image source={icons.downarrow} style={{ width: 12, height: 12 }} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
});

//make this component available to the app
export default DropDownMenu;
