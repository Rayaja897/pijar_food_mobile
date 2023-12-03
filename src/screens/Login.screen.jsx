import React from 'react';
import {Image, ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

function LoginScreen({navigation}) {
  return (
    <ScrollView>
      <Text
        style={{
          marginTop: 170,
          color: '#EFC81A',
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Welcome !
      </Text>
      <Text style={{color: '#999999', textAlign: 'center'}}>
        Log in to your exiting account.
      </Text>

      <View style={{padding: 25}}>
        <TextInput
          placeholder="E-Mail"
          style={{margin: 5}}
          mode="outlined"
          left={
            <TextInput.Icon
              icon={() => (
                <Image
                  source={require('../assets/mail.png')}
                  style={{width: 20, height: 20}}
                />
              )}
              iconColor="#22C55E"
            />
          }
        />
        <TextInput
          placeholder="Password"
          style={{margin: 5}}
          secureTextEntry
          mode="outlined"
          left={
            <TextInput.Icon
              icon={() => (
                <Image
                  source={require('../assets/lock.png')}
                  style={{width: 20, height: 20}}
                />
              )}
              iconColor="#22C55E"
            />
          }
        />

        <Button
          mode="contained"
          style={{
            margin: 5,
            marginTop: 30,
            borderRadius: 5,
            backgroundColor: '#EFC81A',
            padding: 3,
          }}
          onPress={() => console.log('Pressed')}>
          CREATE
        </Button>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 3,
            marginTop: 5,
          }}>
          <Text>Don’t have an account? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#EFC81A'}}>Sign Up</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
