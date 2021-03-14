import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
  },
  logo: {
    width: 300,
    height: 200,
    margin: 30,
  }
})

const SetupWelcome = ({ navigation }) => {
  const onPressSetup = (e) => {
    navigation.navigate('SetupPin')
  }

  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Image style={styles.logo} source={require('../assets/images/logo.svg')} />
        <Button
          style={styles.button}
          onPress={onPressSetup}
          title="Get started"
          color="#9378FF"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
  );
}

export default SetupWelcome