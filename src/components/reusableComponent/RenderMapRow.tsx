import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import CommonGreenBtn from "./CommonGreenBtn";

type Props = {
  title?: string;
  list?: any;
  index: number;
};

const RenderMapRow = ({ title, list, index }: Props) => {

  return (
    <View>
      <Text style={styles.headerText}>Vahemaa 1.20km</Text>
      <View style={[styles.cardView,{ borderBottomWidth:index==3 ? 0 : 1,}]}>
        <View style={{ flex: 1, marginTop: 5 }}>
          <Text style={styles.cardTextView}>
            {"Automaat Tallinna Nautica keskus"}
          </Text>
          <Text style={[styles.cardSubTextView]}>Ahtri 9</Text>
          <Text style={styles.cardViewValue}>10151 TALLINN</Text>
        </View>
        <CommonGreenBtn
          title="Broneeri"
          onPress={() => {}}
          style={{
            borderColor: colors.headerBG,
            marginLeft: 10,
          }}
        />
      </View>
    </View>
  );
};

export default RenderMapRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  headerText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  cardView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.Roheline2,
    paddingBottom: 10,
    marginBottom: 10,
  },
  cardTextView: {
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.headerBG),
  },
  cardSubTextView: {
    marginTop: -3,
    ...commonFontStyle(fontFamily.articulat_regular, 9, colors.filterText),
  },
  cardViewValue: {
    ...commonFontStyle(fontFamily.articulat_regular, 9, colors.filterText),
  },
  

});
