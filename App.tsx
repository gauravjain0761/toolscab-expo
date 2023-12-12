/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import store from "./src/redux";
import { colors } from "./src/theme/Colors";
import MainNavigator from "./src/navigations/MainNavigator";
import AppDrawerModalMobile from "./src/components/modal/AppDrawerModalMobile";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";



const Main = () => {
  const toggleDrawer = useSelector(e => e.home.toggleDrawer)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <MainNavigator />
      {Platform.OS !== 'web' && <AppDrawerModalMobile isVisible={toggleDrawer} />}
    </View>
  )
}


const App = () => {

  const [fontLoaded, setfontLoaded] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      ...FontAwesome.font,
      "articulatCF-regular": require("./assets/fonts/ArticulatCF-Regular.otf"),
      "articulatCF-bold": require("./assets/fonts/ArticulatCF-Bold.otf"),
      "articulatCF-medium": require("./assets/fonts/ArticulatCF-Medium.otf"),
      "articulatCF-normal": require("./assets/fonts/ArticulatCF-Normal.otf"),
      "articulatCF-semibold": require("./assets/fonts/ArticulatCF-DemiBold.otf"),
      "oddval-semibold1": require("./assets/fonts/Oddval-SemiBold.otf"),
      "oddval-bold": require("./assets/fonts/Fontspring-DEMO-oddval-bold-BF640a8b02262ad.otf"),
      "oddval-semibold": require("./assets/fonts/Fontspring-DEMO-oddval-semibold-BF640a8b0281ea4.otf"),
      "oddval-regular": require("./assets/fonts/Fontspring-DEMO-oddval-regular-BF640a8b02561b2.otf"),
      "oddval-medium": require("./assets/fonts/Fontspring-DEMO-oddval-medium-BF640a8b02b5791.otf"),
      "oddval-light": require("./assets/fonts/Fontspring-DEMO-oddval-light-BF640a8b028a7ac.otf"),
      "arial-regular": require("./assets/fonts/arial.ttf"),
    })
      .then(() => {
        setfontLoaded(true)
      })
  }, [])



  if (!fontLoaded) return null

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
};

const styles = StyleSheet.create({});

export default App;
