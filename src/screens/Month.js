import { View, StyleSheet, TouchableOpacity,Text, Dimensions, ImageBackground, Image, Alert ,TextInput  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";
import { addItems } from "../redux/shrimpSlice";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Home = ({route, navigation}) => {
  const {idItem} = route.params;
  const shrimp = useSelector(state => state.shrimp);
  const dispatch = useDispatch();
  const [number, onChangeNumber] = useState(null);
  const [number1, onChangeNumber1] = useState(null);
  const [number2, onChangeNumber2] = useState(null);
  
  const onClickSaveButton = () => {
    const item = {id: idItem, el1: number , el2: number1, el3: number2};
    dispatch(addItems(item));
  }


  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <View style={appStyle.buttonView}>
        <Image source={images.element1} style={appStyle.buyImage} />
        <TextInput
          style={appStyle.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Your Value"
          keyboardType="numeric"
        />
      </View>
      <View style={appStyle.buttonView}>
        <Image source={images.element2} style={appStyle.buyImage} />
        <TextInput
          style={appStyle.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Your Value"
          keyboardType="numeric"
        />
      </View>
      <View style={appStyle.buttonView}>
        <Image source={images.element3} style={appStyle.buyImage} />
        <TextInput
          style={appStyle.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Your Value"
          keyboardType="numeric"
        />
      </View>
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
    width: windowWidth * 0.8,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
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
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  backStyle: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    margin: 10,
  },
  buttonStyle: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'contain',
  },
  saveButton: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  }
});

export default Home;