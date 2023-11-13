//import liraries
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header } from "../../components";
import {
  hp,
  screen_height,
  screen_width,
  wp,
} from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { icons, image } from "../../theme/Icons";
import { commonFontStyle } from "../../theme/Fonts";

// create a component
const OurOfUsScreen = () => {
  return (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              flex: 0.6,
              alignItems: "center",
              marginTop: hp(100),
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 555, height: 96 }}
              source={image.esimenetark}
            />
          </View>
          <View
            style={{
              alignItems: "flex-end",
              marginTop: hp(100),
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                width: 745,
                height: 588,

                // marginRight: -wp(130),
              }}
              source={image.toolscab2}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            width: screen_width * 0.73,
            alignSelf: "center",
            marginTop: 150,
          }}
        >
          <Text style={styles.ofusText}>Meist</Text>
          <Text
            style={styles.ofusSubText}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In\npellentesque velit eget ligula iaculis dignissim.\nCurabitur vel tempor augue. Curabitur ultricies\nut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non.\nSed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam\nmollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`}</Text>
          <Text></Text>
        </View>
        <View
          style={{
            height: screen_height * 0.67,
            backgroundColor: "#E5E1CC",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 100,
          }}
        >
          <View>
            <Image source={icons.TarkRentImg} />
            <Text
              style={{
                fontSize: 128,
                fontFamily: fontFamily.bold,
                // letterSpacing: -2.84,
                color: colors.black,
                lineHeight: 115,
              }}
            >
              {"Tark"}
              <Text style={{ color: colors.roheline }}>{"\nRent"}</Text>
            </Text>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 20,
                fontFamily: fontFamily.articulat_regular,
                letterSpacing: -0.8,
                color: colors.black,
                alignSelf: "center",
              }}
            >{`Toolscab sündis Marie Kondo filosoofiast hoida\nelus ainult neid asju mis toovad su ellu rõõmu.\nEsemed mida me kasutame harva hakkavad\nrõõmu toomise asemel kapis ruumi võtma.\nToolscabi visiooniks on anda sulle tööriistad,\net saaksid keskenduda projektile mis parajasti käsil.`}</Text>
          </View>
          <Image
            source={icons.phoneImg}
            style={{ width: 390, height: 510 }}
            resizeMode="contain"
          />
        </View>
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
  userimageStyle: {
    width: wp(550),
    height: hp(600),
    marginLeft: wp(120),
    marginBottom: -hp(40),
  },
  buttonStyle: {
    backgroundColor: colors.black,
    alignSelf: "flex-end",
    padding: wp(15),
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: wp(30),
    borderBottomRightRadius: wp(30),
    marginTop: hp(25),
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
});

//make this component available to the app
export default OurOfUsScreen;
