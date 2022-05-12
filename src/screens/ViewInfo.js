import { View, StyleSheet, Dimensions, ImageBackground, Image, Text ,FlatList,ActivityIndicator,Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const dataMonth = [{id: 1, image: images.month1},{id: 2, image: images.month2} ,{id:3, image: images.month3},{id: 4, image: images.month4},{id:5, image: images.month5},{id: 6, image: images.month6},{id: 7, image: images.month8},{id:8, image: images.month8},{id: 9, image: images.month9},{id: 10, image: images.month10},{id: 11, image: images.month11},{id: 12, image: images.month12}];
const numCol = 2 ;

const Home = () => {
  const navigation = useNavigation();

  const view = useSelector(state => state.view);

  useEffect(() => {
    if(view.length === 0){
      Alert.alert("Please input your shrimp information!, and Save!")
    }
  },[]);

  return view.length !== 0 ? (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <FlatList data={dataMonth} scrollEnabled={true} numColumns={numCol} renderItem={({item, index}) => (
        <View style={appStyle.monthView} key={item.id}>
          <Image source={item.image} style={appStyle.saveButton} />
          <View style={appStyle.turn}>
            <Image source={images.element1} style={appStyle.buyImage}/>
            <Text style={appStyle.turnText}>{`${view[index].el1} cm`}</Text>
          </View>
          <View style={appStyle.turn}>
            <Image source={images.element2} style={appStyle.buyImage}/>
            <Text style={appStyle.turnText}>{`${view[index].el2} cm`}</Text>
          </View>
          <View style={appStyle.turn}>
            <Image source={images.element3} style={appStyle.buyImage}/>
            <Text style={appStyle.turnText}>{`${view[index].el3} cm`}</Text>
          </View>
        </View>
      )} />
    </ImageBackground>
  ): (<View style={appStyle.centerView}>
    <ActivityIndicator />
  </View>);
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
  centerView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  monthView: {
    width: windowWidth * 0.45,
    height: windowHeight * 0.3,
    margin: 10,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  turn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
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
    marginRight: 10,
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