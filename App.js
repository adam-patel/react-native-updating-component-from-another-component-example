import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function ButtonComponent({ changeText, date }) {
  console.log(`2. ${changeText} from inside Button Component`)
  // const date = '2021-09-01'
  return (
    <Button title="change text" onPress={() => changeText({ newtext: date })} />
  )

}

function SecondButton({ changeText }) {
  return (
    <Button
      title="change text again"
      onPress={() => changeText({ newtext: "different string" })}
    />
  )
}

function TextComponent({ text }) {
  console.log(`3. ${text} from inside Text Component`) //
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default function App() {
  console.log('1 .start')

  const [text, setText] = useState('default text'); // declared in the screen

  const changeText = ({ newtext }) => {
    setText(newtext)
    console.log(`4. ${text} just after changeText`)
  }

  return (
    <View style={styles.container}>
      <ButtonComponent changeText={changeText} date="565656" />
      <SecondButton changeText={changeText} />
      <TextComponent text={text} />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
});
