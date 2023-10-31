//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors } from "../../theme/Colors";
import { screen_height, screen_width, wp } from "../../helper/globalFunctions";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { icons } from "../../theme/Icons";

// create a component
type Props = {
  heading?: string;
  index?: number;
  label?: string;
  aircon?: string;
  hoselength?: string;
  volumeflow?: string;
  title: string;
  icon: any;
  onSelectPress: () => void;
  mainView: boolean;
};
const Productcart = ({
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
}: Props) => {
  return (
    <>
      {index == 0 ? (
        <ImageBackground
          source={icon}
          resizeMode="cover"
          imageStyle={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}
          style={styles.containerImg}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 1, alignSelf: "flex-end" }}>
              <Text style={styles.imgLabelText}>{label}</Text>
              <Text style={styles.imgText}>{title}</Text>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <TouchableOpacity
          onPress={() => onSelectPress()}
          style={[styles.container]}
        >
          {!mainView && index === 1 && (
            <View style={styles.headerRight}>
              <Text style={styles.headerRightText}>Uus</Text>
            </View>
          )}
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
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
              <Image
                source={icons.rightBack}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: screen_width * 0.165,
    // height: screen_height * 0.49,
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
    width: 190,
    height: 190,
    alignSelf: "center",
    marginTop: 30,
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
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.white),
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
export default Productcart;
