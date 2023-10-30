import React, { FC } from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { screenName } from "../helper/constants";
import HomeScreen from "../screen/home/HomeScreen";
import ProductFilter from "../screen/product/ProductFilter";

export type RootStackParamList = {
  HomeScreen: undefined;
};

const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_bottom",
  animationDuration: 500,
  gestureEnabled: false,
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: FC = () => {
  return (
    <Stack.Navigator
      // @ts-ignore
      initialRouteName={screenName.productFilter}
      screenOptions={options}
    >
      <Stack.Screen
        // @ts-ignore
        name={screenName.homeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.productFilter}
        component={ProductFilter}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
