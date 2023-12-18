/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store, persistor} from '../src/redux/store';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Screen
import HomeScreen from './screens/Home.Screen';
import DetailRecipeScreen from './screens/DetailRecipe.screen';
import LoginScreen from './screens/Login.screen';
import RegisterScreen from './screens/Register.screen';
import CategoryScreen from './screens/Category.screen';
import HamburgerScreen from './screens/Hamburger.screen';
import ProfileScreen from './screens/Profile.screen';
import EditProfileScreen from './screens/EditProfile.screen';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Detail Recipe"
                component={DetailRecipeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Category"
                component={CategoryScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Hamburger"
                component={HamburgerScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    </NavigationContainer>
  );
}

export default App;
