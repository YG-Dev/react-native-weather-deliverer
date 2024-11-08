import { View, Text, StyleSheet } from 'react-native'

type RowTextProps = {
  messageOne: string
  messageTwo: string
  containerStyles: { [key: string]: string | number }
  messageOneStyles: { [key: string]: string | number }
  messageTwoStyles: { [key: string]: string | number }
}

const RowText = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles
}: RowTextProps) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
