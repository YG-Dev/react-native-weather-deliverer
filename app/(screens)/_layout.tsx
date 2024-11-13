import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { appColors } from '@/utils/colors'

export default function ScreensLayout() {
  const getIconColor = (color: string, isFocused: boolean) =>
    isFocused ? color : black

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: white,
        tabBarInactiveTintColor: black,
        tabBarStyle: {
          backgroundColor: textPrimary
        }
      }}
    >
      <Tabs.Screen
        name="CurrentWeather"
        options={{
          tabBarLabel: 'Current',
          tabBarIcon: ({ focused, color }) => (
            <Feather
              name="droplet"
              size={25}
              color={getIconColor(color, focused)}
            />
          )
        }}
      />
      <Tabs.Screen
        name="UpcomingWeather"
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ focused, color }) => (
            <Feather
              name="clock"
              size={25}
              color={getIconColor(color, focused)}
            />
          )
        }}
      />
      <Tabs.Screen
        name="City"
        options={{
          tabBarLabel: 'City',
          tabBarIcon: ({ focused, color }) => (
            <Feather
              name="home"
              size={25}
              color={getIconColor(color, focused)}
            />
          )
        }}
      />
    </Tabs>
  )
}

const { textPrimary, white, black } = appColors
