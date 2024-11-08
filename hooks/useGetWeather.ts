import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location'
import { useState, useEffect } from 'react'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)
  const [weather, setWeather] = useState(null)
  const [lat, setLat] = useState<number>()
  const [lon, setLon] = useState<number>()

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
      )
      const data = res.json()
      setWeather(data)
    } catch (err) {
      setError(
        `Could not fetch weather${err instanceof Error ? ': ' + err.message : ''}`
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleLocation = async () => {
      let { status } = await requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await getCurrentPositionAsync()
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    }

    handleLocation()
  }, [lat, lon])

  return [loading, error, weather]
}
