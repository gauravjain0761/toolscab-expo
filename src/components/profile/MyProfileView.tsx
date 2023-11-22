import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";

type Props = {
  title?: string;
  list?: any;
};

const TowValue = ({title,value,textStyle}:any) => {
if(Platform.OS=='web'){
  return (
    <View style={[styles.container,{marginTop:12}]}>
      <Text style={styles.itemText}>{title}</Text>
      <Text style={[styles.itemText1,textStyle]}>{value}</Text>
    </View>
  );
}else{
  return (
    <View style={[styles.containerMob,{marginTop:12}]}>
      <Text style={styles.itemTextMob}>{title}</Text>
      <Text style={[styles.itemText1Mob,textStyle]}>{value}</Text>
    </View>
  );
}
};

const MyProfileView = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
 if(Platform.OS == 'web'){
  return (
    <View style={[styles.container,{marginTop:25}]}>
      <View style={[{ flex: 1}]}>
        <TowValue title='Nimi:' value='Rainer Nutt' textStyle={styles.textStyle}/>
        <TowValue title='Isikukood' value='39203244214' />
        <TowValue title='E-post' value='rainernutt@gmail.com' />
        <TowValue title='Telefoninumber' value='+372 53359954' />
      </View>
      <View style={[styles.container,{alignSelf:'flex-start',marginRight:10}]}>
        <Image source={icons.pen} style={{ width: 18, height: 18 }} />
        <Text style={styles.headerText}>{"Muuda"}</Text>
      </View>
    </View>
  );
 }else{
  return (
    <View style={[styles.containerMob,{marginTop:25}]}>
      <View style={[{ flex: 1}]}>
        <TowValue title='Nimi:' value='Rainer Nutt' textStyle={styles.textStyleMob}/>
        <TowValue title='Isikukood' value='39203244214' />
        <TowValue title='E-post' value='rainernutt@gmail.com' />
        <TowValue title='Telefoninumber' value='+372 53359954' />
      </View>
      {/* <View style={[styles.container,{alignSelf:'flex-start',marginRight:10}]}>
        <Image source={icons.pen} style={{ width: 18, height: 18 }} />
        <Text style={styles.headerText}>{"Muuda"}</Text>
      </View> */}
    </View>
  );
 }
};

export default MyProfileView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
   
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerText: {
    marginLeft: 8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  itemText: {
    width: 120,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  textStyle: {
    ...commonFontStyle(fontFamily.bold, 26, colors.black),
  },
  itemText1: {
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  boxView: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey_6,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  //mobile

  containerMob: {
    flexDirection: "row",
    alignItems: "center",
   
  },
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerTextMob: {
    marginLeft: 8,
    ...defaultFont(400, 18, colors.black),
  },
  itemTextMob: {
    width: 120,
    ...defaultFont(400, 14, colors.black),

  },
  textStyleMob: {
    ...defaultFont("700_o", 26, colors.black),
  },
  itemText1Mob: {
    ...defaultFont(400,18, colors.black),

  },
  boxViewMob: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey_6,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
