import { useGetWeather } from '@/hooks/useGetWeather'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'

export default function Index() {
  const [loading, error, weather] = useGetWeather()
  const { container } = styles

  if (weather) console.log('weather: ', weather)
  if (loading) {
    return (
      <View style={container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }

  return (
    <View style={container}>
      <Text>WElcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
