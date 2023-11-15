//import liraries
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { CommonMapView, FooterView, Header,HomeProductView  } from "../../components";
import { hp, wp } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";
import { productDetails } from "../../helper/constantData";
import { icons } from "../../theme/Icons";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { defaultFont } from "../../theme/Fonts";
import { useDispatch } from "react-redux";
import { getCatalogue } from "../../actions/catalogueAction";
// create a component
const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);
  const dispatch = useDispatch();


  let data = [
    `Leia sobiv  seade ning${'\n'}lähim seadmekapp`,
    `Broneeri seade veebis`,
    `Mine seadmele tööriistakappi${'\n'}järgi ning alusta kasutamist`,
    `Tagasta seade`
  ]

useEffect(()=>{
  const obj = {
    onSuccess: (res: any) => {
      
    },
    onFailure: () => {},
  };
  // dispatch(getCatalogue(obj))

},[])

  return (
    <View style={styles.container}>
      {Platform.OS == 'web' ?
        <View>
          <Header isMainScreen={true} />
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
                        fontFamily: fontFamily.semiBold,
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
                          fontFamily: fontFamily.articulatCF_semibold,
                        }}
                      >
                        {"Vaata seadmeid"}
                      </Text>
                      <Image
                        resizeMode="contain"
                        style={{ height: 10, width: 10 }}
                        source={icons.right_arrow}
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
                    source={icons.userImg}
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
                  source={icons.esimene}
                />
                <ImageBackground
                  resizeMode="contain"
                  source={icons.stpes}
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
                      source={icons.buttonIcon}
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
                  source={icons.toolscab}
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
                renderItem={({ item }) => <HomeProductView data={item} />}
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
                justifyContent: 'center',
                flexDirection: 'row'
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 128,
                    fontFamily: fontFamily.bold,
                    // letterSpacing: -2.84,
                    color: colors.black,
                    lineHeight: 115
                  }}
                >
                  {"Tark"}<Text style={{ color: colors.roheline }}>{"\nRent"}</Text>
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
              <Image source={icons.phoneImg} style={{ width: 390, height: 510 }} resizeMode="contain" />
            </View>
            <FooterView />
          </ScrollView>
        </View>
        :
        <View>
          <ScrollView>
            <View style={styles.content_1}>
              <View style={{ position: 'absolute', paddingLeft: heightPercentageToDP(2), paddingTop: 60 }}>
                <Text style={{ lineHeight: 40, letterSpacing: -2, ...defaultFont('600_o', 35, colors.black) }}>{"Isetegemise\nrõõmuks!"}</Text>
                <Text style={{ ...defaultFont(400, 11.25, colors.black) }}>Eesti esimene minutipõhine tööriistarent</Text>
                <TouchableOpacity style={styles.buttonStyle2}>
                  <Text style={{ ...defaultFont(600, 13, colors.roheline) }} >
                    {"Vaata seadmeid"}
                  </Text>
                  <Image resizeMode="contain" style={{ height: 10, width: 10, marginLeft: 5 }} source={icons.right_arrow} />
                </TouchableOpacity>
              </View>
              <Image resizeMode="contain" style={styles.userimageStyleMobile} source={icons.userImg} />
            </View>
            <Image resizeMode="contain" style={{ width: wp(700), height: hp(200), resizeMode: 'contain', alignSelf: 'center', marginVertical: heightPercentageToDP(6) }} source={icons.esimene} />
            {data.map((item, index) => {
              return (
                <View style={[styles.stpesView, {
                  borderTopStartRadius: (index == 1 || index == 3) ? 0 : 25,
                  borderTopEndRadius: (index == 1 || index == 3) ? 25 : 0,
                  borderBottomStartRadius: (index == 1 || index == 3) ? 25 : 0,
                  borderBottomEndRadius: (index == 1 || index == 3) ? 0 : 25,
                }]}>
                  <Text style={defaultFont('600_o', 50, colors.roheline)}>{index + 1}</Text>
                  <Text style={{ ...defaultFont(400, 14, colors.white), lineHeight: 20, marginLeft: 15 }}>{item}</Text>
                </View>
              )
            })}
            <TouchableOpacity style={styles.buttonStyle3}>
              <Text style={{ ...defaultFont(600, 13, colors.roheline) }} >
                {"Vaata seadmeid"}
              </Text>
              <Image resizeMode="contain" style={{ height: 10, width: 10, marginLeft: 5 }} source={icons.right_arrow} />
            </TouchableOpacity>
            <Text style={styles.title}>Tutvu meie seadmetega</Text>
            <FlatList
              ref={flatlistRef}
              horizontal
              showsVerticalScrollIndicator={false}
              initialScrollIndex={currentIndex}
              contentContainerStyle={{ paddingLeft: heightPercentageToDP(5) }}
              data={productDetails}
              renderItem={({ item }) => <HomeProductView data={item} />}
              showsHorizontalScrollIndicator={false}
            />

            <View style={{ flexDirection: "row", alignSelf: "center", marginVertical: heightPercentageToDP(4) }}>
              {productDetails.map((item, index) => {
                return (
                  <View>
                    <View
                      style={{
                        width: 40,
                        height: 5,
                        marginRight: 5,
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
            <View style={styles.lastContent}>
              <Text
                style={{
                  lineHeight: 80,
                  ...defaultFont('600_o', 64, colors.black)
                }}
              >
                {"Tark"}<Text style={{ color: colors.roheline }}>{"\nRent"}</Text>
              </Text>

              <Image source={icons.phoneImg} style={styles.mobileImage} resizeMode="contain" />
              <Text style={{ ...defaultFont(400, 14, colors.black), marginTop: heightPercentageToDP(4), lineHeight: 21 }}>Toolscab sündis Marie Kondo filosoofiast hoida elus ainult neid asju mis toovad su ellu rõõmu. Esemed mida me kasutame harva hakkavad rõõmu toomise asemel kapis ruumi võtma. Toolscabi visiooniks on anda sulle tööriistad, et saaksid keskenduda projektile mis parajasti käsil.</Text>
            </View>

            <FooterView />
          </ScrollView>
        </View>
      }
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  //mobile
  content_1: {
    backgroundColor: colors.roheline,
    paddingTop: 40
  },
  userimageStyleMobile: {
    height: hp(600),
    paddingRight: -200,
    // position: 'absolute',
    left: wp(150),
  },
  buttonStyle2: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: wp(30),
    borderBottomRightRadius: wp(30),
    marginTop: heightPercentageToDP(4),
    alignSelf: 'flex-start',
    paddingHorizontal: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5)
  },
  stpesView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.headerBG,
    marginHorizontal: heightPercentageToDP(5),
    marginBottom: 7,
    paddingHorizontal: heightPercentageToDP(3),
  },
  buttonStyle3: {
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: wp(30),
    borderBottomRightRadius: wp(30),
    alignSelf: 'flex-end',
    paddingHorizontal: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5),
    marginHorizontal: heightPercentageToDP(5),
  },
  title: {
    ...defaultFont('600_o', 32, colors.black),
    textAlign: 'center',
    marginVertical: heightPercentageToDP(5)
  },
  lastContent: {
    backgroundColor: colors.headerColorBg,
    paddingVertical: heightPercentageToDP(5),
    paddingHorizontal: heightPercentageToDP(4),
    marginTop: heightPercentageToDP(6)
  },
  mobileImage: {
    width: 160,
    height: 242,
    position: 'absolute',
    right: 15,
    top: -30,
  },










  //web
  container: {
    flex: 1,
    backgroundColor: Platform.OS == 'web' ? "#FCFCFC" : '#ffffff',
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
