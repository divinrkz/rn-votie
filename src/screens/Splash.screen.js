import * as React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../../assets/splash.png')}  style={styles.image}/> */}
            <Text style={styles.title}>Votie</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B074E',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    title: {
        color: 'white',
        fontSize: 30,
        textTransform: 'uppercase',
        textDecorationLine: 'underline'
    }
})