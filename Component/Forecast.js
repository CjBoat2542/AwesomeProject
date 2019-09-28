import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";

export default class Forecast extends React.Component{
    render(){
        console.log(this.props)
        return(
            <View style={styles.container}>
                <View style={styles.setB}>
                <Text style={styles.property}>{this.props.location}</Text>
                <Text style={styles.property}>{this.props.main}</Text>
                <Text style={styles.property}>Status : {this.props.description}</Text>
                <Text style={styles.property}>Temparature : {this.props.temp} °C</Text>
                <Text style={styles.property}>Temparature(max) : {this.props.temp_max} °C</Text>
                <Text style={styles.property}>Temparature(min) : {this.props.temp_min} °C</Text>
                <Text style={styles.property}>Wind speed : {this.props.wind} km/s</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    setB:{
        backgroundColor: '#234AAC', 
        alignItems: 'center',  
        opacity: 0.55,
    },
    container: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    backdrop:{
        width:'100%',
        height: '100%'
    },
    property:{
        fontSize:20,      
    }
    

  });