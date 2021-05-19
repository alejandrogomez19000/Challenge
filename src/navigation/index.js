import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./stacks";

const navigation = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default navigation;
