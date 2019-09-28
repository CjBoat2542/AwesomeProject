import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated, ImageBackground } from "react-native";
import Forecast from "./Forecast";
export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forecast:{
                location:'-',
                main: '-',
                description: '-',
                temp: 0,
                temp_max:0,
                temp_min:0,
                wind:0,
            }
        }
    }
    
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((respose) => respose.json())
        .then((json) => {
            console.log(json)
                this.setState(
                {
                    forecast:{
                        location: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        temp_max: json.main.temp_max,
                        temp_min: json.main.temp_min,
                        wind: json.wind.speed,
                    }
                }
            );
        })
        .catch((error) => {
            console.warn(error);
        })
    }
    
    componentDidMount = () => this.fetchData()

    componentDidUpdate = (prevProps) =>{
        if(prevProps.zipCode !== this.props.zipCode){
            this.fetchData()
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/5.jpg')} style={styles.backdrop}>
                    <Text style={styles.zipcodetext}>Zip code is {this.props.zipCode}</Text>
                    <Forecast {...this.state.forecast}/>
                    
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backdrop:{
       
        width:'100%',
        height: '100%',
        alignItems: 'center',
    },
    zipcodetext:{
        backgroundColor: '#00FFFF',
        opacity: 0.55,  
        fontSize : 35,
        paddingTop: 28,
    }

  });