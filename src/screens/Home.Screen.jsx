import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import recipeList from '../data/recipe.json';

function HomeScreen({navigation}) {
  const [text, setText] = React.useState('');

  return (
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
              icons: (
                <Image
                  source={require('../assets/icon-1.png')}
                  style={{width: 64, height: 64}}
                />
              ),
              label: 'Soup',
            },
            {
              icons: (
                <Image
                  source={require('../assets/icon-2.png')}
                  style={{width: 64, height: 64}}
                />
              ),
              label: 'Chicken',
            },
            {
              icons: (
                <Image
                  source={require('../assets/icon-3.png')}
                  style={{width: 64, height: 64}}
                />
              ),
              label: 'Seafood',
            },
            {
              icons: (
                <Image
                  source={require('../assets/icon-4.png')}
                  style={{width: 64, height: 64}}
                />
              ),
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
              <TouchableWithoutFeedback
                key={key}
                onPress={() => navigation.navigate('Detail Recipe', item)}>
                <View style={{borderRadius: 10, marginTop: 15}}>
                  <ImageBackground
                    source={require('../assets/Dummy.jpg')}
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
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
        {/* end of new recipes */}

        {/* start of popular recipes */}
        <Text style={styles.heading_1}>Popular Recipes</Text>

        {recipeList
          ?.filter(item => item.isPopular)
          .map((item, key) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => navigation.navigate('Detail Recipe', item)}>
              <View style={{flexDirection: 'row', gap: 15, marginTop: 15}}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                  source={{uri: item.image}}
                />

                <View>
                  <Text
                    style={{color: '#666666', fontSize: 16, fontWeight: 800}}>
                    {item.title}
                  </Text>
                  <Text style={{color: '#B6B6B6'}}>{item.taste}</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <Image source={require('../assets/icon-star.png')} />
                    <Text style={{color: '#B6B6B6'}}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        {/* end of popular recipes */}
      </ScrollView>
    </SafeAreaView>
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

export default HomeScreen;
