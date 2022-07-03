import * as React from 'react'
import { useEffect, useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as SecureStore from 'expo-secure-store'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/Login.screen';
import HomeScreen from '../screens/Home.screen';
import MakePollScreen from '../screens/MakePoll.screen';
import RegisterScreen from '../screens/Register.screen';
import { View, Text } from 'react-native';

const Tabs = createBottomTabNavigator()

export default function Navigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        async function getAuthToken() {
            const token = await SecureStore.getItemAsync('auth-token')
            if (token) {
                setIsLoggedIn(true)
            }
        }
        getAuthToken()
    }, [])

    if (!isLoggedIn) return <AuthNavigation />
    return <AppNavigation />
}


export function AuthNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            >
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}


export function AppNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            >
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Poll"
                component={MakePollScreen}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}