//import liraries
import React from "react";
import { View, Text,  Image, TouchableOpacity } from "react-native";
import { colors } from "../../theme/Colors";
import { InpuText } from "../../components";
import { screenName } from "../../helper/constants";
import {  defaultFont } from "../../theme/Fonts";
import {
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoginScreenMobileStyle";

// create a component
const LoginScreenMobile = () => {
  const navigationRef = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Image source={icons.mapImg} style={styles.iconStyle} />
      </View>
      <View style={{ marginTop: heightPercentageToDP(2), flex: 1 }}>
        <Text style={styles.loginText}>Logi sisse</Text>
        <View style={styles.headerText}>
          <Text style={styles.regText}>Ei ole veel kontot? </Text>
          <TouchableOpacity
            onPress={() => {
              navigationRef.navigate(screenName.registerScreen);
            }}
          >
            <Text
              style={[
                styles.regText,
                {
                  color: colors.Roheline2,
                  textDecorationLine: "underline",
                },
              ]}
            >
              Registreeri
            </Text>
          </TouchableOpacity>
        </View>
        <InpuText label={"E-post"} />
        <InpuText label={"Parool"} />
        <Text
          style={{
            ...defaultFont(400, 14, colors.blackType),
            alignSelf: "center",
          }}
        >
          Unustasid parooli?
        </Text>
        <CommonGreenBtn
          title="Jätka"
          onPress={() => {
            navigationRef.navigate(screenName.homeScreen);
          }}
          style={styles.btnStyle}
        />
        <View style={{ height: 50 }} />
      </View>
    </View>
  );
};

//make this component available to the app
export default LoginScreenMobile;
