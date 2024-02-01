//import liraries
import React, { useEffect, useState } from "react";
import { View, Text,ScrollView, Platform } from "react-native";
import { FooterView, Header } from "../../components";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { listDataRental } from "../../helper/constantData";
import { styles } from "./RentalConditionsScreenStyle";
import { getHtmlMethod } from "../../actions/authAction";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import RenderHTML from "react-native-render-html";
import { SCREEN_WIDTH } from "../../theme/Fonts";

// create a component
const RentalConditionsScreen = () => {

  const [downData, setDownData] = useState(listDataRental);
  const [htmlView, setHtmlView] = useState("");
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onWebViewPress = () => {
    const obj = {
      params: {
        title: `content?title=tos`,
      },
      onSuccess: (res: any) => {
        setHtmlView(res);
      },
      onFailure: () => {},
    };
    dispatch(getHtmlMethod(obj));
  };

  useEffect(() => {
    onWebViewPress();
  }, [isFocused]);

  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 150 }}>
          {/* {downData?.map((item) => {
            return (
              <View style={styles.mainStyleWeb}>
                <Text style={styles.listTextWeb}>{item?.title}</Text>

                <Text style={styles.listSubTextWeb}>{item?.subTitle}</Text>
              </View>
            );
          })} */}
           <View style={{ alignSelf: "center" }}>
            <RenderHTML
              contentWidth={SCREEN_WIDTH}
              source={{
                html: `${htmlView}`,
              }}
            />
          </View>
          <View style={{ height: 160 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: heightPercentageToDP(5),
          }}
        >
          {/* {downData?.map((item) => {
            return (
              <View style={styles.mainStyleMob}>
                <Text style={styles.listTextMob}>{item?.title}</Text>

                <Text style={styles.listSubTextMob}>{item?.subTitle}</Text>
              </View>
            );
          })} */}
           <View style={{ alignSelf: "center" ,flex:1}}>
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
  }
};

//make this component available to the app
export default RentalConditionsScreen;
