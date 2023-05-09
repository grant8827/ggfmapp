import React from 'react'
import { View, Image, StyleSheet, Text, Linking, } from 'react-native'

const SocialIcon = () => {
  return (
  
      <View style={styles.icon}>

      <Text style={styles.socialIcon} onPress={() => Linking.openURL('https://www.facebook.com/ggfm.jamaica/')} >
        <Image source={require('../images/social-media-icon/facebook.png')} style={styles.socialMedia}/></Text>
      <Text style={styles.socialIcon} onPress={() => Linking.openURL('https://www.instagram.com/ggfm90.1/')} >
        <Image source={require('../images/social-media-icon/instagram.png')} style={styles.socialMedia}/></Text>
      <Text style={styles.socialIcon} onPress={() => Linking.openURL('https://www.tiktok.com/@ggfmjamaica')} >
        <Image source={require('../images/social-media-icon/tik-tok.png')} style={styles.socialMedia}/></Text>
      <Text style={styles.socialIcon} onPress={() => Linking.openURL('https://www.youtube.com/@ggfm90.12')} >
        <Image source={require('../images/social-media-icon/youtube.png')} style={styles.socialMedia}/></Text>
  </View>
    
  )
};


const styles = StyleSheet.create({
    icon:{
        flexDirection:'row',
        height:80,
        width:'100%',
        justifyContent:'center'
        },
    
    logo:{
        width: 250,
        height:250,
        borderRadius: 50,
        margin: 20,
        padding:20,
    },
    socialMedia:{
        width: 50,
        height:50,   
      },
      socialIcon:{
        marginRight:20,
      }

});


export default SocialIcon;
