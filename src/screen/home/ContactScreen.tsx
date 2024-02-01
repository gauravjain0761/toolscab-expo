//import liraries
import React, { useEffect, useState } from "react";
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
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { listData } from "../../helper/constantData";
import { styles } from "./FAQScreenStyle";
import { useDispatch } from "react-redux";
import RenderHTML from "react-native-render-html";
import { useIsFocused } from "@react-navigation/native";
import { getHtmlMethod } from "../../actions/authAction";

// create a component
const ContactScreen = () => {
  const [downData, setDownData] = useState(listData);
  const [htmlView, setHtmlView] = useState("");
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onWebViewPress = () => {
    const obj = {
      params: {
        title: `content?title=contact`,
      },
      onSuccess: (res: any) => {
        setHtmlView(res);
      },
      onFailure: () => {},
    };
    dispatch(getHtmlMethod(obj));
  };

  useEffect(()=>{
    onWebViewPress()
  },[isFocused])


  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 150 }}>
         <View style={{alignSelf:'center'}}>
          <RenderHTML
            contentWidth={SCREEN_WIDTH}
            source={{
              html: `${htmlView}`,
            }}
          
          />
         </View>
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <ScrollView contentContainerStyle={styles.mainStyleMob}>
          <View style={{flex:1,alignSelf:'center'}}>
          <RenderHTML
            contentWidth={SCREEN_WIDTH}
            source={{
              html: `${htmlView}`,
            }}
          />
          </View>
          
          <View style={{ height: heightPercentageToDP(10) }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  }
};
//make this component available to the app
export default ContactScreen;
