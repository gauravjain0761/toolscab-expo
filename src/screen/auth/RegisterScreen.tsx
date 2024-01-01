//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header, InpuText } from "../../components";
import { screenName } from "../../helper/constants";
import { widthPercentageToDP } from "react-native-responsive-screen";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterScreenStyle";
import { icons } from "../../theme/Icons";
import { emailCheck, screen_width } from "../../helper/globalFunctions";
import { useDispatch } from "react-redux";
import { getProfileMethods, userSaveProfile } from "../../actions/authAction";
import { navigate } from "../../navigations/RootNavigation";
import { CountryPicker } from "react-native-country-codes-picker";

const CheckBoxView = ({ title, style, select, onSelectionChange }: any) => {
  if (Platform.OS == "web") {
    return (
      <View style={[styles.checkBoxContent, style]}>
        <TouchableOpacity
          onPress={onSelectionChange}
          style={[
            styles.checkBox,
            {
              backgroundColor: select ? colors.green : colors.white,
              borderColor: select ? colors.green : colors.grey_6,
            },
          ]}
        >
          <Image source={icons.done} style={{ width: 14, height: 14 }} />
        </TouchableOpacity>

        <Text style={styles.checkText}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.checkBoxContentMob, style]}>
        {/* <View style={styles.checkBoxMob}></View> */}
        <TouchableOpacity
          onPress={onSelectionChange}
          style={[
            styles.checkBoxMob,
            {
              backgroundColor: select ? colors.green : colors.white,
              borderColor: select ? colors.green : colors.grey_6,
            },
          ]}
        >
          <Image source={icons.done} style={{ width: 14, height: 14 }} />
        </TouchableOpacity>
        <Text style={styles.checkTextMob}>{title}</Text>
      </View>
    );
  }
};

