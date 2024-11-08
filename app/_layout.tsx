import { Stack, Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

export default function RootLayout() {
  const { mainTint, inactiveTint, inactiveIcon } = {
    mainTint: 'tomato',
    inactiveTint: 'blue',
    inactiveIcon: 'black'
  }

  const getIconColor = (color: string, isFocused: boolean) =>
    isFocused ? color : inactiveIcon

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: mainTint,
        tabBarInactiveTintColor: inactiveTint,
        tabBarStyle: {
          backgroundColor: 'lightblue'
        }
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: 'Main' }} />
      <Tabs.Screen
        name="src/screens/CurrentWeather"
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
        name="src/screens/UpcomingWeather"
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
        name="src/screens/City"
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
