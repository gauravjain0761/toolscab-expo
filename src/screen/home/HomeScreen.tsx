//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { colors } from "../../theme/Colors";
import { CommonMapView, FooterView, Header, HomeProductcart } from "../../components";
import { hp, wp } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import MapView from "react-native-maps";
import { productDetails } from "../../helper/constantData";
import { icons } from "../../theme/Icons";
// create a component
const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);

  return (
    <View style={styles.container}>
      <Header isMainScreen={true}/>
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
        <View style={{ marginTop: hp(140) }}>
          <Text
            style={{
              fontSize: 34,
              lineHeight: 50,
              fontFamily: fontFamily.regular,
              letterSpacing: -0.8,
              color: colors.black,
              alignSelf: "center",
              marginBottom: 24,
            }}
          >
            {"Asukohad"}
          </Text>
          <CommonMapView />
        </View>
        <View
          style={{
            marginTop: hp(147),
            width: 1102,
            alignSelf: "center",
            marginBottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <View />
            <Text
              style={{
                fontSize: 34,
                lineHeight: 50,
                fontFamily: fontFamily.regular,
                letterSpacing: -0.8,
                color: colors.black,
                alignSelf: "center",
                marginBottom: 24,
              }}
            >
              {"Tutvu meie seadmetega"}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 21,
                  fontFamily: fontFamily.articulat_regular,
                  letterSpacing: -0.8,
                  color: colors.black,
                  marginBottom: 24,
                  marginTop: 5,
                }}
              >
                {"Laienda"}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            ref={flatlistRef}
            horizontal
            showsVerticalScrollIndicator={false}
            initialScrollIndex={currentIndex}
            contentContainerStyle={{ flex: 1 }}
            data={productDetails}
            renderItem={({ item }) => <HomeProductcart data={item} />}
          />
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(currentIndex + 1);
              flatlistRef?.current?.scrollToIndex({
                animated: true,
                index: currentIndex + 1,
              });
            }}
            style={{
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              shadowColor: "#000",
              position: "absolute",
              right: -25,
              top: "45%",
              backgroundColor: colors.white,
            }}
          >
            <Image source={icons.rightBack} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            {productDetails.map((item, index) => {
              return (
                <View>
                  <View
                    style={{
                      width: 69,
                      height: 5,
                      marginRight: 8,
                      backgroundColor:
                        index <= currentIndex
                          ? colors.roheline
                          : colors.homecartBG,
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            height: 600,
            backgroundColor: "#E5E1CC",
            alignItems: "center",
            justifyContent:'center',
            flexDirection:'row'
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
                lineHeight:115
              }}
            >
              {"Tark"}<Text style={{color:colors.roheline}}>{"\nRent"}</Text>
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
          <Image source={icons.phoneImg} style={{width:390,height:510}} resizeMode="contain"/>
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
