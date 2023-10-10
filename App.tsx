

import React,{useState} from 'react';

import {
 
  Button,

  StyleSheet,
  Text,
 
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState(0)
const [name, setName] = useState('Ani')
const [session, setSession] = useState({ number: 6, title: 'state' })
const [current, setCurrent] = useState(true)

const onClickHandler = () => {
  setName('Program with aliyan')
  setSession({ number: 7, title: 'Style'})
  setCurrent(false)

}
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        You clicked {count} times
       </Text>
      
      <Button title='click' onPress ={() => setCount(count + 5)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:   {
    color :'#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});


export default App;
