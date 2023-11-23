//import liraries
import React, { useState } from "react";
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
import {
  FooterView,
  Header,
} from "../../components";
import { icons } from "../../theme/Icons";
import { styles } from "./WarningScreenStyle";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { navigate } from "../../navigations/RootNavigation";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { screenName } from "../../helper/constants";

// create a component
const WarningScreen = () => {
if(Platform.OS == 'web'){
  return (
    <View style={styles.container}>
       <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
        <View style={{ marginHorizontal: 24, marginTop: 30 }}>
          <ImageBackground
            source={icons.ellipse}
            style={styles.commoniconStyleWeb}
          >
            <Image source={icons.commonicon} style={styles.commoniconStyleWeb} />
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
              onPress={() => {navigate(screenName.homeScreen)}}
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
}else{
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
          <Text style={styles.headerTextMob}>Pea hoogu!</Text>
          <Text style={styles.headerSubTextMob}>
            {
              "Nõustun, et toote lisamisel ostukorvi\nbroneeritakse toode 15 minutiks. aja\nmöödumisel algab automaatselt tasuline\nrendiaeg, vaata hinnastust ja tellimistingimusi"
            }
          </Text>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <CommonGreenBtn
              title="Loobun"
              onPress={() => {}}
              style={styles.btnLeftSideMob}
            />
            <CommonGreenBtn
              title="Nõustun"
              onPress={() => {navigate(screenName.homeScreen)}}
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
