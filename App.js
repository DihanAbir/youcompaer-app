import React from "react";
import { NativeBaseProvider } from "native-base";
import SignIn from "./src/screen/SignIn";
import Register from "./src/screen/Register";
import HomePage from "./src/screen/HomeScreen";
import AppNavigation from "./src/navigation/AppNavigation";

import styles from "./Styles";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
