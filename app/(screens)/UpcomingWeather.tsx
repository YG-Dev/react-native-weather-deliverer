import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../../components/ListItem'
import { useWeatherContext } from '@/hooks/useWeatherContext'
import { ListItemData } from '@/types/weatherTypes'

export default function UpcomingWeather() {
  const upcomingList = useWeatherContext().list

  const { container, image } = styles

  const renderItem = ({ item }: { item: ListItemData }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/images/upcoming-bg.jpg')}
        style={image}
      >
        <FlatList
          data={upcomingList}
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
