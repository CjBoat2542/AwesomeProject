import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";
import Weather from './Component/Weather';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ZipCodeScreen from "./Component/ZipCodeScreen";
import WeatherScreen from "./Component/WeatherScreen";

const RootStack = createStackNavigator(
   {
     Weather: { screen: WeatherScreen },
     ZipCode: { screen: ZipCodeScreen },
   },
   {
    initialRouteName: 'Weather',
    initialRouteParams: {zipCode: '90110'},
   }
 );
  
 const App = createAppContainer(RootStack);
 export default App;