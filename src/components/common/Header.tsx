//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { icons } from "../../theme/Icons";
import { hp, wp } from "../../helper/globalFunctions";
import {commonFontStyle} from  '../../theme/Fonts'
import { colors } from "../../theme/Colors";

// create a component
const width = Dimensions.get("window").width;
const Header = () => {
    const data=[
        {id:1,name:'Seadmed'},
        {id:2,name:'Asukohad'},
        {id:3,name:'Meist'},
        {id:4,name:'KKK'},
        {id:5,name:'Renditingimused'},
        {id:6,name:'Kontakt'},
    ]
  return (
    <View style={styles.container}>
      <View>
        <Image source={icons.appLogo} style={styles.appLogo} />
      </View>
      <View style={styles.headerContent}>
        <View style={styles.headerContent}>
            {data?.map((item)=> <TouchableOpacity ><Text style={styles.headerText}>{item.name}</Text></TouchableOpacity>)}
        </View>
        <View style={[styles.headerContent,{marginRight:20}]}>
            <Text style={styles.userText}>SISENE</Text>
            <Image source={icons.userIcone} style={styles.userIconeStyle} />
            <Image source={icons.cartIcon} style={styles.iconStyle} />
            <Image source={icons.notification} style={styles.userIconeStyle} />
            <Text style={[styles.userText,{fontSize:12}]}>EST</Text>
        </View>
      </View>
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
    paddingHorizontal:24
  },
  appLogo: {
    width: 122,
    height: 22,
  },
  headerContent:{
    flexDirection:"row",
    alignItems:'center'
  },
  headerText:{
    marginRight:27,
    ...commonFontStyle("articulatCF-normal",12,colors.white)
  },
  iconStyle:{
    width:24,
    height:24,
    marginRight:16
  },
  userIconeStyle:{
    width:18,
    height:20,
    marginRight:16
  },
  userText:{
    marginRight:14,
    ...commonFontStyle("articulatCF-normal",16,colors.white)
  }
});

//make this component available to the app
export default Header;
