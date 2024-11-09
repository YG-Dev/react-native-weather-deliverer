import { useWeatherContext } from '@/hooks/useWeatherContext'
import { Href, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

export default function Index() {
  const router = useRouter()
  const weatherContext = useWeatherContext()

  const { container } = styles

  useEffect(() => {
    // If data is loaded
    if (weatherContext?.list) router.push('/CurrentWeather' as Href)
  }, [weatherContext])

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
