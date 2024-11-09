import { Stack, Tabs } from 'expo-router'
import { WeatherContext } from '@/context/weatherContext'
import { useGetWeather } from '@/hooks/useGetWeather'

export default function RootLayout() {
  const [, , weather] = useGetWeather()

  return (
    <WeatherContext.Provider value={weather}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </WeatherContext.Provider>
  )
}
