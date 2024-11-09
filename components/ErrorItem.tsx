import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  const { container, errorHeading, errorSub } = styles

  return (
    <View style={container}>
      <Text style={errorHeading}>Sorry, something went wrong</Text>
      <Text style={errorSub}>
        Check your internet connection or try again later
      </Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorHeading: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
  },
  errorSub: {
    fontSize: 15,
    color: 'white',
    marginHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center'
  }
})

export default ErrorItem
