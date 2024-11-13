import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View
} from 'react-native'
import moment from 'moment'
import IconText from '../../components/IconText'
import { useWeatherContext } from '@/hooks/useWeatherContext'
import { appColors } from '@/utils/colors'

const City = () => {
  const { name, country, population, sunrise, sunset } =
    useWeatherContext()?.city

  const {
    container,
    cityName,
    countryName,
    cityText,
    populationText,
    populationWrapper,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  return (
    <SafeAreaView style={container}>
      <Text style={[cityText, cityName]}>{name}</Text>
      <Text style={[cityText, countryName]}>{country}</Text>
      <View style={[rowLayout, populationWrapper]}>
        <IconText
          iconName="user"
          iconColor={textPrimary}
          bodyText={`Population: ${population}`}
          bodyTextStyles={populationText}
        />
      </View>
      <View style={[rowLayout, riseSetWrapper]}>
        <IconText
          iconName="sunrise"
          iconColor={textPrimary}
          bodyText={moment(sunrise).format('h:mm a')}
          bodyTextStyles={riseSetText}
        />
        <IconText
          iconName="sunset"
          iconColor={textPrimary}
          bodyText={moment(sunset).format('h:mm a')}
          bodyTextStyles={riseSetText}
        />
      </View>
    </SafeAreaView>
  )
}

const { primary, textPrimary } = appColors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 20,
    backgroundColor: primary
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: textPrimary
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: textPrimary
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: textPrimary
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
