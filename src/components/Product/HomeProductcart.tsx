//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../theme/Colors";

// create a component
const HomeProductcart = ({data}:any) => {
  return (
    <View style={styles.container}>
        <Image source={data?.iconName} style={styles.iconStyle} resizeMode='contain' />
      <Text>{data?.name}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 412,
    backgroundColor: colors.homecartBG,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    paddingHorizontal:16,
    paddingVertical:20,
    marginRight:21,
    justifyContent:'space-between'
  },
  iconStyle:{
    width:190,
    height:190,
    alignSelf:'center',
    marginTop:30
  }
});

//make this component available to the app
export default HomeProductcart;
