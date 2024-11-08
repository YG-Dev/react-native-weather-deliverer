import { WeatherContext } from '@/context/weatherContext'
import { WeatherData } from '@/types/weatherTypes'
import { useContext } from 'react'

export const useWeatherContext = () => {
  return useContext(WeatherContext) as WeatherData
}
