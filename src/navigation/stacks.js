import React, { useState, useEffect } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { routeNames } from "./routes";
import { useSelector } from "react-redux";
import CreateAccount from "../screens/CreateAccount";
import LinkYourBank from "../screens/LinkYourBank";
import TermsOfServices from "../screens/TermsOfServices";

const Stack = createStackNavigator();

const authRoutes = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}
    headerMode="none"
  >
    <Stack.Screen name={routeNames.CREATE_ACCOUNT} component={CreateAccount} />
    <Stack.Screen
      name={routeNames.TERMS_OF_SERVICES}
      component={TermsOfServices}
    />
  </Stack.Navigator>
);

const authorizedRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}
    headerMode="none"
  >
    <Stack.Screen name={routeNames.LINK_YOUR_BANK} component={LinkYourBank} />
  </Stack.Navigator>
);

const AppStackScreen = () => {
  const { isLogged } = useSelector((state) => state.authReducer);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="App"
        component={isLogged ? authorizedRoutes : authRoutes}
      />
    </Stack.Navigator>
  );
};

export default AppStackScreen;
