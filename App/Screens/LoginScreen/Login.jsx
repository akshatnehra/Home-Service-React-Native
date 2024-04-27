import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../utils/Colors'

const Login = () => {
  return (
    <View>
      <Text style={styles.loginText} >Login</Text>
    </View>
  )
}

styles = StyleSheet.create({
    loginText : {
        fontSize: 20,
        color: colors.RED
    }
});


export default Login