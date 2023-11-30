import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";

type Props = {
  title: string;
  list: any;
  onPressItem: (res: any) => void;
  selectData: any;
};

const CheckboxView = ({ title, list, onPressItem, selectData }: Props) => { 
   if(Platform.OS==='web'){
    return (
      <View>
        <Text style={styles.headerText}>{title}</Text>
        {list?.map((item: any) => {
           const filterSelect=selectData?.filter((list:any)=>list == item)
          return (
            <View style={styles.boxConainer}>
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={[
                  styles.boxView,
                  { backgroundColor: filterSelect?.length ? colors.roheline : colors.white },
                ]}
              >
                {filterSelect?.length ? (
                  <Image
                    source={icons.done}
                    style={{ width: 14, height: 14, tintColor: colors.black }}
                  />
                ):null}
              </TouchableOpacity>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          );
        })}
      </View>
    );
   }else{
    return (
      <View>
        <Text style={styles.headerTextMob}>{title}</Text>
        {list?.map((item: any) => {
           const filterSelect=selectData?.filter((list:any)=>list == item)
          return (
            <View style={styles.boxConainerMob}>
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={[
                  styles.boxViewMob,
                  { backgroundColor: filterSelect?.length ? colors.roheline : colors.white },
                ]}
              >
                {filterSelect?.length ? (
                  <Image
                    source={icons.done}
                    style={{ width: 14, height: 14, tintColor: colors.black }}
                  />
                ):null}
              </TouchableOpacity>
              <Text style={styles.itemTextMob}>{item}</Text>
            </View>
          );
        })}
      </View>
    );
   }
};

export default CheckboxView;

const styles = StyleSheet.create({
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerText: {
    marginTop: 11,
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
    alignItems: "center",
    justifyContent: "center",
  },

  //Mobile
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerTextMob: {
    marginTop: 11,
    ...defaultFont(400, 12, colors.filterText),

  },
  itemTextMob: {
    ...defaultFont(400, 12, colors.checkBoxText),

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
