import React, { FC } from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { screenName } from "../helper/constants";
import HomeScreen from "../screen/home/HomeScreen";
import ProductDetail from "../screen/product/ProductDetail";
import OurOfUsScreen from "../screen/home/OurOfUsScreen";
import FAQScreen from "../screen/home/FAQScreen";
import RentalConditionsScreen from "../screen/home/RentalConditionsScreen";
import CartScreen from "../screen/cart/CartScreen";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { Image, Platform, StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../theme/Colors";
import { icons } from "../theme/Icons";
import { useDispatch } from "react-redux";
import { TOGGLE_DRAWER } from "../actions/dispatchTypes";
import ProductLocations from "../screen/product/ProductLocations";
import RegisterScreen from "../screen/auth/RegisterScreen";
import LoginScreenMobile from "../screen/auth/LoginScreenMobile";
import CatalogueFilter from "../screen/catalogue/CatalogueFilter";
import CatalogueProductsMobile from "../screen/catalogue/CatalogueProductsMobile";

export type RootStackParamList = {
  HomeScreen: undefined;
};

const options: NativeStackNavigationOptions = {
  headerShown: Platform.OS == 'web' ? false : true,
  // animation: "slide_from_bottom",
  animationDuration: 500,
  gestureEnabled: Platform.OS == 'web' ? false : true,
};

const headerStyleMain: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.headerBG,
    shadowOpacity: 0,
    elevation: 0,
  },
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: FC = () => {
  const dispatch = useDispatch()
  const onOpenDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER, payload: true })
  }
  const HeaderLeft = ({ navigation, tintColor }: any) => {
    return (
      <View>
        <Image
          source={icons.appLogo}
          style={styles.appLogo}
        />
      </View>
    );
  };

  const HeaderRight = ({ navigation, tintColor }: any) => {
    return (
      <TouchableOpacity onPress={() => onOpenDrawer()}>
        <Image
          source={icons.menuIcon}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    appLogo: {
      width: 122,
      height: 22,
      resizeMode: 'contain'
    },
    menuIcon: {
      width: 18,
      height: 18,
      resizeMode: 'contain'
    }
  });

  return (
    <Stack.Navigator
      // @ts-ignore
      initialRouteName={screenName.homeScreen}
      screenOptions={options}
    >
      <Stack.Screen
        // @ts-ignore
        name={screenName.homeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
            />
          ),
          headerRight: () => (
            <HeaderRight
              navigation={navigation}
            />
          ),
          headerTitle: '',
          ...headerStyleMain,
        })}
        component={HomeScreen}
      />
      <Stack.Screen
        // @ts-ignore
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
            />
          ),
          headerRight: () => (
            <HeaderRight
              navigation={navigation}
            />
          ),
          headerTitle: '',
          ...headerStyleMain,
        })}
        name={screenName.catalogueFilter}
        component={CatalogueFilter}
      />
      <Stack.Screen
        // @ts-ignore
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
            />
          ),
          headerRight: () => (
            <HeaderRight
              navigation={navigation}
            />
          ),
          headerTitle: '',
          ...headerStyleMain,
        })}
        name={screenName.catalogueProductsMobile}
        component={CatalogueProductsMobile}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.productDetail}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
            />
          ),
          headerRight: () => (
            <HeaderRight
              navigation={navigation}
            />
          ),
          headerTitle: '',
          ...headerStyleMain,
        })}
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
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
            />
          ),
          headerRight: () => (
            <HeaderRight
              navigation={navigation}
            />
          ),
          headerTitle: '',
          ...headerStyleMain,
        })}
        component={FAQScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.rentalConditionsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
            />
          ),
          headerRight: () => (
            <HeaderRight
              navigation={navigation}
            />
          ),
          headerTitle: '',
          ...headerStyleMain,
        })}
        component={RentalConditionsScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.cartScreen}
        component={CartScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.profileScreen}
        component={ProfileScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.productLocations}
        component={ProductLocations}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.registerScreen}
        options={({ navigation }) => ({
          headerShown:false
        })}
        component={RegisterScreen}
      />
      <Stack.Screen
        // @ts-ignore
        name={screenName.loginScreenMobile}
        options={({ navigation }) => ({
          headerShown:false
        })}
        component={LoginScreenMobile}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
