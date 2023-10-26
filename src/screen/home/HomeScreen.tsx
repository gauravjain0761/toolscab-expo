//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors } from "../../theme/Colors";
import { Header } from "../../components";
import { hp, wp } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";

// create a component
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.bannerContainer}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  marginRight: wp(120),
                  marginTop: hp(50),
                }}
              >
                <Text
                  style={{
                    fontSize: wp(88),
                    lineHeight: 50,
                    fontFamily: fontFamily.bold,
                    letterSpacing: -0.8,
                    color: colors.black,
                  }}
                >
                  {"Isetegemise\nrõõmuks!"}
                </Text>
                <Text
                  style={{
                    fontSize: wp(24),
                    fontFamily: "articulatCF-regular",
                    color: colors.black,
                  }}
                >
                  {"Eesti esimene minutipõhine tööriistarent"}
                </Text>
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text
                    style={{
                      fontSize: wp(24),
                      marginRight: wp(10),
                      color: colors.roheline,
                      fontFamily: fontFamily.articulat_bold,
                    }}
                  >
                    {"Vaata seadmeid"}
                  </Text>
                  <Image
                    resizeMode="contain"
                    style={{ height: 10, width: 10 }}
                    source={require("../../assets/icon/right-arrow.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                resizeMode="contain"
                style={styles.userimageStyle}
                source={require("../../assets/icon/userImg.png")}
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              flex: 0.6,
              alignItems: "center",
              marginTop: hp(100),
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: wp(700), height: hp(200) }}
              source={require("../../assets/icon/esimene.png")}
            />
            <ImageBackground
              resizeMode="contain"
              source={require("../../assets/icon/stpes.png")}
              style={{
                width: wp(800),
                height: hp(500),
                marginTop: hp(20),
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
              imageStyle={{
                width: wp(800),
                height: hp(500),
              }}
            >
              <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: hp(80),
                    width: wp(400),
                    marginRight: wp(40),
                  }}
                  source={require("../../assets/icon/button.png")}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 0.4,
              alignItems: "flex-end",
              marginTop: hp(100),
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                width: wp(1000),
                height: hp(700),
                flex: 1,
                marginRight: -wp(130),
              }}
              source={require("../../assets/icon/toolscab.png")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bannerContainer: {
    backgroundColor: colors.roheline,
    flex: 0.7,
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
});

//make this component available to the app
export default HomeScreen;
