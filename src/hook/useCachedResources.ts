/* eslint-disable global-require */
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

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
          'articulatCF-regular': require('../../assets/fonts/ArticulatCF-Regular.otf'),
          'articulatCF-bold': require('../../assets/fonts/ArticulatCF-Bold.otf'),
          'articulatCF-medium': require('../../assets/fonts/ArticulatCF-Medium.otf'),
          'articulatCF-normal': require('../../assets/fonts/ArticulatCF-Normal.otf'),
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
