//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";
import { icons } from "../../theme/Icons";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { colors } from "../../theme/Colors";
import { fontFamily, screenName } from "../../helper/constants";
import { screen_width } from "../../helper/globalFunctions";
import { ImageBackground } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { defaultFont } from "../../theme/Fonts";
import { getHtmlMethod } from "../../actions/authAction";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

// create a component
const FooterView = () => {
  const navigationRef = useNavigation();
  const dispatch = useDispatch<any>();
  const onRenditingimused = () => {
    if (Platform.OS === 'web') {
      Linking.openURL(
        "https://api.toolscab.ee/Content/Html?title=content%2Fhtml%3Ftitle%3Dtos"
      );
    } else {
      navigationRef.navigate(screenName.webViewScreen, {
        uri: "https://api.toolscab.ee/Content/Html?title=content%2Fhtml%3Ftitle%3Dtos",
      });
    }
  };
  if (Platform.OS == "web")
    return (
      <View style={styles.container}>
        <View style={styles.bodyView}>
          {/* <View style={{ marginRight: 70 }}>
            <Image source={icons.appLogo} style={{ width: 123, height: 22, alignSelf: 'center', position: 'absolute', left: -5, top: -45 }} />
            <Text style={styles.infoText}>Info:</Text>
            <Text style={[styles.infoSubText, { marginTop: 2 }]}>
              {"Toolscab OÜ\n"}
              <Text style={{ marginTop: 8 }}>{"Registrikood: 77253333\n"}</Text>
              <Text style={{ marginTop: 8 }}>{"Kolde puiestee 55, Tallinn"}</Text>
            </Text>
          </View> */}
          <View style={{ marginRight: 70 }}>
            <Text style={styles.infoText}>Kontakt:</Text>
            <Text style={[styles.infoSubText, { marginTop: 2 }]}>
              {"info@toolscab.ee\n"}
              <Text style={{ marginTop: 8 }}>{"+372 525 55 54\n"}</Text>
              {/* <Text style={{ marginTop: 8 }}>{"Tööpakkumised"}</Text> */}
            </Text>
          </View>
          <View>
            <Text style={styles.infoText}>Rent:</Text>
            <TouchableOpacity onPress={onRenditingimused}>
              <Text style={[styles.infoSubText, { marginTop: 2 }]}>
                {"Renditingimused\n"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerBody}>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={[styles.footerBodyText, { marginRight: 45 }]}>
              2023 © Kõik õigused kaitstud.
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (Platform.OS === "web") {
                  Linking.openURL(
                    "https://api.toolscab.ee/Content/Html?title=content%20title%20privacy"
                  );
                } else {
                  navigationRef.navigate(screenName.webViewScreen, {
                    uri: "https://api.toolscab.ee/Content/Html?title=content%20title%20privacy",
                  });
                }
              }}
            >
              <Text style={styles.footerBodyText}>
                Privaatsuspoliitika ja küpsised
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Image source={icons.instagram} style={{ width: 24, height: 24 }} />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/profile.php?id=100095770502933"
                )
              }
            >
              <Image
                source={icons.facebook}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={icons.homeFooter}
          style={{ width: 400, height: 450, position: "absolute", right: 0 }}
        />
      </View>
    );
  else
    return (
      <View style={styles.containerMobile}>
        <ImageBackground
          resizeMode="cover"
          source={icons.mobileFooterbg}
          style={styles.imagebg}
        >
          <View style={styles.footerTop}>
            <Image source={icons.appLogo} style={{ width: 123, height: 22 }} />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.instagram}
                style={{ width: 24, height: 24, marginRight: 5 }}
              />
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.facebook.com/profile.php?id=100095770502933"
                  )
                }
              >
                <Image
                  source={icons.facebook}
                  style={{ width: 24, height: 24, marginRight: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <Text style={styles.infoTextMob}>Info:</Text>
          <Text style={styles.infoSubTextMob}>{"Toolscab OÜ"}</Text>
          <Text style={styles.infoSubTextMob}>{"Registrikood: 77253333"}</Text>
          <Text style={styles.infoSubTextMob}>{"Kolde puiestee 55, Tallinn"}</Text> */}

          <Text style={styles.infoTextMob}>Kontakt:</Text>
          <Text style={styles.infoSubTextMob}>{"info@toolscab.ee"}</Text>
          <Text style={styles.infoSubTextMob}>{"+372 525 55 54"}</Text>
          {/* <Text style={styles.infoSubTextMob}>{"Tööpakkumised"}</Text> */}

          <Text style={styles.infoTextMob}>Rent:</Text>
          <TouchableOpacity onPress={onRenditingimused}>
            <Text style={styles.infoSubTextMob}>{"Renditingimused"}</Text>
          </TouchableOpacity>

          <View style={styles.line} />
          <Text style={styles.footerBodyTextMob}>
            2023 © Kõik õigused kaitstud.
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === "web") {
                Linking.openURL(
                  "https://api.toolscab.ee/Content/Html?title=content%20title%20privacy"
                );
              } else {
                navigationRef.navigate(screenName.webViewScreen, {
                  uri: "https://api.toolscab.ee/Content/Html?title=content%20title%20privacy",
                });
              }
            }}
          >
            <Text
              style={[
                defaultFont(400, 14, colors.filterText),
                { textAlign: "center", marginBottom: heightPercentageToDP(2) },
              ]}
            >
              Privaatsuspoliitika ja küpsised
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  // mobile
  containerMobile: {
    backgroundColor: "#222629",
    alignItems: "center",
    justifyContent: "center",
  },
  imagebg: {
    width: SCREEN_WIDTH,
    paddingVertical: heightPercentageToDP(5),
    paddingHorizontal: heightPercentageToDP(4),
  },
  footerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoTextMob: {
    ...defaultFont(700, 14, colors.white),
    marginTop: heightPercentageToDP(5),
  },
  infoSubTextMob: {
    ...defaultFont(400, 14, colors.white),
    marginTop: heightPercentageToDP(1.5),
  },
  line: {
    height: 1,
    backgroundColor: colors.white,
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(4),
  },
  footerBodyTextMob: {
    ...defaultFont(400, 14, colors.white),
    textAlign: "center",
    marginBottom: 10,
  },

  //web
  container: {
    backgroundColor: "#222629",
    height: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyView: {
    flexDirection: "row",
    width: screen_width * 0.5,
    zIndex: 1,
    // alignItems: "center",
  },
  infoText: {
    ...commonFontStyle(fontFamily.medium, 14, colors.white),
  },
  infoSubText: {
    lineHeight: 30,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.white),
  },
  footerBody: {
    width: screen_width * 0.5,
    // marginLeft: 140,
    borderTopWidth: 1,
    borderTopColor: colors.white,
    marginTop: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    zIndex: 1,
  },
  footerBodyText: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.white),
  },
});

//make this component available to the app
export default FooterView;
