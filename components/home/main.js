import React, { useRef } from "react";

import {
  Animated,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");
const data = Array.from(new Array(7), () => Math.random() * Math.random());
export default function Main(props) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <ScrollView style={[{ backgroundColor: "#fff", flex: 1 }]}>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
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
            paddingHorizontal: 20,
          }}
        >
          Hello good Morning!
        </Text>
      </View>
      <View style={[{ paddingHorizontal: 20 }]}>
        <Animated.FlatList
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          pagingEnabled
          keyExtractor={(index) => index.toString()}
          renderItem={() => {
            return (
              <View
                style={[
                  {
                    backgroundColor: "#F1F6FB",
                    borderRadius: 32,
                    padding: 20,
                    marginRight: 20,
                  },
                ]}
              >
                <Image
                  resizeMode="contain"
                  source={{
                    uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/PHO_BIKE_PERS_REVO_RAY-21-CrossRay-E-FS-6-0-oblique-web_%23SALL_%23AEPI_%23V1%201.png",
                  }}
                  style={[
                    {
                      width: Dimensions.get("screen").width * 0.6,
                      height: 220,
                    },
                  ]}
                />
              </View>
            );
          }}
        />
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            },
          ]}
        >
          {data.map((src, index) => {
            const scale = scrollX.interpolate({
              inputRange: [
                (index - 1) * width * 0.7,
                index * width * 0.7,
                (index + 1) * width * 0.7,
              ],
              outputRange: ["#E5F0FC", "rgba(2, 19, 30, 1)", "#E5F0FC"],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={src}
                style={[
                  {
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: scale,
                    margin: 5,
                    borderColor: "#fff",
                    borderWidth: 1,
                  },
                ]}
              ></Animated.View>
            );
          })}
        </View>
      </View>
      <View
        style={[
          {
            backgroundColor: "#FFD337",
            marginVertical: 10,
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={[
            {
              flex: 1,
              marginRight: 20,
              fontFamily: "Inter_900Black",
              fontSize: 14,
              lineHeight: 18,
              color: "#96823D",
              maxWidth: 100,
            },
          ]}
        >
          Gotten your E-Bike yet?
        </Text>
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
            },
          ]}
          onPress={() => props.navigation.navigate("Send")}
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
            Your Orders{" "}
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

      <View
        style={[
          {
            marginVertical: 10,
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/animation_500_kvm3bfic.gif",
          }}
          style={{ height: 160, width: 160 }}
          resizeMode="contain"
        />
        <Text
          style={[
            {
              flex: 1,
              marginLeft: 20,
              fontFamily: "Inter_900Black",
              fontSize: 14,
              lineHeight: 18,
              color: "#424242",
            },
          ]}
        >
          You too can join our elite squad of E-bikers.
        </Text>
      </View>
    </ScrollView>
  );
}
