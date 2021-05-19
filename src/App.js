import React from "react";
import Navigator from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StatusBar } from "react-native";

const App = () => (
  <Provider store={store}>
    <StatusBar translucent={true} backgroundColor="transparent" />
    <Navigator />
  </Provider>
);

export default App;
