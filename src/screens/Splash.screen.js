import * as React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/splash.png')}  style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 50,
        height: 50
    }
})