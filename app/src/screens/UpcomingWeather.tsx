import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../../../components/ListItem'

interface WeatherData {
  dt_txt: string
  main: {
    temp_max: number
    temp_min: number
  }
  weather: {
    main: string
  }[]
}

const DATA: WeatherData[] = [
  {
    dt_txt: '2024-10-29 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 4.33
    },
    weather: [{ main: 'Clear' }]
  },
  {
    dt_txt: '2022-04-13 12:00:00',
    main: {
      temp_max: 2.44,
      temp_min: 1.22
    },
    weather: [{ main: 'Clouds' }]
  },
  {
    dt_txt: '2023-11-11 12:00:00',
    main: {
      temp_max: 20.0,
      temp_min: 12.33
    },
    weather: [{ main: 'Rain' }]
  }
]

export default function UpcomingWeather() {
  const { container, image } = styles
  const renderItem = ({ item }: { item: WeatherData }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={container}>
      <Text>Upcoming weather</Text>
      <ImageBackground
        source={require('../../../assets/images/upcoming-bg.jpg')}
        style={image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // take default value from native iOS/Android component
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})
