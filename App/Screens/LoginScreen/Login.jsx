import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../utils/Colors'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loginImage} source={require('../../../assets/login.png')} />
      <View style={styles.bottomBox}>
        <View style={styles.headlineContainer}>
            <Text style={ styles.headlineText }>Let's Find 
                <Text style={ {fontWeight: 'bold'} }> Professional</Text>
            </Text> 
            <Text style={ styles.headlineText }>
                <Text style={ {fontWeight: 'bold'}}>Cleaning and repair </Text>
                Service
            </Text>
        </View>

        <View style={styles.headlineContainer}>
            <Text style={ styles.subHeadlineText }>Best App to find services near you which deliver you a professional service</Text>
        </View>
 
        <TouchableOpacity style={styles.button} onPress={()=>console.log("Clicked ")} >
            <Text style={{color: colors.VIOLET}}>Get Started</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    loginImage: {
        width: 260,
        height: 520,
        alignSelf: 'center',
        marginTop: '15%',
        borderColor: colors.BLACK,
        borderWidth: 4,
        borderRadius: 20
    },

    bottomBox: {
        backgroundColor: colors.VIOLET,
        width: '100%',
        height: '30%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        position: 'absolute',
        bottom: 0
    },

    headlineContainer: {
        display: 'flex',
        alignItems: 'center'
    },

    headlineText: {
        color: colors.WHITE,
        fontSize: 22,
    },

    subHeadlineText: {
        color: colors.WHITE,
        fontSize: 15,
        marginTop: 15,
        textAlign: 'center',
        fontWeight: '400'
    },

    button: {
        marginTop: 20,
        backgroundColor: colors.WHITE,
        color: colors.VIOLET,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center'
    }
});


export default Login