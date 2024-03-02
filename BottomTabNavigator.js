// BottomTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

// import the components
import Moduls from "./tabs/moduls";
import AccountInfo from "./tabs/account";
import Games from "./tabs/games";
import Cupboard from "./tabs/cupboard";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: "#7A1FA0",
      }}
    >
      <Tab.Screen
        name="Communication"
        component={Moduls}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cupboard"
        component={Cupboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cupboard-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountInfo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
