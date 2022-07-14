import { View, StyleSheet, TouchableOpacity,Text, Dimensions, ImageBackground, Image, Alert ,FlatList  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {decrement} from '../redux/pointSlice';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Home = () => {
  const navigation = useNavigation();
  const shrimp = useSelector(state => state.shrimp);
  const points = useSelector(state => state.points);
  const dispatch = useDispatch();

  const onClickStartButton = () => {
    if (points.value === 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrement());
    navigation.navigate("Month");
  }

  const onClickViewInfoButton = () => {
    navigation.navigate("ViewInfo");
  }

  const onClickTurnButton = () => {
    navigation.navigate("BUY");
  }


  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <TouchableOpacity onPress={onClickTurnButton} style={appStyle.turnView}>
        <View style={appStyle.turn}>
          <Image source={images.fish} style={appStyle.buyImage}/>
          <Text style={appStyle.turnText}>{points.value}</Text>
        </View>
      </TouchableOpacity>
      <Image source={images.text} style={appStyle.buttonStyle} />
      <TouchableOpacity
            onPress={onClickStartButton}>
              <Image source={images.start} style={appStyle.saveButton} />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={onClickViewInfoButton}>
              <Image source={images.view} style={appStyle.saveButton} />
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
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  turnView: {
    position: 'absolute',
    top: '5%',
    right: '0%',
    width: windowWidth * 0.2,
    marginRight: 10,
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
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: windowHeight * 0.7,
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
    width: windowWidth * 0.6,
    height: windowWidth * 0.4,
    resizeMode: 'contain',
  },
  saveButton: {
    marginVertical: 10,
    width: windowWidth * 0.3,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  }
});

export default Home;