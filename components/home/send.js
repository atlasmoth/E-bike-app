import React from "react";

import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Send(props) {
  return (
    <ScrollView style={[{ padding: 20, backgroundColor: "#fff", flex: 1 }]}>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/preview%201.png",
          }}
          resizeMode="contain"
          style={[{ width: 50, height: 50, borderRadius: 5000 }]}
        />
        <Text
          style={[
            { padding: 10, backgroundColor: "#F1F6FB", borderRadius: 12 },
          ]}
        >
          <Feather name="bell" size={24} color="#2E3E5C" />
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 18,
            lineHeight: 22,
            color: "#000",
            marginVertical: 30,
          }}
        >
          Hello good Morning!
        </Text>
      </View>

      {/* orange */}
      <View
        style={[
          {
            backgroundColor: "#FFD337",
            borderRadius: 24,
            padding: 20,
            marginVertical: 20,
          },
        ]}
      >
        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 18,
            lineHeight: 20,
            color: "#031725",
            fontWeight: "200",
            marginVertical: 5,
          }}
        >
          Track your package
        </Text>
        <Text
          style={[
            {
              flex: 1,
              fontFamily: "Inter_900Black",
              fontSize: 14,
              lineHeight: 18,
              color: "#96823D",
              marginVertical: 10,
            },
          ]}
        >
          Enter the receipt number that has been given by the officer
        </Text>
        <TouchableOpacity
          style={[
            {
              padding: 20,
              borderRadius: 40,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
              borderColor: "#000",
              borderWidth: 1,
            },
          ]}
        >
          <Text
            style={[
              {
                color: "#000",
                textAlign: "center",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 18,
              },
            ]}
          >
            Enter Receipt Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#000",
              padding: 20,
              borderRadius: 40,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            },
          ]}
          onPress={() => props.navigation.navigate("Tracking")}
        >
          <Text
            style={[
              {
                color: "#fff",
                textAlign: "center",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 18,
              },
            ]}
          >
            Track now{" "}
          </Text>
          <Text
            style={[
              {
                marginLeft: 10,
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 18,
              },
            ]}
          >
            <Feather name="arrow-right" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={[
          {
            marginVertical: 20,
            color: "#2E3E5C",
            fontFamily: "Inter_900Black",
            fontSize: 16,
            lineHeight: 24,
          },
        ]}
      >
        Tracking History
      </Text>
      {/* first */}
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: "#FFD337",
              padding: 10,
              borderRadius: 1000,
            },
          ]}
        >
          <Text
            style={[
              {
                fontFamily: "Inter_900Black",
                fontSize: 24,
              },
            ]}
          >
            🚚
          </Text>
        </View>
        <View style={[{ flex: 1, marginHorizontal: 10 }]}>
          <Text
            style={[
              {
                color: "#1E3354",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 17,
              },
            ]}
          >
            SCP9374826473
          </Text>
          <Text
            style={[
              {
                color: "#7A809D",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 24,
              },
            ]}
          >
            In the process
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
      {/* second */}
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: "#F1F6FB",
              padding: 15,
              borderRadius: 1000,
            },
          ]}
        >
          <Text
            style={[
              {
                fontFamily: "Inter_900Black",
                fontSize: 24,
              },
            ]}
          >
            📬
          </Text>
        </View>
        <View style={[{ flex: 1, marginHorizontal: 10 }]}>
          <Text
            style={[
              {
                color: "#1E3354",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 17,
              },
            ]}
          >
            SCP9374826473
          </Text>
          <Text
            style={[
              {
                color: "#7A809D",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 24,
              },
            ]}
          >
            In the process
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
      {/* third */}
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: "#F1F6FB",
              padding: 15,
              borderRadius: 1000,
            },
          ]}
        >
          <Text
            style={[
              {
                fontFamily: "Inter_900Black",
                fontSize: 24,
              },
            ]}
          >
            📦
          </Text>
        </View>
        <View style={[{ flex: 1, marginHorizontal: 10 }]}>
          <Text
            style={[
              {
                color: "#1E3354",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 17,
              },
            ]}
          >
            SCP9374826473
          </Text>
          <Text
            style={[
              {
                color: "#7A809D",
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 24,
              },
            ]}
          >
            In the process
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
    </ScrollView>
  );
}
