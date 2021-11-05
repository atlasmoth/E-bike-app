import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tracking from "./components/tracking";
import Home from "./components/home";

const Stack = createNativeStackNavigator();

function Signin(props) {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#FFD337",
          alignItems: "center",
          padding: 20,
        },
      ]}
    >
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/Group%201729.png",
        }}
        resizeMode="cover"
        style={[{ width: "100%", height: 270 }]}
      />
      <View style={[{ marginVertical: 40 }]}>
        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 24,
            lineHeight: 32,
            fontWeight: "bold",
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Welcome to E-Bikes
        </Text>
        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 14,
            lineHeight: 24,
            color: "#96823D",
            textAlign: "center",
          }}
        >
          Buying Electric bikes just got a lot easier, Try us today.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={[
          {
            backgroundColor: "#000",
            borderRadius: 52,
            padding: 20,
            position: "relative",
            width: "100%",
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/Group%20202.png",
          }}
          resizeMode="contain"
          style={[{ width: 20, height: 20 }]}
        />
        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 14,
            lineHeight: 24,
            color: "#fff",
            textAlign: "center",
            flex: 1,
          }}
        >
          Login with Google
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "Inter_900Black",
          fontSize: 14,
          lineHeight: 24,
          color: "#96823D",
          textAlign: "center",
        }}
      >
        Don't have an account?
        <Text style={[{ color: "#031522", marginLeft: 10 }]}>Sign Up</Text>
      </Text>
    </View>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tracking"
            component={Tracking}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
