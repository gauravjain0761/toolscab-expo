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
const FAQScreen = () => {
  const [downData, setDownData] = useState(listData);
  const [htmlView, setHtmlView] = useState("");
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onWebViewPress = () => {
    const obj = {
      params: {
        title: `content?title=faq`,
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

  const onSelectPress = (list: any) => {
    const updateData = downData?.map((item) => {
      if (list.id === item?.id) {
        return { ...item, isSelect: !list.isSelect };
      } else {
        return { ...item, isSelect: false };
      }
    });
    setDownData(updateData);
  };

  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 150 }}>
          {/* {downData?.map((item) => {
            return (
              <View style={styles.listMainWeb}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      ...commonFontStyle(
                        fontFamily.articulat_normal,
                        24,
                        colors.black
                      ),
                    }}
                  >
                    {item?.title}
                  </Text>
                  <TouchableOpacity onPress={() => onSelectPress(item)}>
                    <Image
                      source={icons.downarrow}
                      style={{
                        width: 24,
                        height: 24,
                        transform: [
                          { rotate: item?.isSelect ? "180deg" : "0deg" },
                        ],
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {item?.isSelect && (
                  <Text style={styles.listTextWeb}>{item?.subTitle}</Text>
                )}
              </View>
            );
          })} */}
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
          {/* <Text style={styles.headermainTextMob}>KKK</Text> */}
          {/* <View style={styles.headerLine}/>
          {downData?.map((item) => {
            return (
              <View style={styles.listStyleMob}>
                <View style={styles.listViewMob}>
                  <Text style={styles.listTextMob}>{item?.title}</Text>
                  <TouchableOpacity onPress={() => onSelectPress(item)}>
                    <Image
                      source={icons.downarrow}
                      style={[
                        styles.downIconMob,
                        {
                          transform: [
                            { rotate: item?.isSelect ? "180deg" : "0deg" },
                          ],
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>
                {item?.isSelect && (
                  <Text style={styles.subTextMob}>{item?.subTitle}</Text>
                )}
              </View>
            );
          })} */}
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
export default FAQScreen;
