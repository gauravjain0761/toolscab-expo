import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";

type Props = {
  title: string;
  list: any;
};

const CheckboxView = ({ title, list }: Props) => {
  const [isSelect,setIsSelect]=useState(false)
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
      {list.map((item: any) => {
        return (
          <View style={styles.boxConainer}>
            <TouchableOpacity onPress={()=>setIsSelect(!isSelect)} style={[styles.boxView,{backgroundColor: isSelect?colors.roheline:colors.white}]}>
              {isSelect && <Image source={icons.done} style={{width:14,height:14,tintColor:colors.black}}/>}
            </TouchableOpacity>
            <Text style={styles.itemText}>{item?.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CheckboxView;

const styles = StyleSheet.create({
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:5
  },
  headerText: {
    marginTop:11,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  itemText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
  boxView: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey_6,
    marginRight: 8,
    alignItems:'center',
    justifyContent:'center'
  },
});
