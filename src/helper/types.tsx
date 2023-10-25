import { NavigationProp, Route, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigations/StackNavigator";
import store from "../redux";
type UniversalScreenRouteProp = RouteProp<RootStackParamList>;

type UniversalScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type UniversalProps = {
  route: UniversalScreenRouteProp;
  navigation: UniversalScreenNavigationProp;
};

export interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

