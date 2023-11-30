import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp, screen_width } from "../../helper/globalFunctions";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";

type Props = {
  heading?: string;
  heading1?: string;
  heading2?: string;
  onHeadingPress?:()=>void
  onHeadingPress1?:()=>void
  onHeadingPress2?:()=>void
  onHeadingMainPress?:()=>void
};

const HeaderBottomPathView = ({ heading ,heading1,heading2,onHeadingPress,onHeadingPress1,onHeadingPress2,onHeadingMainPress}: Props) => {

    
  return (
    <View>
      <View style={styles.bodyHeader}>
        <TouchableOpacity onPress={onHeadingMainPress}>

        <Text style={styles.heading}>{'kodu /'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHeadingPress}>
          <Text style={styles.heading}>{heading}</Text>
        </TouchableOpacity>
        {!heading1?.includes("undefined") && <TouchableOpacity onPress={onHeadingPress1}>
          <Text style={styles.heading}>{heading1}</Text>
        </TouchableOpacity>}
        {!heading2?.includes("undefined") && <TouchableOpacity onPress={onHeadingPress2}>
          <Text style={styles.heading}>{heading2}</Text>
        </TouchableOpacity>}
      </View>
      <View style={styles.unLineStyle} />
    </View>
  );
};

export default HeaderBottomPathView;

const styles = StyleSheet.create({
  bodyHeader: {
    alignItems: "flex-start",
    flexDirection:'row'
  },
  unLineStyle: {
    width: screen_width * 0.75,
    borderWidth: 1,
    height: 2,
    borderColor: "#F5F1EF",
    marginVertical: hp(50),
  },
  heading: {
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.black),
  },
});
