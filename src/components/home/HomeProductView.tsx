//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { colors } from "../../theme/Colors";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";

// create a component
const HomeProductView = ({ data }: any) => {
  console.log(' data', data);
  
  return (
    Platform.OS == 'web' ?
      <View style={styles.container}>
        <Image source={icons.image1} style={styles.iconStyle} resizeMode='contain' />
        <Text>{data?.category_title}</Text>
      </View>
      :
      <View style={styles.containerMob}>
        <Image source={data?.iconName} style={styles.iconStyleMob} resizeMode='contain' />
        <Text style={defaultFont(400, 14, colors.black)}>{data?.name}</Text>
      </View>

  );
};

// define your styles
const styles = StyleSheet.create({
  //web
  container: {
    width: 260,
    height: 412,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginRight: 21,
    justifyContent: 'space-between'
  },
  iconStyle: {
    width: 190,
    height: 190,
    alignSelf: 'center',
    marginTop: 30
  },


  //mobile
  containerMob: {
    width: 208,
    height: 330,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginRight: 21,
    justifyContent: 'space-between'
  },
  iconStyleMob: {
    width: 208 - heightPercentageToDP(4),
    height: 190,
    alignSelf: 'center',
    marginTop: 30,
    // backgroundColor: 'red'
  }
});

//make this component available to the app
export default HomeProductView;
