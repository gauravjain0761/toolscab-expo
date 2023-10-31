/* eslint-disable global-require */
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
// import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "articulatCF-regular": require("../../assets/fonts/ArticulatCF-Regular.otf"),
          "articulatCF-bold": require("../../assets/fonts/ArticulatCF-Bold.otf"),
          "articulatCF-medium": require("../../assets/fonts/ArticulatCF-Medium.otf"),
          "articulatCF-normal": require("../../assets/fonts/ArticulatCF-Normal.otf"),

          "oddval-bold": require("../../assets/fonts/Fontspring-DEMO-oddval-bold-BF640a8b02262ad.otf"),
          "oddval-semibold": require("../../assets/fonts/Fontspring-DEMO-oddval-semibold-BF640a8b0281ea4.otf"),
          "oddval-regular": require("../../assets/fonts/Fontspring-DEMO-oddval-regular-BF640a8b02561b2.otf"),
          "oddval-medium": require("../../assets/fonts/Fontspring-DEMO-oddval-medium-BF640a8b02b5791.otf"),
          "oddval-light": require("../../assets/fonts/Fontspring-DEMO-oddval-light-BF640a8b028a7ac.otf"),

          "arial-regular": require("../../assets/fonts/ARIAL.TTF"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
