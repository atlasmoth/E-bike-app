import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Route from "./route";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Main from "./main";
import Send from "./send";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F1F6FB",
        padding: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            style={{
              flex: 1,
              padding: 10,
            }}
          >
            <options.tabBarIcon active={isFocused ? true : false} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="root"
        options={{
          headerShown: false,
          tabBarIcon: ({ active }) => {
            return (
              <Text style={{ textAlign: "center" }}>
                <Foundation
                  name="home"
                  size={24}
                  color={active ? "#031420" : "#BBBFD0"}
                />
              </Text>
            );
          },
        }}
        component={Main}
      />
      <Tab.Screen
        name="Bookmarks"
        options={{
          headerShown: false,
          tabBarIcon: ({ active }) => {
            return (
              <Text style={{ textAlign: "center" }}>
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={24}
                  color={active ? "#031420" : "#BBBFD0"}
                />
              </Text>
            );
          },
        }}
        component={Route}
      />
      <Tab.Screen
        name="Send"
        options={{
          headerShown: false,
          tabBarIcon: ({ active }) => {
            return (
              <Text style={{ textAlign: "center" }}>
                <Feather
                  name="send"
                  size={24}
                  color={active ? "#031420" : "#BBBFD0"}
                />
              </Text>
            );
          },
        }}
        component={Send}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ active }) => {
            return (
              <Text style={{ textAlign: "center" }}>
                <Feather
                  name="settings"
                  size={24}
                  color="black"
                  color={active ? "#031420" : "#BBBFD0"}
                />
              </Text>
            );
          },
        }}
        component={Route}
      />
    </Tab.Navigator>
  );
}
