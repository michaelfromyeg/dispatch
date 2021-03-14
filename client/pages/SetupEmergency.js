import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
})

const SetupEmergency = ({ navigation }) => {

  const handleDone = () => {
    navigation.navigate('Main')
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SetupEmergency.js</Text>
      <TextInput placeholder={'Your full name'} />
      <TextInput placeholder={'Your contact number'} />
      <Text>If you wish to contact anyone else during a crisis</Text>
      <TextInput placeholder={'Emergency contact name'} />
      <TextInput placeholder={'Emergency contact number'} />
      <Button title="Done" onPress={handleDone} />
    </View>
  );
}

export default SetupEmergency