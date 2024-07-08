import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Weatherinfo({currentWeather}) {
const {main: {temp}} = currentWeather

  return (
    <View style={styles.Weatherinfo}>
        <Text> {temp} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Weatherinfo: {
        alignItems: 'center'
    }
})