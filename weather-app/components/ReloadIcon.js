import { SafeAreaView, Platform, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ReloadIcon({ load }) {
  const reloadIconName =
    Platform.OS === "ios" ? "refresh-outline" : "refresh-sharp";
  return (
    <SafeAreaView style={styles.reloadIcon}>
      <Ionicons onPress={load} name={reloadIconName} size={24} color="black" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 80,
    right: 20,
  },
});
