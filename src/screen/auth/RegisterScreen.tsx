//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header, InpuText } from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily, screenName } from "../../helper/constants";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import CommonGreenBtn from "../../components/common/CommonGreenBtn";
import { navigationRef } from "../../navigations/MainNavigator";

const CheckBoxView = ({ title, style }: any) => {
  if (Platform.OS == "web") {
    return (
      <View style={[styles.checkBoxContent, style]}>
        <View style={styles.checkBox}></View>
        <Text style={styles.checkText}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.checkBoxContentMob, style]}>
        <View style={styles.checkBoxMob}></View>
        <Text style={styles.checkTextMob}>{title}</Text>
      </View>
    );
  }
};

// create a component
const RegisterScreen = () => {
  const [selectTab, setSelectTab] = useState(1);

  if (Platform.OS === "web") {
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
  } else {
    return (
      <View style={styles.containerMob}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
          <View
            style={{
              // width: screen_width * 0.65,
              alignSelf: "center",
              marginHorizontal: widthPercentageToDP(5),
            }}
          >
            <View style={{ height: 50 }} />
            <Text style={styles.headerSubTextMob}>{"Registreeri konto"}</Text>
            <View style={[styles.unLineStyleMob]} />
            <View style={styles.tabViewMob}>
              <TouchableOpacity
                onPress={() => setSelectTab(1)}
                style={[
                  styles.tabBtnMob,
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
                  styles.tabBtnMob,
                  {
                    backgroundColor:
                      selectTab == 2 ? colors.roheline : "transparent",
                  },
                ]}
              >
                <Text style={[styles.tabTextMob]}>Ärikonto</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
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
                  <Text style={styles.headerTextMob}>
                    {"Ettevõtte esindaja"}
                  </Text>
                  <InpuText label={"Eesnimi"} />
                  <InpuText label={"Perekonnanimi"} />
                  <InpuText label={"E-post"} />
                  <InpuText label={"Parool"} />
                  <InpuText label={"Parool uuesti"} />
                  <Text style={styles.headerTextMob}>{"Ettevõtte info"}</Text>
                  <InpuText label={"Firma"} />
                  <InpuText label={"Registrikood"} />
                  <InpuText label={"KMKR"} />
                  <Text style={styles.headerTextMob}>
                    {"Ettevõtte aadress"}
                  </Text>
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
                style={[
                  styles.checkTextMob,
                  { marginLeft: widthPercentageToDP(5.9), marginTop: 15 },
                ]}
              >
                Andmete töötlemise põhimõtetega saate tutvuda SIIN:{"\n"}
                <Text style={{ color: colors.Roheline2 }}> vajuta siia</Text>
              </Text>
              <CheckBoxView
                title="Nõustun renditingimustega ja täidan neid."
                style={{ marginTop: 20 }}
              />
              <CommonGreenBtn
                title="Salvesta"
                onPress={() => {
                  navigationRef.navigate(screenName.homeScreen);
                }}
                style={{
                  borderColor: colors.headerBG,
                  marginLeft: 10,
                  width: widthPercentageToDP(35),
                  marginTop: 20,
                  alignSelf: "center",
                }}
              />
            </View>
          </View>
          <View style={{ height: 150 }} />
          {/* <FooterView />  */}
        </ScrollView>
      </View>
    );
  }
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
    marginTop: 100,
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

  //mobile

  containerMob: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerSubTextMob: {
    marginBottom: 5,
    // ...commonFontStyle(fontFamily.bold, 32, colors.black),
    ...defaultFont("700_o", 26, colors.blackType),
    textAlign: "center",
  },
  unLineStyleMob: {
    width: "100%",
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabViewMob: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: heightPercentageToDP(2),
  },
  boxItemMob: {
    ...defaultFont(400, 12, colors.blackType),
  },
  tabTextMob: {
    lineHeight: 20,
    ...defaultFont(400, 18, colors.blackType),
  },
  tabBtnMob: {
    paddingHorizontal: 35,
    paddingVertical: 9,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  checkBoxContentMob: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkBoxMob: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.grey_6,
  },
  checkTextMob: {
    lineHeight: 18,
    marginLeft: 5,
    ...defaultFont(400, 12, colors.blackType),
  },
  headerTextMob: {
    marginBottom: 3,
    marginTop: 5,
    ...defaultFont("700_o", 26, colors.Roheline2),
  },
});

//make this component available to the app
export default RegisterScreen;
