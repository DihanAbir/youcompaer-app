import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import SignIn from "../screen/SignIn";
import Register from "../screen/Register";
import HomeScreen from "../screen/HomeScreen";
import SubScreen from "../screen/SubScreen";
import DetailsScreen from "../screen/DetailsScreen";
import { WebView } from "react-native-webview";
import { View } from "native-base";
import Screen1 from "../screen/Screen1";
import Screen2 from "../screen/Screen2";
import Gallery from "../screen/Gallery";
import Portfolio from "../screen/Portfolio";
import About from "../screen/About";
import Training from "../screen/Trainning";
import MyCarousel from "../About";
import PortfolioItem from "../screen/PortfolioItem";
import Galleryitem from "../screen/Galleryitem";
import TrainingItem from "../screen/TrainingItem";
import Services from "../screen/Services";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawerapp() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      // drawerStyle={styles.drawer}
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        itemStyle: { alignItems: "flex-end" },
        tabBarActiveTintColor: "#e67a15",
        tabBarInactiveTintColor: "gray",
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        options={{ drawerLabel: "Profile-Gallery" }}
        name="Gallery"
        component={Gallery}
      />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Portfolio" component={Portfolio} />
      <Drawer.Screen name="About" component={MyCarousel} />
      <Drawer.Screen name="Training" component={Training} />
    </Drawer.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={Drawerapp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SubScreen" component={SubScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="PortfolioItem" component={PortfolioItem} />
        <Stack.Screen name="Galleryitem" component={Galleryitem} />
        <Stack.Screen name="trainingItem" component={TrainingItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
