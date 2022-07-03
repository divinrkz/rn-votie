import * as React from 'react';
import { View, Text, StyleSheet, TextInput,Pressable } from 'react-native';
import * as SecureStore from 'expo-secure-store'

export default function Login({navigation}) {

    const [form, setForm] = React.useState({
        email: '',
        password: ''
    })

    function handleChange(evt, val) {
        setForm({
          ...form,
          [evt]: val
        });
        console.log(form)
      }

    const loginUser = async () => {
        const response = await fetch('http://192.168.0.17:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const {token} = await response.json()
        if (token) {
            await SecureStore.setItemAsync('auth-token', token)
            navigation.navigate('Home')
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={{fontSize:30, marginVertical:15}}>Login</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              marginVertical: 8,
              border: '1px solid grey',
              borderWidth: 1,
              padding: 12,
              width: '80%',
              borderRadius: 15,
            }}>
            <TextInput placeholder="Email" 
                         value={form.email}
                         onChangeText={tex => handleChange('email', tex)}
                  defaultValue={form.email}/>
          </View>
          <View
            style={{
              marginVertical: 8,
              border: '1px solid grey',
              borderWidth: 1,
              padding:12,
              width: '80%',
              borderRadius: 15,
            }}>
            <TextInput placeholder="Password"    value={form.password}
                         onChangeText={tex => handleChange('password', tex)} />
          </View>
          <Pressable style={{backgroundColor:'#ba0707', paddingHorizontal:20, paddingVertical:10, borderRadius:7}}
          onPress={loginUser}>
          <Text style={{color:'white', fontWeight:'600', fontSize:18}}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c3370',
    height: '100%',
  },
  formContainer: {
    backgroundColor: '#fff',
    height: '45%',
    width: '95%',
    marginTop: 250,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});