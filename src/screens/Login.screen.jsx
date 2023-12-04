import React from 'react';
import {Image, ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button, Snackbar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [snackBg, setSnackBg] = React.useState('');
  const [messageSnack, setMessageSnack] = React.useState('');

  const onDismissSnackBar = () => setVisible(false);

  const handleLogin = () => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(async querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });
        if (tempData.length === 0) {
          setVisible(true);
          setMessageSnack('User not found');
          setSnackBg('#842029');
        } else {
          if (tempData[0]?._data?.password === password) {
            setVisible(true);
            setMessageSnack('Login Success');
            setSnackBg('#75b798');

            await AsyncStorage.setItem(
              'users',
              JSON.stringify(tempData[0]._data),
            );
            setTimeout(() => {
              navigation.navigate('Home');
            }, 2000);
          } else {
            setVisible(true);
            setMessageSnack('Password incorrect');
            setSnackBg('#842029');
          }
        }
      })
      .catch(() => {
        setVisible(true);
        setMessageSnack('Something wrong in our server');
        setSnackBg('#842029');
      });
  };

  return (
    <ScrollView>
      <Snackbar
        wrapperStyle={{top: 0}}
        style={{backgroundColor: snackBg}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'X',
          onPress: () => {
            onDismissSnackBar();
          },
        }}>
        <Text style={{color: 'white'}}>{messageSnack}</Text>
      </Snackbar>
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
          onChangeText={value => setEmail(value)}
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
          onChangeText={value => setPassword(value)}
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
          onPress={handleLogin}>
          Login
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
