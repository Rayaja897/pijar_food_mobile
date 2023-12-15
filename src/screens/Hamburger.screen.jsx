import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Button, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HamburgerScreen({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const [snackBg, setSnackBg] = React.useState('');
  const [messageSnack, setMessageSnack] = React.useState('');
  const onDismissSnackBar = () => setVisible(false);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('users');
    setVisible(true);
    setMessageSnack('LogOut successfully');
    setSnackBg('#75b798');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.root}>
      <Snackbar
        wrapperStyle={{top: 0, position: 'absolute', zIndex: 999999}}
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
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Icon name="angle-left" size={25} color="#000" />
          <Text style={{color: '#000', fontSize: 15}}>Kembali</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.heading_1}>Menu</Text>
      <View
        style={{
          justifyContent: 'center',
          height: '80%',
          flexDirection: 'column',
        }}>
        <View style={{gap: 40, width: '100%', marginTop: 25}}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Button
              style={{
                backgroundColor: '#EFC81A',
                borderColor: '#E49B0F',
                borderWidth: 2,
              }}
              labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
              Login
            </Button>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Button
              style={{
                backgroundColor: '#EFC81A',
                borderColor: '#E49B0F',
                borderWidth: 2,
              }}
              labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
              Register
            </Button>
          </TouchableWithoutFeedback>
          <Button
            onPress={() => handleLogout()}
            style={{
              backgroundColor: '#EFC81A',
              borderColor: '#E49B0F',
              borderWidth: 2,
            }}
            labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
            Logout
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 15,
  },
  heading_1: {
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 10,
    textAlign: 'center',
    color: '#DAA520',
  },
});

export default HamburgerScreen;
