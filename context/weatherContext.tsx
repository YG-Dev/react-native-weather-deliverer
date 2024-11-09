import { WeatherData } from '@/types/weatherTypes'
import { createContext } from 'react'

export const WeatherContext = createContext<WeatherData | null>(null)
