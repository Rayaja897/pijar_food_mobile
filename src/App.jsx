/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import {PaperProvider, Searchbar, Text} from 'react-native-paper';

function App() {
  const [text, setText] = React.useState('');

  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.root}>
          <Searchbar
            label="Search Pasta, Bread, etc"
            value={text}
            style={styles.searchBox}
            mode="outlined"
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
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    height: 800,
    padding: 20,
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
