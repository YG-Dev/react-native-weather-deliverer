import { WeatherData } from '@/types/weatherTypes'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

export const WeatherContext = createContext<WeatherData | null>(null)
