import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonFontStyle,defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import CommonGreenBtn from "./CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { screen_width } from "../../helper/globalFunctions";

type Props = {
  title?: string;
  list?: any;
  index: number;
};

const RenderMapRow = ({ title, list, index }: Props) => {
 if(Platform.OS =='web'){
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
 }else{
  return (
    <View>
      <Text style={styles.rendermapTextMob}>Vahemaa 1.20km</Text>
      <View style={styles.rendermapViewMob}>
        <View style={{ flex: 1, marginTop: 5 }}>
          <Text style={styles.renderTextMob}>
            {"Automaat Tallinna Nautica keskus"}
          </Text>
          <Text style={styles.rendersubTextMob}>Ahtri 9</Text>
          <Text style={styles.rendersubValueTextMob}>10151 TALLINN</Text>
        </View>
      </View>
      <View style={styles.btnViewStyle}>
        <View style={styles.lineView} />
        <CommonGreenBtn
          title="Broneeri"
          onPress={() => {}}
          style={styles.btnRenderMob}
        />
      </View>
    </View>
  );
 }
  
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

  //mobile

  rendermapTextMob: {
    ...defaultFont(400, 12, colors.headerBG),
  },
  rendermapViewMob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingBottom: 10,
  },
  renderTextMob: {
    ...defaultFont(700, 14, colors.headerBG),
  },
  rendersubTextMob: {
    ...defaultFont(400, 9, colors.filterText),
    marginTop: -3,
  },
  rendersubValueTextMob: {
    ...defaultFont(400, 9, colors.filterText),
  },
  btnRenderMob: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(32),
  },
  lineView: {
    borderBottomWidth: 1,
    borderBottomColor: colors.Roheline2,
    width: screen_width * 0.5,
  },
  btnViewStyle:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  

});
