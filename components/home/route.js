import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

export default function Route(props) {
  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center",
          padding: 20,
          alignItems: "center",
        },
      ]}
    >
      <Text>Hello</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Tracking")}>
        <Text>Go to Tracking</Text>
      </TouchableOpacity>
    </View>
  );
}
