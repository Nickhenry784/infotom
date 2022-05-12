import { View, StyleSheet, TouchableOpacity,Text, Dimensions, ImageBackground, Image, Alert ,FlatList  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {decrement} from '../redux/pointSlice';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";
import { restoreArray } from "../redux/shrimpSlice";
import { addArray, restore } from "../redux/viewSlice";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const dataMonth = [1,2,3,4,5,6];
const dataMonth2 = [7,8,9,10,11,12];
const numCol = 3 ;

const Home = () => {
  const navigation = useNavigation();
  const shrimp = useSelector(state => state.shrimp);
  const points = useSelector(state => state.points);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreArray());
    dispatch(restore());
  },[]);

  const onClickSaveButton = () => {
    if (points.value === 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrement());
    dispatch(addArray(shrimp));
  }

  const onClickViewInfoButton = () => {
    navigation.navigate("ViewInfo");
  }

  const onClickMonthButton = (id) => {
    navigation.navigate("Month", {idItem: id});
  }

  const onClickTurnButton = () => {
    navigation.navigate("BUY");
  }


  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <TouchableOpacity onPress={onClickTurnButton} style={appStyle.turnView}>
        <View style={appStyle.turn}>
          <Image source={images.element3} style={appStyle.buyImage}/>
          <Text style={appStyle.turnText}>{points.value}</Text>
        </View>
      </TouchableOpacity>
      <FlatList data={dataMonth} scrollEnabled={false} style={{marginTop: 50}} numColumns={numCol} renderItem={({item}) => (
        <TouchableOpacity
        key={item}
        onPress={() => onClickMonthButton(item)}>
          <ImageBackground source={images.lich} style={appStyle.backStyle}>
            <Text style={appStyle.turnText}>{item}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )} />
      <Image source={images.shrimp} style={appStyle.buttonStyle} />
      <FlatList data={dataMonth2} scrollEnabled={false} numColumns={numCol} renderItem={({item}) => (
        <TouchableOpacity
        key={item}
        onPress={() => onClickMonthButton(item)}>
          <ImageBackground source={images.lich} style={appStyle.backStyle}>
            <Text style={appStyle.turnText}>{item}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )} />
      <TouchableOpacity
            onPress={onClickSaveButton}>
              <Image source={images.save} style={appStyle.saveButton} />
      </TouchableOpacity>
      <TouchableOpacity
            onPress={onClickViewInfoButton}>
              <Image source={images.viewinfo} style={appStyle.saveButton} />
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