// create a component
const RegisterScreen = () => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectTab] = useState(1);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [testInputData, setTestInputData] = useState({
    firstName: "",
    lastName: "",
    personalNo: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });
  const dispatch = useDispatch();

  const onSubmitPress = () => {
    if (testInputData?.firstName.trim().length === 0) {
      alert("Palun sisesta oma eesnimi");
    } else if (testInputData?.lastName.trim().length === 0) {
      alert("Palun sisestage oma perekonnanimi");
    } else if (testInputData?.emailId.trim().length === 0) {
      alert("Palun sisestage oma e-posti aadress");
    } else if (testInputData?.personalNo.trim().length == 0) {
      alert("Palun sisestage omaisikukood");
    } else if (testInputData?.personalNo.trim().length < 11) {
      alert("Sisestage oma isikukoodiks maksimaalselt 11 numbrit");
    } else if (!emailCheck(testInputData?.emailId)) {
      alert("Sisestage oma kehtiv e-posti aadress");
    } else if (testInputData?.password.trim().length === 0) {
      alert("Palun sisesta oma salasõna");
    } else if (testInputData?.password.trim().length < 8) {
      alert("Teie parool peab olema vähemalt 8 tähemärki pikk");
    } else if (
      testInputData?.confirmPassword.trim() !== testInputData?.password.trim()
    ) {
      alert("Teie parool ja kinnitusparool ei ühti.");
    } else if (testInputData?.mobileNo.trim().length === 0) {
      alert("Palun sisestage oma mobiilinumber.");
    } else if (!checkBox3) {
      alert("Palun valige tähtajad ja renditingimused");
    } else {
      const obj = {
        data: {
          first_name: testInputData?.firstName,
          last_name: testInputData?.lastName,
          current_balance: 0,
          mobile: testInputData?.mobileNo,
          email: testInputData?.emailId,
          password: testInputData?.password,
          social_sec_no: testInputData?.personalNo,
          news_subscription: 0,
        },
        onSuccess: (res: any) => {
          Platform.OS == "web"
            ? navigationRef.goBack()
            : navigationRef.navigate(screenName.profileScreen);

          const obj = {
            params: {
              customer_id: res,
            },
            onSuccess: (res: any) => {},
            onFailure: () => {},
          };
          dispatch(getProfileMethods(obj));
          setTestInputData({
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            confirmPassword: "",
            mobileNo: "",
            personalNo: "",
          });
         
          setCheckBox3(false);
          setCheckBox1(false);
          setCheckBox2(false);
        },
        onFailure: (error: any) => {
          const errorValue = error?.detail.includes(
            "Cannot insert duplicate key row in object"
          );
          errorValue &&
            alert(
              "E-post on juba kasutusel Palun värskendage oma e-posti aadressi"
            );
        },
      };
      dispatch(userSaveProfile(obj));
    }
  };

  const closePress = () => {
    setTestInputData({
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
      personalNo: "",
    });
    setCheckBox3(false);
    setCheckBox1(false);
    setCheckBox2(false);
  };

  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
          <View style={styles.mainStyleWeb}>
            <View style={{ height: 50 }} />
            <Text style={styles.headerSubText}>{"Registreeri konto"}</Text>
            <View style={[styles.unLineStyle]} />
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={() => {
                  setSelectTab(1);
                }}
                style={[
                  styles.tabBtn,
                  {
                    backgroundColor:
                      selectTab === 1 ? colors.roheline : "transparent",
                  },
                ]}
              >
                <Text style={styles.tabText}>Erakonto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectTab(2);

                }}
                style={[
                  styles.tabBtn,
                  {
                    backgroundColor:
                      selectTab == 2 ? colors.roheline : "transparent",
                  },
                ]}
              >
                <Text style={[styles.tabText]}>Ärikonto</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={{ height: 47 }} />
              {selectTab === 1 && (
                <>
                  <InpuText
                    label={"Eesnimi"}
                    value={testInputData?.firstName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, firstName: text })
                    }
                  />
                  <InpuText
                    label={"Perekonnanimi"}
                    value={testInputData?.lastName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, lastName: text })
                    }
                  />
                  <InpuText
                    label={"Isikukood"}
                    value={testInputData?.personalNo}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, personalNo: text })
                    }
                    maxLength={11}
                  />
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
                  <InpuText
                    label={"Parool uuesti"}
                    value={testInputData?.confirmPassword}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        confirmPassword: text,
                      })
                    }
                    secureTextEntry={true}
                  />
                  <InpuText
                    label={"Mobiiltelefon"}
                    value={testInputData?.mobileNo}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        mobileNo: text,
                      })
                    }
                  />
                </>
              )}
              {selectTab == 2 && (
                <>
                  <Text style={styles.headerText}>{"Ettevõtte esindaja"}</Text>
                  <InpuText
                    label={"Eesnimi"}
                    value={testInputData?.firstName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, firstName: text })
                    }
                  />
                  <InpuText
                    label={"Perekonnanimi"}
                    value={testInputData?.lastName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, lastName: text })
                    }
                  />
                  <InpuText
                    label={"Isikukood"}
                    value={testInputData?.personalNo}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, personalNo: text })
                    }
                    maxLength={11}
                  />
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
                  <InpuText
                    label={"Parool uuesti"}
                    value={testInputData?.confirmPassword}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        confirmPassword: text,
                      })
                    }
                    secureTextEntry={true}

                  />
                  <InpuText
                    label={"Mobiiltelefon"}
                    value={testInputData?.mobileNo}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        mobileNo: text,
                      })
                    }
                  />

                  <Text style={styles.headerText}>{"Ettevõtte info"}</Text>
                  <InpuText label={"Registrikood"} />
                </>
              )}
              <View style={{ height: 44 }} />
              <CheckBoxView
                title="Tellin uudiskirja"
                style={{ marginBottom: 12 }}
                select={checkBox1}
                onSelectionChange={() => setCheckBox1(!checkBox1)}
              />
              {/* <CheckBoxView
                select={checkBox2}
                onSelectionChange={() => setCheckBox2(!checkBox2)}
                title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. "
              /> */}
              <Text
                style={[styles.checkText, { marginLeft: 15, marginTop: 15 }]}
              >
                Andmete töötlemise põhimõtetega saate tutvuda SIIN:{" "}
                <Text style={{ color: colors.Roheline2 }}> vajuta siia</Text>
              </Text>
              <CheckBoxView
                select={checkBox3}
                onSelectionChange={() => setCheckBox3(!checkBox3)}
                title="Nõustun renditingimustega ja täidan neid."
                style={{ marginTop: 20 }}
              />
              <CommonGreenBtn
                title="Salvesta"
                // disabled={!checkBox3}
                onPress={onSubmitPress}
                style={styles.btnStyleWeb}
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
          <Text style={styles.headermainTextMob}>Registreeri konto</Text>
          <View style={styles.headerLine} />
          <View style={styles.mainStyleMob}>
            {/* <View style={{ height: 50 }} /> */}
            {/* <Text style={styles.headerSubTextMob}>{"Registreeri konto"}</Text> */}
            {/* <View style={[styles.unLineStyleMob]} /> */}
            <View style={styles.tabViewMob}>
              <TouchableOpacity
                onPress={() => {
                  setSelectTab(1);
                }}
                style={[
                  styles.tabBtnMob,
                  {
                    backgroundColor:
                      selectTab === 1 ? colors.roheline : "transparent",
                  },
                ]}
              >
                <Text style={styles.tabText}>Erakonto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectTab(2);
                }}
                style={[
                  styles.tabBtnMob,
                  {
                    backgroundColor:
                      selectTab == 2 ? colors.roheline : "transparent",
                  },
                ]}
              >
                <Text style={[styles.tabTextMob]}>Ärikonto</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <View style={{ height: 47 }} />
              {selectTab === 1 && (
                <>
                  <InpuText
                    label={"Eesnimi"}
                    value={testInputData?.firstName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, firstName: text })
                    }
                  />
                  <InpuText
                    label={"Perekonnanimi"}
                    value={testInputData?.lastName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, lastName: text })
                    }
                  />
                  <InpuText
                    label={"Isikukood"}
                    value={testInputData?.personalNo}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, personalNo: text })
                    }
                    maxLength={11}
                  />
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
                  <InpuText
                    label={"Parool uuesti"}
                    value={testInputData?.confirmPassword}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        confirmPassword: text,
                      })
                    }
                    secureTextEntry={true}

                  />
                  <InpuText
                    label={"Mobiiltelefon"}
                    value={testInputData?.mobileNo}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        mobileNo: text,
                      })
                    }
                  />
                </>
              )}
              {selectTab == 2 && (
                <>
                  <Text style={styles.headerTextMob}>
                    {"Ettevõtte esindaja"}
                  </Text>
                  <InpuText
                    label={"Eesnimi"}
                    value={testInputData?.firstName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, firstName: text })
                    }
                  />
                  <InpuText
                    label={"Perekonnanimi"}
                    value={testInputData?.lastName}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, lastName: text })
                    }
                  />
                  <InpuText
                    label={"Isikukood"}
                    value={testInputData?.personalNo}
                    onChangeText={(text) =>
                      setTestInputData({ ...testInputData, personalNo: text })
                    }
                    maxLength={11}
                  />
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
                  <InpuText
                    label={"Parool uuesti"}
                    value={testInputData?.confirmPassword}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        confirmPassword: text,
                      })
                    }
                    secureTextEntry={true}

                  />
                  <InpuText
                    label={"Mobiiltelefon"}
                    value={testInputData?.mobileNo}
                    onChangeText={(text) =>
                      setTestInputData({
                        ...testInputData,
                        mobileNo: text,
                      })
                    }
                  />
                  <Text style={styles.headerTextMob}>{"Ettevõtte info"}</Text>

                  <InpuText label={"Registrikood"} />
                </>
              )}

              <View style={{ height: 44 }} />
              <CheckBoxView
                title="Tellin uudiskirja"
                style={{ marginBottom: 12 }}
                select={checkBox1}
                onSelectionChange={() => setCheckBox1(!checkBox1)}
              />
              {/* <CheckBoxView
                select={checkBox2}
                onSelectionChange={() => setCheckBox2(!checkBox2)}
                title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. "
              /> */}
              <Text
                style={[
                  styles.checkTextMob,
                  { marginLeft: widthPercentageToDP(5.9), marginTop: 15 },
                ]}
              >
                Andmete töötlemise põhimõtetega saate tutvuda SIIN:{"\n"}
                <Text style={{ color: colors.Roheline2 }}> vajuta siia</Text>
              </Text>
              <CheckBoxView
                select={checkBox3}
                onSelectionChange={() => setCheckBox3(!checkBox3)}
                title="Nõustun renditingimustega ja täidan neid."
                style={{ marginTop: 20 }}
              />
              <CommonGreenBtn
                title="Salvesta"
                // disabled={!checkBox3}
                onPress={onSubmitPress}
                style={styles.btnStyle}
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
//make this component available to the app
export default RegisterScreen;
