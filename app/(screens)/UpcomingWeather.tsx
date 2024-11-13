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
import { appColors } from '@/utils/colors'

export default function UpcomingWeather() {
  const upcomingList = useWeatherContext()?.list

  const { container } = styles

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
      <FlatList
        data={upcomingList}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  )
}

const { primary } = appColors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // take default value from native iOS/Android component
    backgroundColor: primary
  }
})
