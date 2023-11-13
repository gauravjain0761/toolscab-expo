//import liraries
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../theme/Colors";
import { CartList, FooterView, Header, PaymentView } from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";

import { commonFontStyle } from "../../theme/Fonts";

// create a component
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
        <View
          style={{
            width: screen_width * 0.75,
            alignSelf: "center",
          }}
        >
          <Text style={styles.headerText}>Rendikorvx</Text>
          <View style={styles.unLineStyle} />
          <Text style={styles.headerSubText}>Korvis kokku 2 toodet</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View style={{ flex: 1, marginRight: 18 }}>
              {[0, 1].map(() => {
                return <CartList />;
              })}
            </View>
            <View
              style={{
                flex: 0.3,
                backgroundColor: colors.homecartBG,
                padding: 18,
                borderRadius: 16,
                alignSelf: "flex-start",
              }}
            >
              <PaymentView />
            </View>
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
    backgroundColor: "#FCFCFC",
  },
  unLineStyle: {
    width: screen_width * 0.75,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    // marginTop:10,
    marginBottom: 12,
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
    ...commonFontStyle(fontFamily.bold, 32, colors.black),
  },
  headerSubText: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
});

//make this component available to the app
export default CartScreen;
