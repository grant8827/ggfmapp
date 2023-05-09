// React Native Get Current Date Time
// https://aboutreact.com/react-native-get-current-date-time/

import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, useState, useEffect} from 'react-native';
import TextSlider from './TextSlider';
const App = () => {
 
  return (
  <ScrollView>
      
      <View style={StyleSheet.container}>
      <View style={{backgroundColor: 'darkred', width: 400, height:30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',}}>
    <Text style={{color: 'white'}}>Good Gospel For Your Every Day Living</Text>
  
      </View>
      <View style={{alignItems:'center'}}>
      <Image
          source={require('../images/ggbglogo.jpg')}
          style={{width: 400, height: 80, margin: 0,}}
        />
        <TextSlider />
        <View style={{backgroundColor:'#f25600', width:'100%', height:3,}}></View>
</View>
     
      </View>
   <View style={{backgroundColor: '#d41200', width: 'auto', height: 50,}}>
    <View style={{ backgroundColor:'#f25600', width:76, marginLeft:5, height:80, }}><Image source={require('../images/white-home-icon-png-21.jpg')} style={{width:40, height:40, marginLeft:20, marginTop:7,}}/>
</View>
   <Text>Home</Text>
   </View>
     
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container:{
    backgroundColor: 'gray',
    
  }

})

export default App;