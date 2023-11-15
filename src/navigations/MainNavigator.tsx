import {
  NavigationContainer,
} from "@react-navigation/native";
import React, { FC} from "react";
import StackNavigator from "./StackNavigator";
import { navigationRef } from "./RootNavigation";

const RootContainer: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default RootContainer;
