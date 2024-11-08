import { Feather } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'

type IconTextProps = {
  iconName: string
  iconColor: string
  bodyText: string
  bodyTextStyles: { [key: string]: string | number }
}

const IconText = ({
  iconName,
  iconColor,
  bodyText,
  bodyTextStyles
}: IconTextProps) => {
  const { textTheme, container } = styles
  return (
    <View style={container}>
      <Feather name={iconName as any} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})
