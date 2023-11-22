import { Image, Platform, StyleSheet, Text,  View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";

type Props = {
  title?: string;
  list?: any;
};

const CartPreviousList = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
 if(Platform.OS == 'web'){
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={icons.image1}
          style={styles.iconsStyle}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 30, flex: 0.9 }}>
          <Text style={styles.headerText}>Tekstiilipesur</Text>
          <Text style={styles.headerText1}>KARCHER Puzzi 10/1</Text>
          <View style={styles.underLine} />
          <Text style={styles.headerText2}>
            Automaat Tallinna Nautica keskus{" "}
            <Text style={styles.headerSubText2}>Ahtri 9, Tallinn, Eesti</Text>
          </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={[styles.headerText4,{color:colors.black,marginRight:8}]}>Maksumus:</Text>
            <Text style={styles.headerText3}>0,22€/min</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View>
        <Text style={styles.headerText6}>{"00:25 min"}</Text>
        <Text style={styles.headerText7}>{"23.05.2023"}</Text>
        <CommonGreenBtn
          title="Rendi uuesti"
          onPress={() => {}}
          style={{
            borderColor: colors.headerBG,
            marginLeft: 10,
            width:widthPercentageToDP(7),marginTop:8
          }}
        />
        <Text style={styles.headerText5}>{"PDF arve"}</Text>
      </View>
    </View>
  );
 }else{
  return (
    <View style={styles.containerMob}>
      <View style={styles.leftContainerMob}>
        <View style={{ marginLeft: 10, flex: 0.9 }}>
          <Text style={styles.headerTextMob}>Tekstiilipesur</Text>
          <Text style={styles.headerText1Mob}>KARCHER Puzzi 10/1</Text>
          <View style={styles.underLineMob} />
          <Text style={styles.headerText2Mob}>
            Automaat Tallinna Nautica keskus{" "}
          </Text>
          <Text style={styles.headerSubText2Mob}>Ahtri 9, Tallinn, Eesti</Text>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <Text style={[styles.headerText4Mob,{color:colors.black,marginRight:8}]}>Maksumus:</Text>
            <Text style={styles.headerText3Mob}>0,22€/min</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop:40}}>
        <View style={{flex:1}}>
        <Text style={styles.headerText6Mob}>{"00:25 min"}</Text>
        <Text style={styles.headerText7Mob}>{"23.05.2023"}</Text>
        </View>
        <View style={{bottom:15,marginRight:15}}>
        <CommonGreenBtn
          title="Rendi uuesti"
          onPress={() => {}}
          style={styles.btnStyleMob}
        />
        <Text style={styles.headerText5Mob}>{"PDF arve"}</Text>
        </View>
      </View>
    </View>
  );
 }
};

export default CartPreviousList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom:10,
    marginLeft:-20,
    marginTop:20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  underLine: {
    borderWidth: 0.5,
    marginVertical: 8,
    borderColor: colors.headerColorBg,
    // flex:0.5
  },
  iconsStyle: {
    width: 120,
    height: 120,
  },
  headerText: {
    lineHeight: 18,

    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText1: {
    lineHeight: 20,
    marginTop: 8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  headerText2: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  headerSubText2: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  headerText3: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.headerBG),
  },
  headerText4: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.red),
  },
  headerText5: {
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 5,
    marginTop:4,
    textDecorationLine:'underline',
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.black),
  },
  headerText6: {
    textAlign: "center",
    lineHeight: 24,
    ...commonFontStyle(fontFamily.articulat_bold, 24, colors.headerBG),
  },
  headerText7: {
    lineHeight: 18,
    textAlign:'center',
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  itemText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
  btnStyle:{
    borderColor: colors.headerBG,
    marginLeft: 10,
    width:widthPercentageToDP(7),marginTop:8
  },

  //Mobilr
  containerMob: {
    // flexDirection: "row",
    // alignItems: "center",
    // paddingHorizontal: 24,
    marginBottom:10,
    marginTop:20,
  },
  leftContainerMob: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  underLineMob: {
    borderWidth: 0.5,
    marginVertical: 8,
    borderColor: colors.headerColorBg,
    // flex:0.5
  },
  iconsStyleMob: {
    width: 120,
    height: 120,
  },
  headerTextMob: {
    lineHeight: 18,
    ...defaultFont(400, 12, colors.filterText),
  },
  headerText1Mob: {
    lineHeight: 26,
    marginTop: 8,
    ...defaultFont(400, 18, colors.black),

  },
  headerText2Mob: {
    lineHeight: 21,
    ...defaultFont(700, 14, colors.black),

  },
  headerSubText2Mob: {
    lineHeight: 21,
    ...defaultFont(400, 14, colors.headerBG),

  },
  headerText3Mob: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
    ...defaultFont(400, 12, colors.headerBG),

  },
  headerText4Mob: {
    ...defaultFont(400, 12, colors.red),
  },
  headerText5Mob: {
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 5,
    marginTop:4,
    textDecorationLine:'underline',
    ...defaultFont(400, 12, colors.black),
  },
  headerText6Mob: {
    textAlign: "center",
    lineHeight: 32,
    ...defaultFont(700, 24, colors.headerBG),

  },
  headerText7Mob: {
    lineHeight: 18,
    textAlign:'center',
    ...defaultFont(400, 12, colors.filterText),
  },
  itemTextMob: {
    ...defaultFont(400, 12, colors.checkBoxText),
  },
  btnStyleMob:{
    borderColor: colors.headerBG,
    // marginLeft: 10,
    width:widthPercentageToDP(32),
    // marginTop:8
  },
});
