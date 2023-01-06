import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import spacing from "../config/spacing";
import { Ionicons } from "@expo/vector-icons";

const SearchField = () => {
  return (
    <View
      style={{
        borderRadius: spacing,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.white,
            fontSize: spacing * 1.7,
            padding: spacing,
            paddingLeft: spacing * 3.5,
          }}
          placeholder="Find Your Next Component..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: spacing,
          }}
          name="search"
          color={colors.light}
          size={spacing * 2}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});