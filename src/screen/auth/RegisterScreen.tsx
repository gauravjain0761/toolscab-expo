//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CommonMapView,
  FooterView,
  Header,
  InpuText,
  RenderMapRow,
  SearchBar,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { commonFontStyle } from "../../theme/Fonts";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../../components/common/CommonGreenBtn";

const CheckBoxView = ({ title, style }: any) => {
  return (
    <View style={[styles.checkBoxContent, style]}>
      <View style={styles.checkBox}></View>
      <Text style={styles.checkText}>{title}</Text>
    </View>
  );
};

// create a component
const RegisterScreen = () => {
  const [selectTab, setSelectTab] = useState(1);
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
        <View
          style={{
            width: screen_width * 0.65,
            alignSelf: "center",
          }}
        >
          <View style={{ height: 50 }} />
          <Text style={styles.headerSubText}>{"Registreeri konto"}</Text>
          <View style={[styles.unLineStyle]} />
          <View style={styles.tabView}>
            <TouchableOpacity
              onPress={() => setSelectTab(1)}
              style={[
                styles.tabBtn,
                {
                  backgroundColor:
                    selectTab === 1 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Erakonto</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectTab(2)}
              style={[
                styles.tabBtn,
                {
                  backgroundColor:
                    selectTab == 2 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={[styles.tabText]}>Ärikonto</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ height: 47 }} />
            {selectTab === 1 && (
              <>
                <InpuText label={"Eesnimi"} />
                <InpuText label={"Perekonnanimi"} />
                <InpuText label={"E-post"} />
                <InpuText label={"Parool"} />
                <InpuText label={"Parool uuesti"} />
              </>
            )}
            {selectTab == 2 && (
              <>
                <Text style={styles.headerText}>{"Ettevõtte esindaja"}</Text>
                <InpuText label={"Eesnimi"} />
                <InpuText label={"Perekonnanimi"} />
                <InpuText label={"E-post"} />
                <InpuText label={"Parool"} />
                <InpuText label={"Parool uuesti"} />
                <Text style={styles.headerText}>{"Ettevõtte info"}</Text>
                <InpuText label={"Firma"} />
                <InpuText label={"Registrikood"} />
                <InpuText label={"KMKR"} />
                <Text style={styles.headerText}>{"Ettevõtte aadress"}</Text>
                <InpuText label={"Aadress"} />
                <InpuText label={"Linnd"} />
                <InpuText label={"Postiindeks"} />
                <InpuText label={"Riik"} />
                <InpuText label={"Mobiiltelefon (xxxxxxxx)"} />
              </>
            )}

            <View style={{ height: 44 }} />
            <CheckBoxView
              title="Tellin uudiskirja"
              style={{ marginBottom: 12 }}
            />
            <CheckBoxView title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. " />
            <Text
              style={[styles.checkText, { marginLeft: -25, marginTop: 15 }]}
            >
              Andmete töötlemise põhimõtetega saate tutvuda SIIN:{" "}
              <Text style={{ color: colors.Roheline2 }}> vajuta siia</Text>
            </Text>
            <CheckBoxView
              title="Nõustun renditingimustega ja täidan neid."
              style={{ marginTop: 20 }}
            />
            <CommonGreenBtn
              title="Salvesta"
              onPress={() => {}}
              style={{
                borderColor: colors.headerBG,
                marginLeft: 10,
                width: widthPercentageToDP(7.8),
                marginTop: 20,
              }}
            />
          </View>
        </View>
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerSubText: {
    marginBottom: 5,
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  unLineStyle: {
    width: screen_width * 0.65,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop:100,
  },
  boxItem: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  tabText: {
    lineHeight: 20,
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.headerBG),
  },
  tabBtn: {
    paddingHorizontal: 35,
    paddingVertical: 9,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  checkBoxContent: {
    flexDirection: "row",
    alignItems: "center",
    width: screen_width * 0.25,
  },

  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.grey_6,
  },
  checkText: {
    lineHeight: 18,
    marginLeft: 5,
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
  },
  headerText: {
    width: screen_width * 0.25,
    marginBottom: 3,
    marginTop: 5,
    ...commonFontStyle(fontFamily.semiBold, 26, colors.Roheline2),
  },
});

//make this component available to the app
export default RegisterScreen;
