import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { hp, screen_width } from "../../helper/globalFunctions";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../common/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";

type Props = {
  title: string;
  list: any;
};

const data = [
  { id: 1, name: "Luban saata endale arveid" },
  { id: 2, name: "Luban saata uudiskirju ja pakkumisi" },
];

const renderItem = ({ item }: any) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <View style={styles.boxStyle} />
      <Text style={styles.itemText}>{item?.name}</Text>
    </View>
  );
};

const EmailSettingView = ({ title, list }: Props) => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <View style={[{ marginTop: 15 }]}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default EmailSettingView;

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
});
