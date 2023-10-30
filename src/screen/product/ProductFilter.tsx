//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header } from "../../components";

// create a component
const ProductFilter = () => {
  return (
    <View style={styles.container}>
      <Header isMainScreen={false}/>
      {/* <View style={styles.bodyHeader}>
        <Text>kodu/Seadmed</Text>
      </View> */}
      <View style={styles.containerBody}>
        <View style={styles.leftView}>
          <Text>left</Text>
        </View>
        <View style={styles.rightView}>
          <Text>right</Text>
        </View>
      </View>
      {/* <View  style={{justifyContent:'flex-end',flex:1}}>
      <FooterView />
      </View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bodyHeader:{
  },
  containerBody:{
  flexDirection:'row',
  flex:1,
  justifyContent:'center'
  },
  leftView:{
    flex:0.4,
    // borderWidth:1,
    alignItems:'flex-end'
 
  },
  rightView:{
    flex:1,
    borderWidth:1
  }
});

//make this component available to the app
export default ProductFilter;
