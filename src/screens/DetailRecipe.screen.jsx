import React from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Linking,
  Image,
} from 'react-native';
import {Text, Button, TextInput, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailRecipeScreen({navigation, route}) {
  const [bodyView, setBodyView] = React.useState('ingredients');
  const {image, title, ingridients, youtube, made, slug} = route.params;
  const [commentList, setCommentList] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [snackBg, setSnackBg] = React.useState('');
  const [messageSnack, setMessageSnack] = React.useState('');

  const onDismissSnackBar = () => setVisible(false);

  React.useEffect(() => {
    handleGetComment();
  }, []);

  const handleGetComment = async () => {
    // await AsyncStorage.removeItem('users');

    firestore()
      .collection('comments')
      .where('recipeSlug', '==', slug)
      .get()
      .then(querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });
        setCommentList(tempData);
      });
  };

  const handleComment = async () => {
    const user = await AsyncStorage.getItem('users');

    if (user) {
      firestore()
        .collection('comments')
        .add({
          name: JSON.parse(user).fullname,
          photo: 'https://i.pravatar.cc/300',
          recipeSlug: slug,
          message: message,
          created_at: new Date().getTime(),
        })
        .then(() => {
          setVisible(true);
          setMessageSnack('Comment successfully created');
          setSnackBg('#75b798');
          handleGetComment();
        });
    } else {
      setVisible(true);
      setMessageSnack('Please login first');
      setSnackBg('#842029');

      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }
  };

  return (
    <>
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
      <ScrollView>
        {/* header */}
        <View>
          <ImageBackground
            source={{uri: image}}
            resizeMode="cover"
            style={{height: 400, padding: 15}}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
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
            {/* <Button
            onPress={() => setBodyView('comments')}
            labelStyle={{
              fontSize: 20,
              ...(bodyView === 'comments'
                ? {
                    color: '#18172B',
                    paddingBottom: 4,
                    borderBottomColor: '#EEC302',
                    borderBottomWidth: 2,
                  }
                : {color: '#666666'}),
            }}>
            Comments
          </Button> */}
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

          {/* {bodyView === 'comments' ? (
          <View style={{marginTop: 20}}>
            <TextInput
              mode="outlined"
              multiline={true}
              numberOfLines={4}
              placeholder="Comment :"
              style={{backgroundColor: '#FAF7ED'}}
            />
          </View>
        ) : null} */}

          {/* comment view */}
          <View style={{marginTop: 20}}>
            <TextInput
              mode="outlined"
              multiline={true}
              numberOfLines={4}
              placeholder="Comment :"
              style={{backgroundColor: '#FAF7ED'}}
              onChangeText={value => setMessage(value)}
            />
          </View>
          <Button
            mode="contained"
            style={{
              margin: 5,
              marginTop: 30,
              borderRadius: 5,
              backgroundColor: '#EFC81A',
              padding: 3,
            }}
            onPress={handleComment}>
            Post Comment
          </Button>

          <Text>Comment :</Text>

          {commentList
            ?.sort(
              (next, prev) => prev?._data.created_at - next?._data.created_at,
            )
            .map((item, key) => (
              <View
                style={{flexDirection: 'row', gap: 20, marginTop: 15}}
                key={key}>
                <Image
                  source={{uri: item?._data.photo}}
                  height={40}
                  width={40}
                  borderRadius={100}
                />

                <View>
                  <Text style={{fontWeight: 'bold'}}>{item?._data.name}</Text>
                  <Text>{item?._data.message}</Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
}

export default DetailRecipeScreen;
