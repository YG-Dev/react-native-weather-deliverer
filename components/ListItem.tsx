import { Feather } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'
import { weatherTypeInfo } from '@/utils/weatherTypeInfo'
import { WeatherConditionType } from '@/types/weatherTypes'
import moment from 'moment'
import { appColors } from '@/utils/colors'

type ItemProps = {
  dt_txt: string
  min: number
  max: number
  condition: WeatherConditionType
}

const ListItem = ({ dt_txt, min, max, condition }: ItemProps) => {
  const { item, date, temp, dateTextWrapper } = styles
  return (
    <View style={item}>
      <Feather
        name={weatherTypeInfo[condition]?.icon}
        size={50}
        color={secondary}
      />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  )
}

export default ListItem

const { secondary, textPrimary, black } = appColors

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: black,
    backgroundColor: textPrimary
  },
  temp: {
    color: secondary,
    fontSize: 20
  },
  date: {
    color: secondary,
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
