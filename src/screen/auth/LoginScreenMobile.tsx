//import liraries
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, InpuText } from "../../components";
import { screenName } from "../../helper/constants";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoginScreenMobileStyle";
import { emailCheck } from "../../helper/globalFunctions";
import { useDispatch } from "react-redux";
import { getProfileMethods, userLogin } from "../../actions/authAction";

// create a component
const LoginScreenMobile = () => {
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
            onSuccess: (res: any) => {
              navigationRef.navigate(screenName?.homeScreen)
            },
            onFailure: () => {},
          };
          dispatch(getProfileMethods(obj));
          setTestInputData({
            emailId: "",
            password: "",
          });
        },
        onFailure: (error: any) => {
          alert(error?.detail);
        },
      };
      dispatch(userLogin(obj));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
        <View style={styles.logoStyle}>
          <Image source={icons.mapImg} style={styles.iconStyle} />
        </View>
        <View
          style={{
            marginTop: heightPercentageToDP(2),
            flex: 1,
            marginHorizontal: 24,
          }}
        >
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
            secureTextEntry={true}
          />
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
            onPress={onLoginPress}
            style={styles.btnStyle}
          />
          <View style={{ height: 150 }} />
        </View>
        <FooterView />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default LoginScreenMobile;
