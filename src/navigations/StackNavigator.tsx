import React, { FC } from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { screenName } from "../helper/constants";
import HomeScreen from "../screen/home/HomeScreen";
import ProductFilter from "../screen/product/ProductFilter";
import ProductDetail from "../screen/product/ProductDetail";
import OurOfUsScreen from "../screen/home/OurOfUsScreen";
import FAQScreen from "../screen/home/FAQScreen";
import RentalConditionsScreen from "../screen/home/RentalConditionsScreen";
import CartScreen from "../screen/cart/CartScreen";

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
      initialRouteName={screenName.cartScreen}
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
      <Stack.Screen
        // @ts-ignore
        name={screenName.productDetail}
        component={ProductDetail}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.ourOfUsScreen}
        component={OurOfUsScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.faqScreen}
        component={FAQScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.rentalConditionsScreen}
        component={RentalConditionsScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.cartScreen}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
