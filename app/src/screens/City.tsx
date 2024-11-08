import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View
} from 'react-native'
import IconText from '../../../components/IconText'

const City = () => {
  const {
    container,
    image,
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
      <ImageBackground
        source={require('../../../assets/images/city-bg.jpg')}
        style={image}
      >
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>
        <View style={[rowLayout, populationWrapper]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText="8000"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[rowLayout, riseSetWrapper]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText="10:46:58am"
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText="17:28:15pm"
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
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
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
