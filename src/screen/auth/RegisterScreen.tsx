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
import { userSaveProfile } from "../../actions/authAction";
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
    emailId: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const dispatch = useDispatch();

  const onSubmitPress = () => {
    if (testInputData?.firstName.trim().length === 0) {
      alert("Please enter your first Name");
    } else if (testInputData?.lastName.trim().length === 0) {
      alert("Please enter your last Name");
    } else if (testInputData?.emailId.trim().length === 0) {
      alert("Please enter your email address");
    } else if (!emailCheck(testInputData?.emailId)) {
      alert("Please enter your valid email address");
    } else if (testInputData?.password.trim().length === 0) {
      alert("Please enter your password");
    } else if (testInputData?.password.trim().length < 6) {
      alert("Your password must be at least 6 characters");
    } else if (
      testInputData?.confirmPassword.trim() !== testInputData?.password.trim()
    ) {
      alert("Your password and confirmation password do not match.");
    } else if (countryCode == "") {
      alert("Please enter your country Code.");
    } else if (testInputData?.mobileNo.trim().length === 0) {
      alert("Please enter your mobile Num.");
    } else {
      const obj = {
        data: {
          first_name: testInputData?.firstName,
          last_name: testInputData?.lastName,
          current_balance: 0,
          mobile: 0,
          email: testInputData?.emailId,
          password: testInputData?.password,
          country: "91",
          news_subscription: 0,
        },
        onSuccess: (res: any) => {
          navigationRef.goBack();
          setTestInputData({
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            confirmPassword: "",
            mobileNo: "",
          })
          setCountryCode("")
        },
        onFailure: () => {},
      };
      dispatch(userSaveProfile(obj));
    }
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
                onPress={() => setSelectTab(1)}
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
                onPress={() => setSelectTab(2)}
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
                  <View
                    style={{ width: screen_width * 0.25, flexDirection: "row" }}
                  >
                    <View style={{ marginRight: 10 }}>
                      <Text style={styles.labelText}>{"Riigi kood"}</Text>
                      <TouchableOpacity
                        style={styles.textInput}
                        onPress={() => setShow(true)}
                      >
                        <Text style={styles.textInputText}>{countryCode}</Text>
                      </TouchableOpacity>
                    </View>
                    <InpuText
                      label={"Mobiiltelefon"}
                      value={testInputData?.mobileNo}
                      onChangeText={(text) =>
                        setTestInputData({
                          ...testInputData,
                          mobileNo: text,
                        })
                      }
                      style={{ width: screen_width * 0.2 }}
                    />
                  </View>
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
                  <View
                    style={{ width: screen_width * 0.25, flexDirection: "row" }}
                  >
                    <View style={{ marginRight: 10 }}>
                      <Text style={styles.labelText}>{"Riigi kood"}</Text>
                      <TouchableOpacity
                        style={styles.textInput}
                        onPress={() => setShow(true)}
                      >
                        <Text style={styles.textInputText}>{countryCode}</Text>
                      </TouchableOpacity>
                    </View>
                    <InpuText
                      label={"Mobiiltelefon"}
                      value={testInputData?.mobileNo}
                      onChangeText={(text) =>
                        setTestInputData({
                          ...testInputData,
                          mobileNo: text,
                        })
                      }
                      style={{ width: screen_width * 0.2 }}
                    />
                  </View>
                  <Text style={styles.headerText}>{"Ettevõtte info"}</Text>
                  <InpuText label={"Firma"} />
                  <InpuText label={"Registrikood"} />
                  <InpuText label={"KMKR"} />
                  <Text style={styles.headerText}>{"Ettevõtte aadress"}</Text>
                  <InpuText label={"Aadress"} />
                  <InpuText label={"Linnd"} />
                  <InpuText label={"Postiindeks"} />
                  <InpuText label={"Riik"} />
                  <InpuText label={"Mobiiltelefon (xxxxxxxx)"} />
                </>
              )}
              <View style={{ height: 44 }} />
              <CheckBoxView
                title="Tellin uudiskirja"
                style={{ marginBottom: 12 }}
                select={checkBox1}
                onSelectionChange={() => setCheckBox1(!checkBox1)}
              />
              <CheckBoxView
                select={checkBox2}
                onSelectionChange={() => setCheckBox2(!checkBox2)}
                title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. "
              />
              <Text
                style={[styles.checkText, { marginLeft: -25, marginTop: 15 }]}
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
                disabled={!checkBox1 || !checkBox2 || !checkBox3}
                onPress={onSubmitPress}
                style={styles.btnStyleWeb}
              />
            </View>
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={{ modal: { height: 500, alignSelf: "center" } }}
          />
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
                onPress={() => setSelectTab(1)}
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
                onPress={() => setSelectTab(2)}
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
                  <View
                    style={{ width: screen_width * 0.8, flexDirection: "row" }}
                  >
                    <View style={{ marginRight: 10 }}>
                      <Text style={styles.labelText}>{"Riigi kood"}</Text>
                      <TouchableOpacity
                        style={[styles.textInput,{justifyContent:'center'}]}
                        onPress={() => setShow(true)}
                      >
                        <Text style={styles.textInputText}>{countryCode}</Text>
                      </TouchableOpacity>
                    </View>
                    <InpuText
                      label={"Mobiiltelefon"}
                      value={testInputData?.mobileNo}
                      onChangeText={(text) =>
                        setTestInputData({
                          ...testInputData,
                          mobileNo: text,
                        })
                      }
                      style={{ width: screen_width * 0.67 }}
                    />
                  </View>
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
                   <View
                    style={{ width: screen_width * 0.8, flexDirection: "row" }}
                  >
                    <View style={{ marginRight: 10 }}>
                      <Text style={styles.labelText}>{"Riigi kood"}</Text>
                      <TouchableOpacity
                        style={[styles.textInput,{justifyContent:'center'}]}
                        onPress={() => setShow(true)}
                      >
                        <Text style={styles.textInputText}>{countryCode}</Text>
                      </TouchableOpacity>
                    </View>
                    <InpuText
                      label={"Mobiiltelefon"}
                      value={testInputData?.mobileNo}
                      onChangeText={(text) =>
                        setTestInputData({
                          ...testInputData,
                          mobileNo: text,
                        })
                      }
                      style={{ width: screen_width * 0.67 }}
                    />
                  </View>
                  <Text style={styles.headerTextMob}>{"Ettevõtte info"}</Text>
                  <InpuText label={"Firma"} />
                  <InpuText label={"Registrikood"} />
                  <InpuText label={"KMKR"} />
                  <Text style={styles.headerTextMob}>
                    {"Ettevõtte aadress"}
                  </Text>
                  <InpuText label={"Aadress"} />
                  <InpuText label={"Linnd"} />
                  <InpuText label={"Postiindeks"} />
                  <InpuText label={"Riik"} />
                  <InpuText label={"Mobiiltelefon (xxxxxxxx)"} />
                </>
              )}

              <View style={{ height: 44 }} />
              <CheckBoxView
                title="Tellin uudiskirja"
                style={{ marginBottom: 12 }}
                select={checkBox1}
                onSelectionChange={() => setCheckBox1(!checkBox1)}
              />
              <CheckBoxView
                select={checkBox2}
                onSelectionChange={() => setCheckBox2(!checkBox2)}
                title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. "
              />
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
                disabled={!checkBox1 || !checkBox2 || !checkBox3}
                onPress={onSubmitPress}
                style={styles.btnStyle}
              />
            </View>
          </View>
          <View style={{ height: 150 }} />
          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={{ modal: { height: 500, alignSelf: "center" } }}
          />
          <FooterView />
        </ScrollView>
      </View>
    );
  }
};
//make this component available to the app
export default RegisterScreen;
