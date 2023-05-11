import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,TextInput,TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech'
import { useState } from 'react';

export default function App() {

  const [thingsToSay,setThingsToSay]=useState("My name is Aung Ko . I am react native Developer");

  // const thingsToSay="My name is Aung Ko . I am react native Developer";

  const speak=()=>{
    Speech.speak(thingsToSay)
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{thingsToSay}</Text> */}
      <TextInput placeholder='Type To Speak' multiline onChangeText={setThingsToSay} value={thingsToSay} style={{width:'90%',height:'20%',borderWidth:1,backgroundColor:'orange'}}/>
      <TouchableOpacity style={{marginTop:20,width:150,height:50,backgroundColor:'green',borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={speak}>
        <Text>Voice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'black',
    marginTop:10,
    padding:10
  }
});
