import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { colors, icons } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarLabelStyle: {
            fontWeight: "500",
            fontFamily: "Poppins-Regular",
            top: -2,
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            height: 84,
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Foundation name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="bookmark-minus"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="circle-plus" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="user-alt" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
