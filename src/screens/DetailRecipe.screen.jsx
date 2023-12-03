import React from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Linking,
  SectionList
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function DetailRecipeScreen({navigation, route}) {
  const [bodyView, setBodyView] = React.useState('ingredients');
  const {image, title, ingridients, youtube, made} = route.params;

  return (
    <ScrollView>
      {/* header */}
      <View>
        <ImageBackground
          source={{uri: image }}
          resizeMode="cover"
          style={{height: 400, padding: 15}}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Icon name="angle-left" size={25} color="#fff" />
              <Text style={{color: '#fff', fontSize: 15}}>Kembali</Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              padding: 20,
              paddingBottom: 70,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '800',
                fontSize: 32,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
              }}>
              {title}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
                fontSize: 16,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 4,
              }}>
              {made}
            </Text>
          </View>
        </ImageBackground>
      </View>
      {/* Body */}
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: -35,
          minHeight: 500,
          borderRadius: 25,
          padding: 15,
          paddingTop: 25,
        }}>
        {/* header switch */}
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={() => setBodyView('ingredients')}
            labelStyle={{
              fontSize: 20,
              ...(bodyView === 'ingredients'
                ? {
                    color: '#18172B',
                    paddingBottom: 4,
                    borderBottomColor: '#EEC302',
                    borderBottomWidth: 2,
                  }
                : {color: '#666666'}),
            }}>
            Ingredients
          </Button>
          <Button
            onPress={() => setBodyView('video step')}
            labelStyle={{
              fontSize: 20,
              ...(bodyView === 'video step'
                ? {
                    color: '#18172B',
                    paddingBottom: 4,
                    borderBottomColor: '#EEC302',
                    borderBottomWidth: 2,
                  }
                : {color: '#666666'}),
            }}>
            Video Step
          </Button>
        </View>

        {/* body view */}
        {bodyView === 'ingredients' ? (
          <View
            style={{
              backgroundColor: '#FAF7ED',
              marginTop: 20,
              padding: 15,
              borderRadius: 8,
            }}>
            <Text style={{color: '#666666'}}>{ingridients}</Text>
          </View>
        ) : null}

        {bodyView === 'video step' ? (
          <View style={{marginTop: 20}}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL(youtube?.link)}>
              <View
                style={{
                  backgroundColor: '#FAF7ED',
                  borderRadius: 10,
                  padding: 10,
                  flexDirection: 'row',
                  gap: 20,
                }}>
                <Icon name="play-circle" size={40} color="#EEC302" />

                <View>
                  <Text style={{fontWeight: 'bold'}}>{youtube?.title}</Text>
                  <Text style={{color: '#B0B0B0'}}>{youtube?.link}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

export default DetailRecipeScreen;
