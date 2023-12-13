import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import {Text, Button, TextInput, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import recipeList from '../data/recipe.json';

function ProfileScreen({navigation}) {
  const [bodyView, setBodyView] = React.useState('my recipe');
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('../assets/banner.jpg')}
          resizeMode="cover"
          style={{
            width: '100vh',
            height: 125,
            padding: 5,
            resizeMode: 'cover',
          }}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Icon name="angle-left" size={25} color="#000" />
              <Text style={{color: '#000', fontSize: 15}}>Kembali</Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              position: 'absolute',
              padding: 70,
              marginLeft: 40,
            }}>
            <Image
              source={require('../assets/mama-profile.png')}
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                bottom: 10,
                backgroundColor: '#EFC81A',
              }}></Image>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,
                fontSize: 20,
                color: 'black',
              }}>
              Rayhan ilham
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              paddingTop: 260,
              marginLeft: 0,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => setBodyView('my recipe')}
                labelStyle={{
                  fontSize: 20,
                  ...(bodyView === 'my recipe'
                    ? {
                        color: '#18172B',
                        paddingBottom: 4,
                        borderBottomColor: '#EEC302',
                        borderBottomWidth: 2,
                      }
                    : {color: '#666666'}),
                }}>
                My Recipe
              </Button>
              <Button
                onPress={() => setBodyView('saved recipe')}
                labelStyle={{
                  fontSize: 20,
                  ...(bodyView === 'saved recipe'
                    ? {
                        color: '#18172B',
                        paddingBottom: 4,
                        borderBottomColor: '#EEC302',
                        borderBottomWidth: 2,
                      }
                    : {color: '#666666'}),
                }}>
                Saved Recipe
              </Button>
              <Button
                onPress={() => setBodyView('liked recipe')}
                labelStyle={{
                  fontSize: 20,
                  ...(bodyView === 'liked recipe'
                    ? {
                        color: '#18172B',
                        paddingBottom: 4,
                        borderBottomColor: '#EEC302',
                        borderBottomWidth: 2,
                      }
                    : {color: '#666666'}),
                }}>
                Liked Recipe
              </Button>
            </View>
            {/* body view */}
            {bodyView === 'my recipe' ? (
              <View style={{paddingBottom: 25}}>
                {recipeList
                  ?.filter(item => item.isNew)
                  .slice(0, 2)
                  .map((item, key) => (
                    <TouchableWithoutFeedback
                      key={key}
                      onPress={() =>
                        navigation.navigate('Detail Recipe', item)
                      }>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 15,
                          marginTop: 15,
                        }}>
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
                            <Image
                              source={require('../assets/icon-star.png')}
                            />
                            <Text style={{color: '#B6B6B6'}}>
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
              </View>
            ) : null}

            {bodyView === 'saved recipe' ? (
              <View style={{paddingBottom: 25}}>
                {recipeList
                  ?.filter(item => item.isPopular)
                  .slice(0, 3)
                  .map((item, key) => (
                    <TouchableWithoutFeedback
                      key={key}
                      onPress={() =>
                        navigation.navigate('Detail Recipe', item)
                      }>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 15,
                          marginTop: 15,
                        }}>
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
                            <Image
                              source={require('../assets/icon-star.png')}
                            />
                            <Text style={{color: '#B6B6B6'}}>
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
              </View>
            ) : null}

            {bodyView === 'liked recipe' ? (
              <View style={{paddingBottom: 25}}>
                {recipeList
                  ?.filter(item => item.isPopular)
                  .slice(0, 6)
                  .map((item, key) => (
                    <TouchableWithoutFeedback
                      key={key}
                      onPress={() =>
                        navigation.navigate('Detail Recipe', item)
                      }>
                      <View
                        style={{flexDirection: 'row', gap: 15, marginTop: 15}}>
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
                            <Image
                              source={require('../assets/icon-star.png')}
                            />
                            <Text style={{color: '#B6B6B6'}}>
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
              </View>
            ) : null}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
