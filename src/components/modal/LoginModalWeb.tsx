//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import InpuText from "../reusableComponent/InpuText";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import { getProfileMethods, userLogin } from "../../actions/authAction";
import { emailCheck } from "../../helper/globalFunctions";
import { useDispatch } from "react-redux";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

// create a component
const LoginModalWeb = ({ isVisible, onClose }: Props) => {
  const navigationRef = useNavigation();
  const dispatch = useDispatch();

  const [testInputData, setTestInputData] = useState({
    emailId: "",
    password: "",
  });

  const onLoginPress = () => {
    if (testInputData?.emailId.trim().length === 0) {
      alert("Palun sisestage oma e-posti aadress");
    } else if (!emailCheck(testInputData?.emailId)) {
      alert("Sisestage oma kehtiv e-posti aadress");
    } else if (testInputData?.password.trim().length === 0) {
      alert("Palun sisesta oma salasõna");
    } else if (testInputData?.password.trim().length < 8) {
      alert("Teie parool peab olema vähemalt 8 tähemärki pikk");
    } else {
      const obj = {
        params: {
          email: testInputData?.emailId,
          password: testInputData?.password,
        },
        onSuccess: (res: any) => {
          const obj = {
            params: {
              customer_id: res,
            },
            onSuccess: (res: any) => {},
            onFailure: () => {},
          };
          dispatch(getProfileMethods(obj));
          onClose();
          setTestInputData({
            emailId: "",
            password: "",
          });
        },
        onFailure: (error: any) => {
          console.log(error?.detail);

          alert(error?.detail);
        },
      };
      dispatch(userLogin(obj));
    }
  };
  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0, flex: 1 }}
      backdropColor={colors.headerBG}
      backdropOpacity={0.2}
      isVisible={isVisible}
      onBackButtonPress={() => {
        onClose();
      }}
      onBackdropPress={() => {
        onClose();
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
                  onClose();
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
            <InpuText
              label={"E-post"}
              value={testInputData?.emailId}
              onChangeText={(text) =>
                setTestInputData({ ...testInputData, emailId: text })
              }
            />
            <InpuText
              label={"Parool"}
              value={testInputData?.password}
              onChangeText={(text) =>
                setTestInputData({ ...testInputData, password: text })
              }
            />
            <Text>Unustasid parooli?</Text>
            <CommonGreenBtn
              title="Jätka"
              onPress={onLoginPress}
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
export default LoginModalWeb;
