import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import "moment-timezone";

type Props = {
  title?: string;
  list?: any;
  onPress?: () => void;
  removeRental?: () => void;
  data?: any;
};

const CartList = ({ title, list, onPress, data, removeRental }: Props) => {
  const navigationRef = useNavigation();

  const duration = moment
    .utc(new Date())
    .diff(moment(data?.added_to_cart), "seconds");

  const second = Math.floor(duration);
  const [delay, setDelay] = useState(second < 900 ? 900 - second : 0);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });
  
  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {/* <Image
            source={icons.image1}
            style={styles.iconsStyle}
            resizeMode="contain"
          /> */}
          <Image
            defaultSource={icons.defultIcon}
            source={{
              uri: `https://api.toolscab.ee/PhotoBinary/CategoryPhoto?category_id=${data?.main_product?.product_category_id}&maxWidth=500&maxHeight=500`,
            }}
            style={styles.iconsStyle}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 30, flex: 0.9 }}>
            <Text style={styles.headerText}>
              {data?.main_product?.category_title}
            </Text>
            <Text style={styles.headerText1}>
              {data?.main_product?.product_name}
            </Text>
            <View style={styles.underLine} />
            <Text style={styles.headerText2}>
              {data?.location?.spot}{" "}
              <Text style={styles.headerSubText2}>{data?.location?.city}</Text>
            </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={styles.headerText3}>
                {data?.main_product?.price}€/min
              </Text>
              <TouchableOpacity onPress={removeRental}>
                <Text style={styles.headerText4}>eemalda</Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>
        </View>
        <View>
          <Text
            style={styles.headerText5}
          >{`${data?.main_product?.price}€/min`}</Text>

          <Text
            style={[
              styles.headerText6,
              { color: delay < 50 ? colors.red : colors.headerBG },
            ]}
          >
            {minutes ? `${minutes < 10 ? "0" : ""}${minutes}` : "00"}:
            {seconds ? `${seconds < 10 ? "0" : ""}${seconds}` : "00"}
          </Text>

          <Text style={styles.headerText7}>{"Tasuta broneering"}</Text>

          <CommonGreenBtn
            title="Ava kapp"
            onPress={() => onPress()}
            style={styles.btnStyle}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerMob}>
        <View style={styles.leftContainerMob}>
          {/* <Image
            source={icons.image1}
            style={styles.iconsStyleMob}
            resizeMode="contain"
          /> */}
          <Image
            defaultSource={icons.defultIcon}
            source={{
              uri: `https://api.toolscab.ee/PhotoBinary/CategoryPhoto?category_id=${data?.main_product?.product_category_id}&maxWidth=500&maxHeight=500`,
            }}
            style={styles.iconsStyleMob}
            resizeMode="contain"
          />

          <View style={{ marginTop: 12 }}>
            <Text style={styles.headerTextMob}>
              {data?.main_product?.brand}
            </Text>
            <Text style={styles.headerText1Mob}>
              {data?.main_product?.product_name}
            </Text>
            <View style={styles.underLineMob} />
            <Text style={styles.headerText2Mob}>{data?.location?.spot}</Text>
            <Text style={styles.headerSubText2Mob}>{data?.location?.city}</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View>
                <View style={styles.headerView3Mob}>
                  <Text style={styles.headerText3Mob}>
                    {data?.main_product?.price}€/min
                  </Text>
                </View>
                <TouchableOpacity onPress={removeRental}>
                  <Text style={styles.headerText4Mob}>eemalda</Text>
                </TouchableOpacity>
              </View>
              <View style={{ bottom: 20 }}>
                <Text
                  style={styles.headerText5Mob}
                >{`${data?.main_product?.price}€/min`}</Text>

                <Text
                  style={[
                    styles.headerText7Mob,
                    {
                      color: delay < 50 ? colors.red : colors.headerBG,
                      fontSize: 20,
                      lineHeight: 24,
                    },
                  ]}
                >
                  {minutes ? `${minutes < 10 ? "0" : ""}${minutes}` : "00"}:{seconds ? `${seconds < 10 ? "0" : ""}${seconds}` : "00"}
                </Text>

                <Text style={styles.headerText7Mob}>{"Tasuta broneering"}</Text>
              </View>
            </View>
            <CommonGreenBtn
              title="Ava kapp"
              onPress={() => onPress()}
              style={styles.btnStyleMob}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  underLine: {
    borderWidth: 0.5,
    marginVertical: 8,
    borderColor: colors.headerColorBg,
    // flex:0.5
  },
  iconsStyle: {
    width: 120,
    height: 120,
  },
  headerText: {
    lineHeight: 18,

    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  headerText1: {
    lineHeight: 28,
    marginTop: 8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  headerText2: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
  },
  headerSubText2: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  headerText3: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.headerBG),
  },
  headerText4: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.red),
  },
  headerText5: {
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 5,
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.red),
  },
  headerText6: {
    textAlign: "center",
    lineHeight: 30,
    ...commonFontStyle(fontFamily.articulat_bold, 24, colors.headerBG),
  },
  headerText7: {
    lineHeight: 18,
    textAlign: "center",
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.filterText),
  },
  itemText: {
    ...commonFontStyle(fontFamily.articulat_normal, 12, colors.checkBoxText),
  },
  btnStyle: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(7),
    marginTop: 8,
  },

  //mobile

  containerMob: {
    marginBottom: 30,
  },
  leftContainerMob: {
    // flex: 1,
  },
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    // alignItems: "center",
    marginTop: 5,
  },
  underLineMob: {
    borderWidth: 0.5,
    marginVertical: 8,
    borderColor: colors.headerColorBg,
    // flex:0.5
  },
  iconsStyleMob: {
    width: 223,
    height: 140,
    alignSelf: "center",
  },
  headerTextMob: {
    lineHeight: 18,
    ...defaultFont(400, 14, colors.filterText),
  },
  headerText1Mob: {
    lineHeight: 30,
    marginTop: 8,
    ...defaultFont(400, 20, colors.black),
  },
  headerText2Mob: {
    lineHeight: 28,
    ...defaultFont(700, 18, colors.black),
  },
  headerSubText2Mob: {
    lineHeight: 21,
    ...defaultFont(400, 15, colors.headerBG),
  },
  headerText3Mob: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
    ...defaultFont(400, 14, colors.headerBG),
  },
  headerView3Mob: {
    backgroundColor: colors.roheline,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 8,
    marginRight: 9,
  },
  headerText4Mob: {
    marginLeft: 10,
    marginTop: 5,
    ...defaultFont(400, 14, colors.red),
  },
  headerText5Mob: {
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 4,
    ...defaultFont(400, 14, colors.red),
  },
  headerText6Mob: {
    textAlign: "center",
    lineHeight: 30,
    ...defaultFont(600, 24, colors.headerBG),
  },
  headerText7Mob: {
    lineHeight: 18,
    textAlign: "center",
    ...defaultFont(400, 14, colors.filterText),
  },
  itemTextMob: {
    ...defaultFont(400, 14, colors.checkBoxText),
  },
  btnStyleMob: {
    borderColor: colors.headerBG,
    marginLeft: 10,
    width: widthPercentageToDP(28),
    marginTop: 40,
    alignSelf: "center",
    marginBottom: 30,
  },
});
