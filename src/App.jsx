/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {PaperProvider, Searchbar, Text} from 'react-native-paper';

function App() {
  const [text, setText] = React.useState('');

  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView style={styles.root}>
          <Searchbar
            placeholder="Search Pasta, Bread, etc"
            value={text}
            style={styles.searchBox}
            outlineStyle={{
              borderRadius: 15,
            }}
            onChangeText={text => setText(text)}
          />

          {/* start popular for you */}
          <Text style={styles.heading_1}>Popular for You</Text>

          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {[
              {
                icons: <Image source={require('./assets/icon-1.png')} />,
                label: 'Soup',
              },
              {
                icons: <Image source={require('./assets/icon-2.png')} />,
                label: 'Chicken',
              },
              {
                icons: <Image source={require('./assets/icon-3.png')} />,
                label: 'Seafood',
              },
              {
                icons: <Image source={require('./assets/icon-2.png')} />,
                label: 'Dessert',
              },
            ].map((item, key) => (
              <View key={key}>
                {item.icons}
                <Text style={{textAlign: 'center', fontWeight: 800}}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>

          {/* end of popular for you */}

          {/* start of new recipes */}
          <Text style={styles.heading_1}>New Recipes</Text>

          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row', gap: 20}}>
              {[...new Array(8)].map((items, key) => (
                <View style={{borderRadius: 10, marginTop: 15}} key={key}>
                  <ImageBackground
                    source={require('./assets/Dummy.jpg')}
                    resizeMode="cover"
                    imageStyle={{borderRadius: 10}}
                    style={{
                      height: 160,
                      width: 130,
                      padding: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 15, fontWeight: 500}}>
                      Banana {'\n'}Lemonilo
                    </Text>
                  </ImageBackground>
                </View>
              ))}
            </View>
          </ScrollView>
          {/* end of new recipes */}

          {/* start of popular recipes */}
          <Text style={styles.heading_1}>Popular Recipes</Text>

          {[...new Array(8)].map((items, key) => (
            <View
              style={{flexDirection: 'row', gap: 15, marginTop: 15}}
              key={key}>
              <Image source={require('./assets/Dummy-2.png')} />

              <View>
                <Text style={{color: '#666666', fontSize: 16, fontWeight: 800}}>
                  Teriyaki Salmon
                </Text>
                <Text style={{color: '#B6B6B6'}}>spicy, salted</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Image source={require('./assets/icon-star.png')} />
                  <Text style={{color: '#B6B6B6'}}>4.7</Text>
                </View>
              </View>
            </View>
          ))}
          {/* end of popular recipes */}
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 15,
  },
  searchBox: {
    backgroundColor: '#EFEFEF',
  },
  heading_1: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 800,
  },
});

export default App;
