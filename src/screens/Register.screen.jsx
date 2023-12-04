import React from 'react';
import {Image, ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Text, TextInput, Button, Snackbar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

function RegisterScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [snackBg, setSnackBg] = React.useState('');
  const [messageSnack, setMessageSnack] = React.useState('');

  const onDismissSnackBar = () => setVisible(false);

  const handleRegist = () => {
    if (password === password2) {
      firestore()
        .collection('users')
        .add({
          email,
          fullname,
          password,
          phone,
          created_at: new Date().getTime(),
        })
        .then(() => {
          setVisible(true);
          setMessageSnack('Register Successfully');
          setSnackBg('#75b798');
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2000);
        })
        .catch(() => {
          setVisible(true);
          setMessageSnack('Something wrong in our server');
          setSnackBg('#842029');
        });
    } else {
      setVisible(true);
      setMessageSnack('Password is not match');
      setSnackBg('#842029');
    }
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
          onChangeText={value => setFullname(value)}
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
          onChangeText={value => setEmail(value)}
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
          onChangeText={value => setPhone(value)}
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
          onChangeText={value => setPassword(value)}
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
          onChangeText={value => setPassword2(value)}
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
          onPress={handleRegist}>
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
