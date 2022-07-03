import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
export default function HomeScreen({navigation}) {
    const [polls, setPolls] = React.useState([])

    const getPolls = async () => {

        const response = await fetch('http://192.168.0.17:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await SecureStore.getItemAsync('auth-token')
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
    <View style={styles.votingContainer}>
      <View style={styles.cards}>
        <View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg',
              }}
            />
            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>
            <Pressable style={styles.voteBtn} onPress={()=>{
              navigation.navigate("Results")
            }}>
              <Text style={{ color:'#fff', fontWeight:'700' }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg',
              }}
            />
            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>
            <Pressable style={styles.voteBtn}>
              <Text style={{ color:'#fff', fontWeight:'700' }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://decider.com/wp-content/uploads/2022/02/The-Worst-Person-in-the-World.jpg?quality=75&strip=all&w=1200',
              }}
            />
            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>
            <Pressable style={styles.voteBtn}>
              <Text style={{ color:'#fff', fontWeight:'700' }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg',
              }}
            />
            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>
            <Pressable style={styles.voteBtn}>
              <Text style={{ color:'#fff', fontWeight:'700' }}>Vote</Text>
            </Pressable>
          </View>
        </View>
        <Text style={{fontWeight:'800', fontSize:16}}>You will view the results after voting</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  votingContainer: {
    width: '100%',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    borderRadius:10,
   shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  voteBtn: {
    backgroundColor: '#0C3370',
    fontWeight: '800',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  description: {
    marginHorizontal: 20,
    fontWeight: '800',
  },
});