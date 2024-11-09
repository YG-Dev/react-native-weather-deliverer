export type WeatherConditionType = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clear' | 'Clouds' | 'Haze' | 'Mist'

export type CityData = {
    name: string
    country: string
    population: number
    sunrise: number
    sunset: number
}

export type ListItemData = {
    dt_txt: string 
    main: {
        temp: number
        feels_like: number
        temp_max: number
        temp_min: number
    }
    weather: {
        main: WeatherConditionType;
        description: string;
    }[]
}

export type WeatherData = {
    list: ListItemData[]
    city: CityData
  }
  