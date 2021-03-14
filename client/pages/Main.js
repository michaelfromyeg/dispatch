import React, { useEffect, useState } from 'react';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
})

const Main = () => {


  const [pressed, setPressed] = useState(false)
  const [released, setReleased] = useState(null)
  const [authResult, setAuthResult] = useState(false)
  const [cancelled, setCancelled] = useState(false)
  const [timer, setTimer] = useState(null)
  const [dispatch, setDispatch] = useState(false)
  const [showPin, setShowPin] = useState(false)
  const [message, setMessage] = useState('')

  const handlePressed = () => {
    // update UI
    setPressed(true)
    setMessage('Waiting for button release')
  }

  const handleReleased = () => {
    setPressed(false)
    setAuthResult(false)
    setTimer(10)
    setShowPin(true)
    setMessage('Enter your pin!')
  }

  useEffect(() => {

    if (timer === 0) {
      setReleased(false)
      if (!authResult) {
        setDispatch(true)
        setShowPin(false)
        setMessage('Called for help!')
      }
      setTimer(null)
    }

    if (!timer) return

    const interval = setInterval(() => {
      setTimer(timer - 1)
      if (authResult) {
        setTimer(0)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  const validatePin = () => {
    setAuthResult(true)
    setTimer(null)
    setMessage('Call cancelled')
    setShowPin(false)
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main.js</Text>
      <Text>Timer: {timer + ""}</Text>
      <TouchableHighlight
        onPressIn={handlePressed}
        onPressOut={handleReleased}
        disabled={timer !== null}
      >
        <Text>Start walking</Text>
      </TouchableHighlight>
      <Text>Current emergency contact: 911</Text>
      {showPin &&
        <>
          <TextInput placeholder={"Pin"} />
          <Button onPress={validatePin} title={"Enter pin"} />
        </>
      }
      <Text>{message}</Text>
    </View>
  );
}

export default Main