import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils/index";

const { PRIMARY_COLOR } = colors;

export default function Weatherinfo({ currentWeather }) {
  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <>
      <View style={styles.Weatherinfo}>
        <Text style={styles.textHeaders}> Weather Info for {`${name}\n`} </Text>
        <Text style={styles.textBody}> {`${description}\n`} </Text>
      </View>
      <View style={styles.Weatherinfo}>
        <Text>
          Current Temperature :
          <Text style={styles.textPrimary}> {`${temp}\u00B0`} </Text>
        </Text>

        <Text> Feels Like : {`${feels_like}\u00B0`}</Text>
        <Text> Today's High : {`${temp_max}\u00B0`}</Text>
        <Text> Today's Low : {`${temp_min}\u00B0`}</Text>
        <Image style={styles.weatherIcon} source={{ uri: iconURL }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Weatherinfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textHeaders: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  textBody: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  textPrimary: {
    color: PRIMARY_COLOR,
  },
});
