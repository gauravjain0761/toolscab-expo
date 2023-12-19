import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";

type Props = {
  title?: string;
  list?: any;
  data?: any;
};

// const data = [
//   { id: 1, name: "Apple Pay", icon: icons.pay1 },
//   { id: 2, name: "**** 1234", icon: icons.pay2 },
//   { id: 3, name: "**** 1234", icon: icons.pay3 },
// ];

const renderItem = ({ item }: any) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={icons.pay1}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <Text style={styles.itemText}>{item?.code?.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()}</Text>
      </View>
      <View style={styles.boxView} />
    </View>
  );
};

const PaymentView = ({ title, list ,data}: Props) => { 
  return (
    <View>
      <Text style={styles.headerText}>{"Maksemeetodid"}</Text>
      <FlatList data={data} renderItem={renderItem} />
      <View style={styles.underLine}/>
      <Text style={styles.desText}>{`Peale rendi lõppemist arvestatakse\nautomaatselt vastav summa Teie\npangakaardilt maha.`}</Text>
      <Text style={styles.desSubText}>{`Esimesed 15 minutit on broneering tasuta\n`}<Text style={{fontFamily:fontFamily.articulat_normal}}>{`ning seejärel muutub tasuliseks vastavalt\nseadmele`}</Text></Text>
    </View>
  );
};

export default PaymentView;

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
    lineHeight: 21,
    marginBottom:15,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  itemText: {
    marginLeft: 10,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
 
  iconStyle: {
    width: 20,
    height: 12,
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
  underLine:{
    marginTop:100,
    borderWidth:0.5,
    borderColor:colors.filterText
  },
  desText: {
    lineHeight:18,
    marginTop:12,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  desSubText: {
   lineHeight:18,
   marginTop:10,
    ...commonFontStyle(fontFamily.articulat_bold, 12, colors.filterText),
  },
});
