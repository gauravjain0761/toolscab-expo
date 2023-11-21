import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title?: string;
  list?: any;
};

const CartList = ({ title, list }: Props) => {
  const navigationRef = useNavigation();
  if (Platform.OS == "web") {
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
              <Text style={styles.headerText3}>0,22€/min</Text>
              <Text style={styles.headerText4}>eemalda</Text>
            </View>
            <View></View>
          </View>
        </View>
        <View>
          <Text style={styles.headerText5}>{"+0,05€/min"}</Text>
          <Text style={styles.headerText6}>{"14:59"}</Text>
          <Text style={styles.headerText7}>{"Tasuta broneering"}</Text>
          <CommonGreenBtn
            title="Ava kapp"
            onPress={() => {
              //@ts-ignore
              navigationRef.navigate(screenName.profileScreen);
            }}
            style={styles.btnStyle}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <View style={styles.leftContainerMob}>
          <Image
            source={icons.image1}
            style={styles.iconsStyleMob}
            resizeMode="contain"
          />
          <View style={{marginTop:12}}>
            <Text style={styles.headerTextMob}>Tekstiilipesur</Text>
            <Text style={styles.headerText1Mob}>KARCHER Puzzi 10/1</Text>
            <View style={styles.underLineMob} />
            <Text style={styles.headerText2Mob}>
              Automaat Tallinna Nautica keskus
            </Text>
            <Text style={styles.headerSubText2Mob}>
                Ahtri 9, Tallinn, Eesti
              </Text>
            <View style={{ flexDirection: "row", marginTop:20,justifyContent:'space-between' }}>
              <View>
                <View style={styles.headerView3Mob}>

                <Text style={styles.headerText3Mob}>0,22€/min</Text>
                </View>
                <Text style={styles.headerText4Mob}>eemalda</Text>
              </View>
              <View style={{bottom:20}}>
                <Text style={styles.headerText5Mob}>{"+0,05€/min"}</Text>
                <Text style={styles.headerText6Mob}>{"14:59"}</Text>
                <Text style={styles.headerText7Mob}>{"Tasuta broneering"}</Text>
                
              </View>
            </View>
            <CommonGreenBtn
                  title="Ava kapp"
                  onPress={() => {
                    //@ts-ignore
                    navigationRef.navigate(screenName.profileScreen);
                  }}
                  style={styles.btnStyleMob}
                />
          </View>
        </View>
      </View>
    );
  }
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 20,
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
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.red),
  },
  headerText6: {
    textAlign: "center",
    lineHeight: 24,
    ...commonFontStyle(fontFamily.articulat_bold, 24, colors.headerBG),
  },
  headerText7: {
    lineHeight: 18,
    textAlign: "center",
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  itemText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
  btnStyle: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(7),
    marginTop: 8,
  },

  //mobile

  containerMob: {
    marginBottom: 30,
  },
  leftContainerMob: {
    // flex: 1,
  },
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    // alignItems: "center",
    marginTop: 5,
  },
  underLineMob: {
    borderWidth: 0.5,
    marginVertical: 8,
    borderColor: colors.headerColorBg,
    // flex:0.5
  },
  iconsStyleMob: {
    width: 223,
    height: 140,
    alignSelf: "center",
  },
  headerTextMob: {
    lineHeight: 18,
    ...defaultFont(400, 12, colors.filterText),
  },
  headerText1Mob: {
    lineHeight: 24,
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
  headerView3Mob: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
  },
  headerText4Mob: {
    marginLeft:10,
    marginTop:3,
    ...defaultFont(400, 12, colors.red),
  },
  headerText5Mob: {
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 4,
    ...defaultFont(400, 12, colors.red),
  },
  headerText6Mob: {
    textAlign: "center",
    lineHeight: 30,
    ...defaultFont(600, 24, colors.headerBG),
  },
  headerText7Mob: {
    lineHeight: 18, 
    textAlign: "center",
    bottom:4,
    ...defaultFont(400, 12, colors.filterText),
  },
  itemTextMob: {
    ...defaultFont(400, 12, colors.checkBoxText),
  },
  btnStyleMob: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(28),
    marginTop: 40,
    alignSelf:'center',
    marginBottom:30
  },
});
