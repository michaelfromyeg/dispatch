import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const styles = StyleSheet.create({
})

const SetupPin = ({ navigation }) => {
  const [scanned, setScanned] = useState(false)

  const showChoosePinLock = () => {
    setShowPinLock(true)
  }
  const showEnterPinLock = () => {}
  const clearPin = () => {}

  useEffect(() => {
    const isDeviceCompatible = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (compatible) {
        alert('Device is compatible!')
      } else {
        alert('Device missing hardware.')
      }

      const records = await LocalAuthentication.isEnrolledAsync();
      if (records) {
        alert('Device has records!')
      } else {
        alert('Device missing records')
      }
    }
    isDeviceCompatible()
  }, [])

  const handlePress = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setScanned(true)
      navigation.navigate('SetupEmergency')
    } else {
      alert('Fingerprint failed!')
    }
  }

  const handlePin = () => {
    navigation.navigate('SetupEmergency')
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SetupPin.js</Text>
      <Button title="Check fingerprint" onPress={handlePress} />
      <Text>Result: {scanned + ""}</Text>
      <TextInput placeholder={'Pin'} />
      <Button title="Check pin" onPress={handlePin} />
    </View>
  );
}

export default SetupPin