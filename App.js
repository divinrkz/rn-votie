import {useState} from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/Splash.screen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'
import 'react-native-gesture-handler';

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  setTimeout(() => {
      setShowSplash(false)
  }, 5000)

  if (showSplash) {
    return <SplashScreen />
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
