import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { screen_width } from "../../helper/globalFunctions";

type Props = {
  title?: string;
  list?: any;
};

const data = [
  { id: 1, name: "Luban saata endale arveid" },
  { id: 2, name: "Luban saata uudiskirju ja pakkumisi" },
];

const renderItem = ({ item }: any) => {
  if(Platform.OS==='web'){
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <View style={styles.boxStyle} />
        <Text style={styles.itemText}>{item?.name}</Text>
      </View>
    );
  }else{
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <View style={styles.boxStyleMob} />
        <Text style={styles.itemTextMob}>{item?.name}</Text>
      </View>
    );
  }
};

const EmailSettingView = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);

  if(Platform.OS =='web'){
    return (
      <View style={[{ marginTop: 15 }]}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    );
  }else{
    return (
      <View style={[{ marginTop: 15 }]}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    );
  }
};

export default EmailSettingView;

const styles = StyleSheet.create({
  headerText: {
    marginLeft: 8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  itemText: {
    marginLeft: 20,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  boxStyle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.filterText,
    borderRadius: 5,
  },
  //mobile
  headerTextMob: {
    marginLeft: 8,
    ...defaultFont(400, 18, colors.black),
  },
  itemTextMob: {
    marginLeft: 16,
    ...defaultFont(400, 18, colors.black),
    width:screen_width*0.77,
  },
  boxStyleMob: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.filterText,
    borderRadius: 5,
  },
});
