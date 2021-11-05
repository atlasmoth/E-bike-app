import ActionSheet from "react-native-actions-sheet";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { createRef, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

const actionSheetRef = createRef();

const Tracking = () => {
  let actionSheet;
  // useEffect(() => {
  //   actionSheetRef.current?.setModalVisible(true);
  // }, []);
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#F1F6FB",
      }}
    >
      <ImageBackground
        style={[{ flex: 1, padding: 20 }]}
        resizeMode="cover"
        source={{
          uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/Group%201721.png",
        }}
      >
        <View
          style={[
            { flexDirection: "row", alignItems: "center", marginVertical: 20 },
          ]}
        >
          <TouchableOpacity>
            <Entypo name="chevron-small-left" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Inter_900Black",
              fontSize: 18,
              lineHeight: 22,
              color: "#000",
              textAlign: "center",
              marginLeft: 70,
            }}
          >
            Tracking Details
          </Text>
        </View>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#FFD337",
              borderRadius: 46,
              padding: 10,
              marginVertical: 20,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: "Inter_900Black",
              fontSize: 18,
              lineHeight: 22,
              color: "#000",
              textAlign: "center",
              padding: 15,
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: 40,
              fontWeight: 200,
            }}
          >
            SCP6653728497
          </Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/atlasmoth/fun-projects/master/Group%201724.png",
          }}
          resizeMode="contain"
          style={[{ width: "100%", height: 171, marginTop: 100 }]}
        />
        <ActionSheet
          ref={actionSheetRef}
          gestureEnabled={true}
          headerAlwaysVisible={true}
        >
          <View
            style={[
              {
                backgroundColor: "#fff",
                flex: 1,
                padding: 20,
                borderRadius: 80,
              },
            ]}
          >
            <Text
              style={{
                fontFamily: "Inter_900Black",
                fontSize: 14,
                lineHeight: 24,
                color: "#7A809D",
                fontWeight: 200,
              }}
            >
              Estimate arrives in
            </Text>
            <Text
              style={{
                fontFamily: "Inter_900Black",
                fontSize: 24,
                lineHeight: 24,
                color: "#2E3E5C",
                fontWeight: 200,
              }}
            >
              2h 40m
            </Text>
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
              <View
                style={[
                  {
                    borderBottomColor: "rgba(0,0,0,.3)",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 16,
                    lineHeight: 20,
                    color: "#2E3E5C",
                    fontWeight: 200,
                    marginVertical: 5,
                  }}
                >
                  Sukabumi, Indonesia
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 12,
                    lineHeight: 15,
                    color: "#96823D",
                    fontWeight: 200,
                    marginVertical: 5,
                  }}
                >
                  No receipt : SCP6653728497
                </Text>
              </View>
              <View
                style={[
                  {
                    borderBottomColor: "rgba(0,0,0,.3)",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 16,
                    lineHeight: 20,
                    color: "#2E3E5C",
                    fontWeight: 200,
                    marginVertical: 5,
                  }}
                >
                  2,50 USD
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 12,
                    lineHeight: 15,
                    color: "#96823D",
                    fontWeight: 200,
                    marginVertical: 5,
                  }}
                >
                  Postal fee
                </Text>
              </View>
              <View
                style={[
                  {
                    borderBottomColor: "rgba(0,0,0,.3)",
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 16,
                    lineHeight: 20,
                    color: "#2E3E5C",
                    fontWeight: 200,
                    marginVertical: 5,
                  }}
                >
                  Bali, Indonesia
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_900Black",
                    fontSize: 12,
                    lineHeight: 15,
                    color: "#96823D",
                    fontWeight: 200,
                    marginVertical: 5,
                  }}
                >
                  Parcel, 24kg
                </Text>
              </View>
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
              History
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
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontFamily: "Inter_900Black",
                      fontSize: 24,
                      lineHeight: 24,
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
                  Transit - Sending City
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
                  Jakarta, Indonesia
                </Text>
              </View>
              <Text
                style={[
                  {
                    color: "#7A809D",
                    fontFamily: "Inter_900Black",
                    fontSize: 12,
                    lineHeight: 24,
                  },
                ]}
              >
                00.00 PM
              </Text>
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
                      lineHeight: 24,
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
                  Transit - Sending City
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
                  Jakarta, Indonesia
                </Text>
              </View>
              <Text
                style={[
                  {
                    color: "#7A809D",
                    fontFamily: "Inter_900Black",
                    fontSize: 12,
                    lineHeight: 24,
                  },
                ]}
              >
                00.00 PM
              </Text>
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
                      lineHeight: 24,
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
                  Transit - Sending City
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
                  Jakarta, Indonesia
                </Text>
              </View>
              <Text
                style={[
                  {
                    color: "#7A809D",
                    fontFamily: "Inter_900Black",
                    fontSize: 12,
                    lineHeight: 24,
                  },
                ]}
              >
                00.00 PM
              </Text>
            </View>
          </View>
        </ActionSheet>
      </ImageBackground>
    </View>
  );
};

export default Tracking;
