import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from "react-native";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
    title: "",
    caption: "",
    url: require('../images/teja-jae-rose.png')
  
  },
  { 
    title: "",
    caption: "",
    url: require('../images/bro-gregory.png') 
      
  },
  {
    title: "",
    caption: "",
    url:require('../images/sis-subrina.png')
  },
  {
    title: "",
    caption: "",
    url: require('../images/sis-cindy.png'),
      
  },
  {
    title: "",
    caption: "",
    url: require("../images/sis-careena.png"),
  },
  {
    title: "",
    caption: "",
    url: require('../images/bro-raymond.png'),
  },
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0)

  useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  })
  
  return (
    <View style={{width:'auto', height:'auto', marginTop:0,}}>
      <Slideshow position={position} dataSource={dataSource} />
    </View>
  );
};

export default ImageSlider;