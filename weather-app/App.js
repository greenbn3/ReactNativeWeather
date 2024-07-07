import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import * as Location from 'expo-location';
import React, {useEffect, useState} from 'react';

const WEATHER_API_KEY = 'c4120ec26e659695577bbcb70865ff3b'
const BASE_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)

  useEffect(() => {
    load()
  }, [])

  async function load() {

    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords

      const weatherURL = `${BASE_WEATHER}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherURL)

      const result = await response.json()
      //alert(result)

      if (response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }


      alert(`Latitude : ${latitude}, Longitude: ${longitude}`)

    } catch (error) {
      setErrorMessage(error.message)
    }
  }
    if(currentWeather) {
      const { 
        main : {temp},
      } = currentWeather
    return (
      <View style={styles.container}>
        <Text>{temp}</Text>
        <StatusBar style="auto" />
      </View>
    )} else {
      return (
        <View style={styles.container}>
          <Text>{errorMessage}</Text>
          <StatusBar style="auto" />
        </View>)
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
