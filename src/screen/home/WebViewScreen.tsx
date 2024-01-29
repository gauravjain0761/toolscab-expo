//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header } from "../../components";
import { fontFamily } from "../../helper/constants";

import { icons } from "../../theme/Icons";
import { commonFontStyle } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { listData } from "../../helper/constantData";
import { styles } from "./FAQScreenStyle";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";

// create a component
const WebViewScreen = () => {
  const {params}=useRoute<any>()
  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 150 }}>
          <iframe
            src="https://api.toolscab.ee/Content/Html?title=content%2Fhtml%3Ftitle%3Dtos"
            height={"100%"}
            width={"100%"}
          />

          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <WebView
          source={{ uri: params?.uri }}
          style={{ flex: 1 }}
        />
         <View style={{ height: heightPercentageToDP(10) }} />
          <FooterView />
      </View>
    );
  }
};
//make this component available to the app
export default WebViewScreen;
