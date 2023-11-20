//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
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

// create a component
const ProfileScreen = () => {
  const [selectedTab, setselectedTab] = useState(1);

  const HeaderCommonView = ({ title, style }: any) => {
    return (
      <View style={style}>
        <View style={{ height: 50 }} />
        <Text style={styles.headerSubText}>{title}</Text>
        <View style={[styles.unLineStyle, style]} />
      </View>
    );
  };

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
};
export default ProfileScreen;
