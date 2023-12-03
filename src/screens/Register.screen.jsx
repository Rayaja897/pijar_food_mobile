import React from 'react';
import {Image, ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

function RegisterScreen({navigation}) {
  return (
    <ScrollView>
      <Text
        style={{
          marginTop: 90,
          color: '#EFC81A',
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Let’s Get Started !
      </Text>
      <Text style={{color: '#999999', textAlign: 'center'}}>
        Create new account to access all feautures
      </Text>

      <View style={{padding: 25}}>
        <TextInput
          placeholder="Name"
          style={{margin: 5}}
          mode="outlined"
          left={
            <TextInput.Icon
              icon={() => (
                <Image
                  source={require('../assets/user.png')}
                  style={{width: 20, height: 20}}
                />
              )}
              iconColor="#22C55E"
            />
          }
        />
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
          placeholder="Phone Number"
          style={{margin: 5}}
          mode="outlined"
          keyboardType="phone-pad"
          left={
            <TextInput.Icon
              icon={() => (
                <Image
                  source={require('../assets/phone.png')}
                  style={{width: 20, height: 20}}
                />
              )}
              iconColor="#22C55E"
            />
          }
        />
        <TextInput
          placeholder="Create New Password"
          style={{margin: 5}}
          secureTextEntry
          mode="outlined"
          left={
            <TextInput.Icon
              icon={() => (
                <Image
                  source={require('../assets/unlock.png')}
                  style={{width: 20, height: 20}}
                />
              )}
              iconColor="#22C55E"
            />
          }
        />
        <TextInput
          placeholder="Confirm New Password"
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
          <Text>Already have account? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#EFC81A'}}>Log in Here</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegisterScreen;
