import { View, StyleSheet, TouchableOpacity,Text, Dimensions, ImageBackground, Image, Alert ,TextInput, ScrollView, FlatList, ActivityIndicator  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Home = ({route, navigation}) => {
  const shrimp = useSelector(state => state.shrimp);
  const dispatch = useDispatch();
  

  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
        {shrimp.length === 0 ? <ActivityIndicator size="large" /> : <FlatList 
          data={shrimp}
          renderItem={({item, index}) => (
            <View style={appStyle.buttonView} key={item.id}>
              <Image source={item.image} style={appStyle.backStyle}/>
              <Text style={appStyle.turnText}>{`${item.size} cm`}</Text>
            </View>
          )}
        />}
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
    fontSize: 50 ,
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  backStyle: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: 'contain',
    marginHorizontal: 20,
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