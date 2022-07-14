import { View, StyleSheet, TouchableOpacity,Text, Dimensions, ImageBackground, Image, Alert ,TextInput, ScrollView, FlatList  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";
import { addItems } from "../redux/shrimpSlice";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const dataMonth = [
  {id: 1, image: images.month1, size: 0},
  {id: 2, image: images.month2, size: 0},
  {id: 3, image: images.month3, size: 0},
  {id: 4, image: images.month4, size: 0},
  {id: 5, image: images.month5, size: 0},
  {id: 6, image: images.month6, size: 0},
  {id: 7, image: images.month7, size: 0},
  {id: 8, image: images.month8, size: 0},
  {id: 9, image: images.month9, size: 0},
  {id: 10, image: images.month10, size: 0},
  {id: 11, image: images.month11, size: 0},
  {id: 12, image: images.month12, size: 0},
]

const Home = ({route, navigation}) => {
  const shrimp = useSelector(state => state.shrimp);
  const dispatch = useDispatch();
  const [monthSize, setMonthSize] = useState(dataMonth);
  
  const onClickSaveButton = () => {
    const list = [...monthSize];
    dispatch(addItems(list));
  }

  const onChangeValueSize = (val, index) => {
    const list = [...monthSize];
    list[index].size = val;
    setMonthSize([...list]);
  }

  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
        <FlatList 
          data={dataMonth}
          renderItem={({item, index}) => (
            <View style={appStyle.buttonView} key={item.id}>
              <Image source={item.image} style={appStyle.backStyle}/>
              <TextInput
                style={appStyle.input}
                onChangeText={(value) => onChangeValueSize(value, index)}
                value={monthSize[index].size.toString()}
                keyboardType="numeric"
              />
            </View>
          )}
        />
        <TouchableOpacity onPress={onClickSaveButton}>
          <Image source={images.save} style={appStyle.saveButton} />
        </TouchableOpacity>
    </ImageBackground>
  );
};


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  turnView: {
    position: 'absolute',
    top: '5%',
    right: '0%',
    width: windowWidth * 0.2,
    marginRight: 10,
  },
  input: {
    height: 60,
    width: windowWidth * 0.6,
    marginLeft: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  turn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  turnText: {
    fontSize: windowWidth > 640 ? 50 : 30,
    color: 'black',
    fontWeight: 'bold',
  },
  buyImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  },
  buttonView: {
    width: '80%',
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  backStyle: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'contain',
  },
  saveButton: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  }
});

export default Home;