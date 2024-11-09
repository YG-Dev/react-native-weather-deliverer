import { Stack, Tabs } from 'expo-router'
import { WeatherContext } from '@/context/weatherContext'
import { useGetWeather } from '@/hooks/useGetWeather'
import ErrorItem from '@/components/ErrorItem'

export default function RootLayout() {
  const [, error, weather] = useGetWeather()

  if (error) {
    return <ErrorItem />
  }

  return (
    <WeatherContext.Provider value={weather}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </WeatherContext.Provider>
  )
}
