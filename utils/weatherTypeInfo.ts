import { WeatherConditionType } from "@/types/weatherTypes";
import { ColorValue } from "react-native";

type WeatherIconEnum = 'zap' | 'cloud-rain' | 'umbrella' | 'cloud-snow' | 'sun' | 'cloud' | 'wind' | 'align-justify'

type WeatherInfoType = {
  icon: WeatherIconEnum;
  message: string;
  backgroundColor: ColorValue;
}

export const weatherTypeInfo: { [key in WeatherConditionType]: WeatherInfoType } = {
    Thunderstorm: {
        icon: 'zap',
        message: 'It could get noisy!',
        backgroundColor: '#000000'
      },
      Drizzle: {
        icon: 'cloud-rain',
        message: 'It might rain a little',
        backgroundColor: '#36454f'
      },
      Rain: {
        icon: 'umbrella',
        message: 'You will need an umbrella',
        backgroundColor: '#0000ff'
      },
      Snow: {
        icon: 'cloud-snow',
        message: 'Lets build a snowman!',
        backgroundColor: '#7f6065'
      },
      Clear: {
        icon: 'sun',
        message: 'It is perfect t-shirt weather',
        backgroundColor: '#e47200'
      },
      Clouds: {
        icon: 'cloud',
        message: 'You could live in the clouds',
        backgroundColor: '#807d7d'
      },
      Haze: {
        icon: 'wind',
        message: 'It might be a bit damp',
        backgroundColor: '#58586e'
      },
      Mist: {
        icon: 'align-justify',
        message: 'It might be hard to see',
        backgroundColor: '#3e3e37'
      }
}