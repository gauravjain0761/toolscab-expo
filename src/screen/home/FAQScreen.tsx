//import liraries
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../theme/Colors";
import { CommonMapView, FooterView, Header } from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { fontFamily } from "../../helper/constants";

import { icons } from "../../theme/Icons";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const listData = [
  {
    id: 1,
    title: "Kuidas seadet rentida?",
    isSelect: false,
    subTitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In\npellentesque velit eget ligula iaculis dignissim.\nCurabitur vel tempor augue.Curabitur ultricies ut nibh non ullamcorper.\nMauris iaculis viverra velit, a rutrum eros cursus non. `,
  },
  {
    id: 2,
    title: "Kuidas rentimise eest tasuda?",
    subTitle: "",
    isSelect: false,
  },
  { id: 3, title: "Kus teid leiab?", subTitle: "", isSelect: false },
  { id: 4, title: "Kuidas ma arve saan?", subTitle: "", isSelect: false },
  {
    id: 5,
    title: "Kas ma saan renditavaid seadmeid ka osta?",
    subTitle: "",
    isSelect: false,
  },
  {
    id: 6,
    title: "Seade läks katki, mida teha?",
    subTitle: "",
    isSelect: false,
  },
];

// create a component
const FAQScreen = () => {
  const [downData, setDownData] = useState(listData);

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
          {downData?.map((item) => {
            return (
              <View
                style={{
                  width: screen_width * 0.7,
                  alignSelf: "center",
                  paddingHorizontal: 24,
                  backgroundColor: colors.headerColorBg,
                  marginBottom: 32,
                  paddingVertical: 10,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
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
                  <Text
                    style={{
                      lineHeight: 20,
                      marginBottom: 20,
                      ...commonFontStyle(
                        fontFamily.articulat_normal,
                        18,
                        colors.black
                      ),
                    }}
                  >
                    {item?.subTitle}
                  </Text>
                )}
              </View>
            );
          })}
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: heightPercentageToDP(8),
          }}
        >
          {downData?.map((item) => {
            return (
              <View
                style={{
                  width: screen_width * 0.9,
                  flex: 1,
                  alignSelf: "center",
                  paddingHorizontal: 24,
                  backgroundColor: colors.headerColorBg,
                  marginBottom: heightPercentageToDP(4),
                  paddingVertical: 10,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  // marginHorizontal:widthPercentageToDP(5)
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      ...defaultFont(400, 18, colors.blackType),
                    }}
                  >
                    {item?.title}
                  </Text>
                  <TouchableOpacity onPress={() => onSelectPress(item)}>
                    <Image
                      source={icons.downarrow}
                      style={{
                        width: 20,
                        height: 20,
                        transform: [
                          { rotate: item?.isSelect ? "180deg" : "0deg" },
                        ],
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {item?.isSelect && (
                  <Text
                    style={{
                      lineHeight: 20,
                      marginBottom: widthPercentageToDP(4),
                      marginTop: widthPercentageToDP(2),
                      ...defaultFont(400, 18, colors.blackType),
                    }}
                  >
                    {item?.subTitle}
                  </Text>
                )}
              </View>
            );
          })}
          <View style={{ height: heightPercentageToDP(10) }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  }
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  ofusText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 24, colors.black),
  },
  ofusSubText: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },

  //mobile

  containerMob: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  ofusTextMob: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 24, colors.black),
  },
  ofusSubTextMob: {
    textAlign: "left",
    alignSelf: "flex-start",
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
});

//make this component available to the app
export default FAQScreen;