import { WeatherContext } from '@/context/weatherContext'
import { useGetWeather } from '@/hooks/useGetWeather'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'

export default function Index() {
  const [loading, error, weather] = useGetWeather()
  const { container } = styles
  console.log('weather', weather)
  if (weather?.list && !loading) {
    return (
      <WeatherContext.Provider value={weather}>
        <View style={container}>
          <Text>Welcome</Text>
        </View>
      </WeatherContext.Provider>
    )
  }

  return (
    <View style={container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
