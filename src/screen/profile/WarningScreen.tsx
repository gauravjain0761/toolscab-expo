//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header } from "../../components";
import { icons } from "../../theme/Icons";
import { styles } from "./WarningScreenStyle";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { navigate, navigationRef } from "../../navigations/RootNavigation";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { screenName } from "../../helper/constants";
import { useNavigation, useRoute } from "@react-navigation/native";

// create a component
const WarningScreen = () => {
  const { params } = useRoute();
  const navigationRef = useNavigation();

  const [selectTab, setSelectedTab] = useState(params?.tabIndex);
  const [delay, setDelay] = useState(900);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    setSelectedTab(params?.tabIndex);
    const timer = setInterval(() => {
      selectTab == 2 && setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  const onPressfirstPress = () => {
    if(selectTab == 1) {
      navigationRef.navigate(screenName.registerScreen)
    }else{
      navigationRef.navigate(screenName.profileScreen)
    }
  };

  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
          <View style={{ marginHorizontal: 24, marginTop: 30 }}>
            <ImageBackground
              source={icons.ellipse}
              style={styles.commoniconStyleWeb}
            >
              <Image
                source={icons.commonicon}
                style={styles.commoniconStyleWeb}
              />
            </ImageBackground>
            <Text style={styles.headerText}>Pea hoogu!</Text>
            <Text style={styles.headerSubText}>
              {
                "Nõustun, et toote lisamisel ostukorvi\nbroneeritakse toode 15 minutiks. aja\nmöödumisel algab automaatselt tasuline\nrendiaeg, vaata hinnastust ja tellimistingimusi"
              }
            </Text>

            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <CommonGreenBtn
                title="Loobun"
                onPress={() => {}}
                style={styles.btnLeftSide}
              />
              <CommonGreenBtn
                title="Nõustun"
                onPress={() => {
                  navigate(screenName.homeScreen);
                }}
                style={{
                  borderColor: colors.headerBG,
                  marginLeft: 10,
                  width: widthPercentageToDP(7),
                  marginTop: 50,
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
          <View style={{ marginHorizontal: 24, marginTop: 30 }}>
            <ImageBackground
              source={icons.ellipse}
              style={styles.commoniconStyle}
            >
              <Image source={icons.commonicon} style={styles.commoniconStyle} />
            </ImageBackground>
            {selectTab == 1 ? (
              <Text style={styles.headerTextMob}>Pea hoogu!</Text>
            ) : (
              <Text
                style={[
                  styles.headerTextMob,
                  { lineHeight: 38, textAlign: "center" },
                ]}
              >
                {"Sinu seade on\nbroneeritud!"}
              </Text>
            )}
            {selectTab == 2 && (
              <View style={styles.timeViewMob}>
                <Text style={styles.timeValueStyleMob}>
                {minutes ? minutes : "00"}:{seconds ? seconds : "00"}
                </Text>
                <Text style={styles.timeTextStyleMob}>Tasuta broneering</Text>
              </View>
            )}
            {selectTab == 1 ? (
              <Text style={styles.headerSubTextMob}>
                {
                  "Nõustun, et toote lisamisel ostukorvi\nbroneeritakse toode 15 minutiks. aja\nmöödumisel algab automaatselt tasuline\nrendiaeg, vaata hinnastust ja tellimistingimusi"
                }
              </Text>
            ) : (
              <Text style={[styles.headerSubTextMob,{lineHeight:21}]}>
                {
                  "Sinu seade ootab sind Toolscabi rendikapis\nVõta see 15 minuti jooksul tasuta välja."
                }
              </Text>
            )}

            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <CommonGreenBtn
                title="Loobun"
                onPress={() => {
                  navigationRef.goBack();
                  setDelay(900)
                }}
                style={styles.btnLeftSideMob}
              />
              <CommonGreenBtn
                title={selectTab == 1 ? "Nõustun" : "Rendikorv"}
                onPress={onPressfirstPress}
                style={{
                  borderColor: colors.headerBG,
                  marginLeft: 10,
                  width: widthPercentageToDP(32),
                  marginTop: 50,
                }}
              />
            </View>
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  }
};
export default WarningScreen;
