import React from 'react';
import {useSelector} from 'react-redux';

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
  const [text, setText] = React.useState(null);
  const {users} = useSelector(state => state.auth);
  React.useEffect(() => {
    console.log(users);
  }, []);

  const menuCategory = [
    {
      icons: (
        <Image
          source={require('../assets/icon-1.png')}
          style={{width: 64, height: 64}}
        />
      ),
      category: 'soup',
      label: 'Soup',
    },
    {
      icons: (
        <Image
          source={require('../assets/icon-2.png')}
          style={{width: 64, height: 64}}
        />
      ),
      category: 'chicken',
      label: 'Chicken',
    },
    {
      icons: (
        <Image
          source={require('../assets/icon-3.png')}
          style={{width: 64, height: 64}}
        />
      ),
      category: 'seafood',
      label: 'Seafood',
    },
    {
      icons: (
        <Image
          source={require('../assets/icon-4.png')}
          style={{width: 64, height: 64}}
        />
      ),
      category: 'dessert',
      label: 'Dessert',
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          height: 65,
          backgroundColor: '#EFC81A',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}>
        <View style={{position: 'absolute', left: 20, top: 15}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Hamburger')}>
            <Image
              source={require('../assets/hamburger-menu.png')}
              style={{height: 30, width: 30}}></Image>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Image
            source={require('../assets/mama-logo-removebg.png')}
            style={{height: 70, width: 70}}></Image>
        </View>
        <View style={{position: 'absolute', right: 20, top: 15}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/mama-profile.png')}
              style={{height: 30, width: 30}}></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
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
        {text ? (
          <View style={{backgroundColor: '#e5fcf5'}}>
            {recipeList
              .filter(item => item.title.toLowerCase().includes(text))
              .map((item, key) => (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={() => navigation.navigate('Detail Recipe', item)}>
                  <View style={styles.resultContainer}>
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        resizeMode: 'cover',
                        borderRadius: 10,
                        objectFit: 'cover',
                      }}
                      source={{uri: item.image}}
                    />
                    <View>
                      <Text
                        style={{
                          color: '#666666',
                          fontSize: 16,
                          fontWeight: 800,
                        }}>
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
          </View>
        ) : null}

        {/* start popular for you */}
        <Text style={styles.heading_1}>Popular for You</Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {menuCategory.map((item, key) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                navigation.navigate('Category', item);
              }}>
              <View>
                {item.icons}
                <Text style={{textAlign: 'center', fontWeight: 800}}>
                  {item.label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>

        {/* end of popular for you */}

        {/* start of new recipes */}
        <Text style={styles.heading_1}>New Recipes</Text>

        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', gap: 20}}>
            {recipeList
              ?.filter(item => item.isNew)
              .slice(0, 5)
              .map((item, key) => (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={() => navigation.navigate('Detail Recipe', item)}>
                  <View style={{borderRadius: 10, marginTop: 15}}>
                    <ImageBackground
                      source={{uri: item.image}}
                      resizeMode="cover"
                      imageStyle={{borderRadius: 10}}
                      style={{
                        height: 160,
                        width: 130,
                        padding: 10,
                        justifyContent: 'flex-end',
                        objectFit: 'cover',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: '#fff',
                          fontSize: 15,
                          fontWeight: 500,
                          textShadowColor: 'rgba(0, 0, 0, 0.75)',
                          textShadowOffset: {width: -1, height: 1},
                          textShadowRadius: 10,
                        }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                        <Image source={require('../assets/icon-star.png')} />
                        <Text
                          style={{
                            color: '#fff',
                            textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: {width: -1, height: 1},
                            textShadowRadius: 10,
                          }}>
                          {item.rating}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
        </ScrollView>
        {/* end of new recipes */}

        {/* start of popular recipes */}
        <Text style={styles.heading_1}>Popular Recipes</Text>

        <View></View>
        <View style={{paddingBottom: 90}}>
          {recipeList
            ?.filter(item => item.isPopular)
            .slice(0, 8)
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
                      objectFit: 'cover',
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
        </View>
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
    backgroundColor: '#D3D3D3',
  },
  heading_1: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 800,
  },
  resultContainer: {
    padding: 10,
    flexDirection: 'row',
    gap: 15,
  },
});

export default HomeScreen;
