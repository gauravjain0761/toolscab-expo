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
import {
  CartProfileList,
  EmailSettingView,
  FooterView,
  Header,
  MyProfileView,
  PaymentViewCart,
  PreviousView,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { styles } from "./ProfileScreenStyle";
import { tabData } from "../../helper/constantData";
import { icons } from "../../theme/Icons";

// create a component
const ProfileScreen = () => {
  const [selectedTab, setselectedTab] = useState(1);

  const HeaderCommonView = ({ title, style, isShow }: any) => {
    if (Platform.OS === "web") {
      return (
        <View style={style}>
          <View style={{ height: 50 }} />
          <Text style={styles.headerSubText}>{title}</Text>
          <View style={[styles.unLineStyle, style]} />
        </View>
      );
    } else {
      return (
        <View style={style}>
          <View style={{ height: 28 }} />
          <View>
            <Text style={styles.headerSubTextMob}>{title}</Text>
            {isShow && (
              <View
                style={[
                  styles.container,
                  { alignSelf: "flex-start", marginRight: 10 },
                ]}
              >
                <Image source={icons.pen} style={{ width: 18, height: 18 }} />
                <Text style={styles.headerText}>{"Muuda"}</Text>
              </View>
            )}
          </View>
          <View style={[styles.unLineStyleMob, style]} />
        </View>
      );
    }
  };

  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
          <View
            style={{
              width: screen_width * 0.6,
              alignSelf: "center",
            }}
          >
            <Text style={styles.headerText}>{"Minu rendid & profiil"}</Text>
            <View style={{ flexDirection: "row" }}>
              {tabData.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => setselectedTab(item?.id)}
                    style={[
                      styles.tabView,
                      {
                        backgroundColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                        borderColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                      },
                    ]}
                  >
                    <Text style={styles.tabText}>{item?.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {selectedTab == 1 && (
              <>
                <HeaderCommonView title={"Aktiivsed rendid"} />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    {[0, 1].map(() => {
                      return <CartProfileList />;
                    })}
                  </View>
                </View>
                <HeaderCommonView
                  title={"Varasemad rendid"}
                  style={{ marginBottom: 45 }}
                />
                <PreviousView />
                <PreviousView />
              </>
            )}
            {(selectedTab == 2 || selectedTab == 3) && (
              <>
                <HeaderCommonView title={"Minu profiil"} />
                <MyProfileView />
                <HeaderCommonView title={"Maksevahendid"} />
                <PaymentViewCart />
                {selectedTab == 2 && (
                  <>
                    <HeaderCommonView title={"E-maili seaded"} />
                    <EmailSettingView />
                  </>
                )}
              </>
            )}
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
            <Text style={styles.headerTextMob}>
              {selectedTab == 1 ? "Tere, (Name)!" : "Minu profiil"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              {tabData.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => setselectedTab(item?.id)}
                    style={[
                      styles.tabViewMob,
                      {
                        backgroundColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                        borderColor:
                          selectedTab == item?.id
                            ? colors.roheline
                            : "transparent",
                      },
                    ]}
                  >
                    <Text style={styles.tabTextMob}>{item?.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {selectedTab == 1 && (
              <View style={{}}>
                <HeaderCommonView title={"Aktiivsed rendid"} />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    {[0, 1].map(() => {
                      return <CartProfileList />;
                    })}
                  </View>
                </View>
                <HeaderCommonView
                  title={"Aktiivsed rendid "}
                  style={{ marginBottom: 10 }}
                />
                <PreviousView />
                <PreviousView />
              </View>
            )}
            {(selectedTab == 2 || selectedTab == 3) && (
              <>
                <HeaderCommonView title={"Minu profiil"} isShow={true} />
                <MyProfileView />
                <HeaderCommonView title={"Maksevahendid"} />
                <PaymentViewCart />
                {selectedTab == 2 && (
                  <>
                    <HeaderCommonView title={"E-maili seaded"} />
                    <EmailSettingView />
                  </>
                )}
              </>
            )}
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  }
};
export default ProfileScreen;
