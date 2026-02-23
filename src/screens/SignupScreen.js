import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder='Username' />
      <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
      <Button title='Sign Up' onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    width: '100%',
  },
});

export default SignupScreen;