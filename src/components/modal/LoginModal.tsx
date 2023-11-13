//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import InpuText from "../common/InpuText";
import CommonGreenBtn from "../common/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { navigationRef } from "../../navigations/MainNavigator";


type Props = {
  isVisible: boolean
  onClose:()=>void
}

// create a component
const LoginModal = ({isVisible,onClose}:Props) => {
  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0,flex:1 }}
      backdropColor={colors.headerBG}
      backdropOpacity={0.2}
      isVisible={isVisible}
      onBackButtonPress={()=>{
        onClose()
      }}
      onBackdropPress={()=>{
        onClose()
      }}
    >
      <View style={styles.container}>
        <View style={styles.bodyContent}>
          <View style={styles.logoStyle}>
            <Image source={icons.mapImg} style={styles.iconStyle} />
          </View>
          <View style={{ alignItems: "center", marginTop: 130 }}>
            <Text style={styles.loginText}>Logi sisse</Text>
            <Text style={styles.regText}>
              Ei ole veel kontot?{" "}
              <TouchableOpacity
                onPress={() => {
                  onClose()
                  navigationRef.navigate(screenName.registerScreen);
                }}
              >
                <Text
                  style={{
                    color: colors.Roheline2,
                    textDecorationLine: "underline",
                  }}
                >
                  Registreeri
                </Text>
              </TouchableOpacity>
            </Text>
            <InpuText label={"E-post"} />
            <InpuText label={"Parool"} />
            <Text>Unustasid parooli?</Text>
            <CommonGreenBtn
              title="Jätka"
              onPress={() => { onClose()}}
              style={{
                borderColor: colors.headerBG,
                marginLeft: 10,
                width: widthPercentageToDP(7.8),
                marginTop: 65,
              }}
            />
            <View style={{ height: 50 }} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContent: {
    // width: screen_width * 0.32,
    paddingHorizontal: 45,
    backgroundColor: colors.white,
  },
  logoStyle: {
    width: 123,
    height: 123,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 123 / 2,
    backgroundColor: colors.roheline,
    alignSelf: "center",
    position: "absolute",
    top: -60,
  },
  iconStyle: {
    width: 74,
    height: 67,
    tintColor: colors.black,
  },
  loginText: {
    ...commonFontStyle(fontFamily.semiBold, 32, colors.Roheline2),
  },
  regText: {
    lineHeight: 21,
    marginTop: 17,
    marginBottom: 20,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
});

//make this component available to the app
export default LoginModal;