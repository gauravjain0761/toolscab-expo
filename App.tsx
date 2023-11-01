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
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import store from "./src/redux";
import { colors } from "./src/theme/Colors";
import MainNavigator from "./src/navigations/MainNavigator";
import useCachedResources from "./src/hook/useCachedResources";
import AppDrawerModal from "./src/components/AppDrawerModal";




const Main = () => {
  const toggleDrawer = useSelector(e => e.home.toggleDrawer)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <MainNavigator />
      <AppDrawerModal isVisible={toggleDrawer} />
    </View>
  )
}


const App = () => {

  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }





  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
