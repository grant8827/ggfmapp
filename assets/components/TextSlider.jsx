import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextCarousel from 'react-native-text-carousel';
 


const TextSlider = () => {
  return (
    <View  style={style.TextSlider}>
       
        <View style={{ backgroundColor:'darkred', marginLeft:5,}}><Text style={{fontSize:20, color:'#fff', marginTop:0, marginLeft:5, fontWeight:'800', width:70, }}>Daily Shows</Text></View>
       <TextCarousel>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>T.G.I.M 6:00Am-10:00Am With Cindy Martin</Text></View>
      </TextCarousel.Item>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>Total Praise 10:00Am - 2:00Pm With Raymond Lindsay</Text></View>
      </TextCarousel.Item>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>Praise Connection 2:00Pm - 6:00Pm With Teja-Jae Rose</Text></View>
      </TextCarousel.Item>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>Evening Glory 6:00Pm - 10:00Pm With Subrina Plunkett</Text></View>
      </TextCarousel.Item>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>Gospel Vibration 7:00Am - 12:00Pm With Gregory Grant</Text></View>
      </TextCarousel.Item>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>Gospel In Motion 12:00Pm - 5:00Pm With Carrena James</Text></View>
      </TextCarousel.Item>
      <TextCarousel.Item>
        <View><Text style={style.textInfo}>Explosive Gospel Power 5:00Pm - 10:00Pm </Text></View>
      </TextCarousel.Item>
    </TextCarousel>
        </View>
  )
}

const style = StyleSheet.create({
TextSlider:{
    backgroundColor:'#333333',
    width:'100%',
    textAlign:'center',
    flexDirection:'row',
    height:50,
},
textInfo:{
    color:'#fff',
     textAlign:'center',
   
     width:290,
},

})
export default TextSlider