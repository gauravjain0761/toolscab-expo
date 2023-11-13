//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  CartProfileList,
  EmailSettingView,
  FooterView,
  Header,
  MyProfileView,
  PaymentViewCart,
  PreviousView,
} from "../../components";
import { screen_width, wp } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";

import { commonFontStyle } from "../../theme/Fonts";

const tabData = [
  { id: 1, name: "Rendid" },
  { id: 2, name: "Minu profiil" },
  { id: 3, name: "Maksevahendid" },
];

// create a component
const ProfileScreen = () => {
  const [selectedTab, setselectedTab] = useState(1);

  const HeaderCommonView = ({ title, style }: any) => {
    return (
      <View style={style}>
        <View style={{ height: 50 }} />
        <Text style={styles.headerSubText}>{title}</Text>
        <View style={[styles.unLineStyle, style]} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
        <View
          style={{
            width: screen_width * 0.6,
            alignSelf: "center",
          }}
        >
          <Text style={styles.headerText}>{"Minu rendid & profiil"}</Text>

          <View style={{ flexDirection: "row" }}>
            {tabData.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => setselectedTab(item?.id)}
                  style={[
                    styles.tabView,
                    {
                      backgroundColor:
                        selectedTab == item?.id
                          ? colors.roheline
                          : "transparent",
                      borderColor:
                        selectedTab == item?.id
                          ? colors.roheline
                          : "transparent",
                    },
                  ]}
                >
                  <Text style={styles.tabText}>{item?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {selectedTab == 1 && (
            <>
              <HeaderCommonView title={"Aktiivsed rendid"} />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <View style={{ flex: 1 }}>
                  {[0, 1].map(() => {
                    return <CartProfileList />;
                  })}
                </View>
              </View>
              <HeaderCommonView
                title={"Varasemad rendid"}
                style={{ marginBottom: 45 }}
              />
              <PreviousView />
              <PreviousView />
            </>
          )}
          {(selectedTab == 2 || selectedTab == 3) && (
            <>
              <HeaderCommonView title={"Minu profiil"} />
              <MyProfileView />
              <HeaderCommonView title={"Maksevahendid"} />
              <PaymentViewCart />
              {selectedTab == 2 && (
                <>
                  <HeaderCommonView title={"E-maili seaded"} />
                  <EmailSettingView />{" "}
                </>
              )}
            </>
          )}
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
    backgroundColor: "#FCFCFC",
  },
  unLineStyle: {
    width: screen_width * 0.6,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.black),
  },
  tabView: {
    // width: '1%',
    // borderBottomColor: 'transparent',
    paddingHorizontal: 40,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 5,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  ofusText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 24, colors.black),
  },
  ofusSubText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  headerText: {
    marginLeft: 35,
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  headerSubText: {
    marginBottom: 5,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
});

//make this component available to the app
export default ProfileScreen;
