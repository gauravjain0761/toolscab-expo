import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { hp, screen_width } from "../../helper/globalFunctions";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CartPreviousList from "./CartPreviousList";

type Props = {
  title: string;
  list: any;
};

const PreviousView = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <View>
      <View style={[styles.conainer,{width:screen_width*0.65,marginLeft:-40}]}>
        <View style={[styles.conainer]}>
          <Text style={styles.headerText}>{"Tekstiilipesur"}</Text>
          <Text style={styles.headerText1}>{"KARCHER Puzzi 10/1"}</Text>
          <Text style={styles.headerText2}>{"23.05.2023"}</Text>
        </View>
        <Text style={styles.headerText3}>{"1.58 €"}</Text>
        <TouchableOpacity onPress={()=> setIsSelect(!isSelect)}>

        <Image source={isSelect ? icons.downarrow : icons.rightBack} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      {isSelect &&<CartPreviousList />}
    </View>
  );
};

export default PreviousView;

const styles = StyleSheet.create({
  conainer:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    backgroundColor:"#E5E1CC",
    paddingVertical:8,
    paddingHorizontal:25,
    borderTopLeftRadius:12,
    borderBottomRightRadius:12,
    marginTop:10,
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
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText1: {
    lineHeight:20,
    marginHorizontal:50,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.filterText),
  },
  headerText2: {
    lineHeight:18,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText3: {
    marginRight:15,
    borderWidth:1,
    paddingHorizontal:21,
    backgroundColor:colors.roheline,
    borderRadius:10,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.headerBG),
  },
  iconStyle:{
    width: 14,
    height: 14,
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
});
