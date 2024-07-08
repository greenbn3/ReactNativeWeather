import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-community/picker";

export default function unitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <SafeAreaView style={styles.unitSystem}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 14 }}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  unitSystem: {
    position: "absolute",
    height: 50,
    width: 100,
    top: 20,
    left: 10,
  },
});
