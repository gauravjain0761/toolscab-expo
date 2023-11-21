//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header, InpuText } from "../../components";
import { screenName } from "../../helper/constants";
import { widthPercentageToDP } from "react-native-responsive-screen";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterScreenStyle";

const CheckBoxView = ({ title, style }: any) => {
  if (Platform.OS == "web") {
    return (
      <View style={[styles.checkBoxContent, style]}>
        <View style={styles.checkBox}></View>
        <Text style={styles.checkText}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.checkBoxContentMob, style]}>
        <View style={styles.checkBoxMob}></View>
        <Text style={styles.checkTextMob}>{title}</Text>
      </View>
    );
  }
};

// create a component
const RegisterScreen = () => {
  const navigationRef = useNavigation();
  const [selectTab, setSelectTab] = useState(1);
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
                  <InpuText label={"Eesnimi"} />
                  <InpuText label={"Perekonnanimi"} />
                  <InpuText label={"E-post"} />
                  <InpuText label={"Parool"} />
                  <InpuText label={"Parool uuesti"} />
                </>
              )}
              {selectTab == 2 && (
                <>
                  <Text style={styles.headerText}>{"Ettevõtte esindaja"}</Text>
                  <InpuText label={"Eesnimi"} />
                  <InpuText label={"Perekonnanimi"} />
                  <InpuText label={"E-post"} />
                  <InpuText label={"Parool"} />
                  <InpuText label={"Parool uuesti"} />
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
              />
              <CheckBoxView title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. " />
              <Text
                style={[styles.checkText, { marginLeft: -25, marginTop: 15 }]}
              >
                Andmete töötlemise põhimõtetega saate tutvuda SIIN:{" "}
                <Text style={{ color: colors.Roheline2 }}> vajuta siia</Text>
              </Text>
              <CheckBoxView
                title="Nõustun renditingimustega ja täidan neid."
                style={{ marginTop: 20 }}
              />
              <CommonGreenBtn
                title="Salvesta"
                onPress={() => {}}
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
          <View style={styles.headerLine}/>
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
                  <InpuText label={"Eesnimi"} />
                  <InpuText label={"Perekonnanimi"} />
                  <InpuText label={"E-post"} />
                  <InpuText label={"Parool"} />
                  <InpuText label={"Parool uuesti"} />
                </>
              )}
              {selectTab == 2 && (
                <>
                  <Text style={styles.headerTextMob}>
                    {"Ettevõtte esindaja"}
                  </Text>
                  <InpuText label={"Eesnimi"} />
                  <InpuText label={"Perekonnanimi"} />
                  <InpuText label={"E-post"} />
                  <InpuText label={"Parool"} />
                  <InpuText label={"Parool uuesti"} />
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
              />
              <CheckBoxView title="Soovin edaspidi saada Toolscabilt turunduslikke pakkumisi (soodustused, kampaaniad, mängud) ja uudiseid. " />
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
                title="Nõustun renditingimustega ja täidan neid."
                style={{ marginTop: 20 }}
              />
              <CommonGreenBtn
                title="Salvesta"
                onPress={() => {
                  //@ts-ignore
                  navigationRef.navigate(screenName.homeScreen);
                }}
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
