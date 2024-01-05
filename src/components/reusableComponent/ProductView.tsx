//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  TextStyle,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  catalogueImg,
  screen_height,
  screen_width,
  wp,
} from "../../helper/globalFunctions";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { icons } from "../../theme/Icons";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { defaultFont } from "../../theme/Fonts";
// create a component
type Props = {
  heading?: string;
  index?: number;
  label?: string;
  aircon?: string;
  hoselength?: string;
  volumeflow?: string;
  title?: string;
  icon?: any;
  onSelectPress?: () => void;
  mainView?: boolean;
  labelStyle?: TextStyle;
  titleStyle?: TextStyle;
  listStyle?: TextStyle;
  product_category_id: any;
  banner: any;
};
const ProductView = ({
  heading,
  title,
  icon,
  onSelectPress,
  mainView,
  label,
  aircon,
  volumeflow,
  hoselength,
  index,
  labelStyle,
  titleStyle,
  listStyle,
  product_category_id,
  banner,
}: Props) => {
  return Platform.OS == "web" ? (
    <>
      {/* {index == 0 ? (
          <ImageBackground
            source={catalogueImg(label)}
            resizeMode="cover"
            imageStyle={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}
            style={[styles.containerImg, { height: 350 }]}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 1, alignSelf: "flex-end" }}>
                <Text style={styles.imgLabelText}>{label}</Text>
              </View>
            </View>
          </ImageBackground>
        ) : ( */}
      <TouchableOpacity
        onPress={() => onSelectPress()}
        style={[styles.container]}
      >
        {!mainView && banner && (
          <View style={styles.headerRight}>
            <Text style={styles.headerRightText}>{banner}</Text>
          </View>
        )}
        <Image
          defaultSource={icons.defultIcon}
          source={{
            uri: product_category_id,
          }}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignSelf: "flex-end" }}>
            {mainView ? (
              <Text style={styles.titleText}>{title}</Text>
            ) : (
              <>
                <Text
                  style={{
                    lineHeight: 18,
                    ...commonFontStyle(
                      fontFamily.articulat_regular,
                      12,
                      colors.black
                    ),
                  }}
                >
                  {label}
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    marginBottom: 10,
                    lineHeight: 21,
                    ...commonFontStyle(
                      fontFamily.articulat_medium,
                      14,
                      colors.black
                    ),
                  }}
                >
                  {title}
                </Text>
                <Text
                  style={{
                    lineHeight: 18,
                    ...commonFontStyle(
                      fontFamily.articulat_regular,
                      12,
                      colors.filterText
                    ),
                  }}
                >
                  {`Õhukulu [l/min]: ${aircon}`}
                </Text>
                <Text
                  style={{
                    lineHeight: 18,
                    ...commonFontStyle(
                      fontFamily.articulat_regular,
                      12,
                      colors.filterText
                    ),
                  }}
                >
                  {`Mahuvool [l/min]: ${volumeflow}`}
                </Text>
                <Text
                  style={{
                    lineHeight: 18,
                    ...commonFontStyle(
                      fontFamily.articulat_regular,
                      12,
                      colors.filterText
                    ),
                  }}
                >
                  {`Vooliku pikkus [m]: ${hoselength}`}
                </Text>
              </>
            )}
          </View>
          <TouchableOpacity
            style={{
              width: 49,
              height: 46,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              shadowColor: "#000",
              backgroundColor: colors.headerColorBg,
              alignSelf: "flex-end",
            }}
            onPress={() => onSelectPress()}
          >
            <Image source={icons.rightBack} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* )} */}
    </>
  ) : (
    <>
      {/* {index == 0 ? (
          <ImageBackground
            source={catalogueImg(label)}
            resizeMode="cover"
            imageStyle={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}
            style={[styles.containerMob, { height: screen_height * 0.29 }]}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 1, alignSelf: "flex-end" }}>
                <Text style={styles.imgLabelText}>{label}</Text>
                <Text style={styles.imgText}>{title}</Text>
              </View>
            </View>
          </ImageBackground>
        ) : ( */}
      <TouchableOpacity
        onPress={() => onSelectPress()}
        style={styles.containerMob}
      >
        {!mainView && banner && (
          <View style={styles.headerRightMob}>
            <Text style={styles.headerRightTextMob}>{banner}</Text>
          </View>
        )}
        <Image
          defaultSource={icons.defultIcon}
          source={{
            uri: product_category_id,
          }}
          style={styles.imageTools}
          resizeMode="contain"
        />
        <View style={styles.bottomRow}>
          <View style={{ flex: 1 }}>
            {mainView ? (
              <Text style={styles.titleText}>{title}</Text>
            ) : (
              <>
                <Text
                  style={[
                    { marginTop: 5, ...defaultFont(400, 11, colors.black) },
                    labelStyle,
                  ]}
                >
                  {label}
                </Text>
                <Text
                  style={[
                    {
                      marginBottom: 5,
                      marginTop: 5,
                      ...defaultFont(700, 14, colors.black),
                    },
                    titleStyle,
                  ]}
                >
                  {title}
                </Text>
                <Text
                  style={[
                    {
                      ...defaultFont(400, 11, colors.filterText),
                    },
                    listStyle,
                  ]}
                >
                  {`Õhukulu [l/min]: ${aircon}`}
                </Text>
                <Text
                  style={[
                    {
                      ...defaultFont(400, 11, colors.filterText),
                    },
                    listStyle,
                  ]}
                >
                  {`Mahuvool [l/min]: ${volumeflow}`}
                </Text>
                <Text
                  style={[
                    {
                      ...defaultFont(400, 11, colors.filterText),
                    },
                    listStyle,
                  ]}
                >
                  {`Vooliku pikkus [m]: ${hoselength}`}
                </Text>
              </>
            )}
          </View>
          <TouchableOpacity
            style={styles.backImageView}
            onPress={() => onSelectPress()}
          >
            <Image source={icons.rightBack} style={{ width: 13, height: 13 }} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* )} */}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  // mobile
  containerMob: {
    width: (SCREEN_WIDTH - heightPercentageToDP(6)) / 2,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(2),
    marginLeft: heightPercentageToDP(2),
  },
  headerRightMob: {
    position: "absolute",
    right: 10,
    backgroundColor: colors.roheline,
    paddingHorizontal: 15,
    // paddingVertical: 3,
    top: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerRightTextMob: {
    lineHeight: 21,
    ...defaultFont(700, 8, colors.black),
  },
  imageTools: {
    width: (SCREEN_WIDTH - heightPercentageToDP(13)) / 2,
    height: (SCREEN_WIDTH - heightPercentageToDP(13)) / 2,
    alignSelf: "center",
    marginTop: 6,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  backImageView: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.headerColorBg,
  },
  name: {
    ...defaultFont(600, 10, colors.black),
  },

  // web
  container: {
    width: screen_width * 0.165,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginRight: 21,
    justifyContent: "space-between",
    marginBottom: 19,
  },
  containerImg: {
    width: screen_width * 0.165,
    height: undefined,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginRight: 21,
    justifyContent: "space-between",
    marginBottom: 19,
  },
  iconStyle: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 10,
  },
  titleText: {
    letterSpacing: 1.4,
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_medium, 14, colors.black),
  },
  imgText: {
    // marginBottom: 10,
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_medium, 14, colors.white),
  },
  imgLabelText: {
    lineHeight: 18,
    ...commonFontStyle(fontFamily.articulat_regular, 14, colors.white),
  },
  headerRight: {
    position: "absolute",
    right: 10,
    backgroundColor: colors.roheline,
    paddingHorizontal: 24,
    paddingVertical: 6,
    top: 10,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerRightText: {
    lineHeight: 21,
    ...commonFontStyle(fontFamily.articulat_medium, 14, colors.black),
  },
});

//make this component available to the app
export default ProductView;
