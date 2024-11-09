import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../../components/RowText'
import { weatherTypeInfo } from '@/utils/weatherTypeInfo'
import { useContext } from 'react'
import { WeatherContext } from '@/context/weatherContext'
import { WeatherData } from '@/types/weatherTypes'
import { useWeatherContext } from '@/hooks/useWeatherContext'

export default function CurrentWeather() {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = useWeatherContext().list[0]
  const weatherCondition = weather[0].main

  const {
    wrapper,
    container,
    temperature,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherTypeInfo[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temperature}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne="High: 8"
          messageTwo="Low: 6"
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne="It's sunny"
        messageTwo={weatherTypeInfo['Thunderstorm'].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})